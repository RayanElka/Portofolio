import { useRef, useState, type FormEvent } from "react";
import { profile, type Locale } from "../content/portfolio";
import { Arrow } from "./SiteLayout";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm({ locale }: { locale: Locale }) {
  const [status, setStatus] = useState<Status>("idle");
  const pending = useRef(false);
  const nl = locale === "nl";
  const message = {
    idle: "",
    sending: nl ? "Je bericht wordt verstuurd…" : "Sending your message…",
    success: nl ? "Je bericht is verstuurd." : "Your message was sent.",
    error: nl ? "Versturen is mislukt. Probeer opnieuw of stuur me een e-mail." : "Your message could not be sent. Try again or email me directly.",
  }[status];

  async function sendMessage(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;

    const form = event.currentTarget;
    const fields = new FormData(form);
    pending.current = true;
    setStatus("sending");
    try {
      const response = await fetch(profile.formEndpoint, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fields,
        signal: AbortSignal.timeout(15_000),
      });
      if (!response.ok) throw new Error("Contact request failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      pending.current = false;
    }
  }

  return (
    <form className="panel contact-form" action={profile.formEndpoint} method="post" onSubmit={sendMessage}>
      <h2>{nl ? "Laat een bericht achter" : "Leave a message"}</h2>
      <label htmlFor="name">{nl ? "Naam" : "Name"}</label>
      <input id="name" name="name" autoComplete="name" required maxLength={120} />
      <label htmlFor="email">{nl ? "E-mailadres" : "Email address"}</label>
      <input id="email" name="email" type="email" autoComplete="email" required maxLength={254} />
      <label htmlFor="message">{nl ? "Bericht" : "Message"}</label>
      <textarea id="message" name="message" rows={5} required maxLength={4000} />
      <button className="button primary" type="submit" disabled={status === "sending"}>
        {nl ? "Verstuur bericht" : "Send message"} <Arrow />
      </button>
      <p className="form-status" role="status">{message}</p>
    </form>
  );
}
