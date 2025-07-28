import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { name, email, message } = req.body;

  if (!name || !email || !message)
    return res.status(400).json({ error: "Vul alle velden in." });

  try {
    // Vul hieronder je eigen SMTP gegevens in
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // of je eigen SMTP server
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER, // Zet deze in een .env.local bestand
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "elkaouid@hotmail.com", // Jouw e-mailadres
      subject: "Nieuw bericht via portfolio contactformulier",
      text: message,
      html: `<p><b>Naam:</b> ${name}</p>
             <p><b>Email:</b> ${email}</p>
             <p><b>Bericht:</b><br/>${message}</p>`,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: "Er ging iets mis met verzenden." });
  }
}
