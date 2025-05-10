export default function Footer() {
  return (
    <footer
      style={{
        background: "#181f2b",
        color: "#fff",
        textAlign: "center",
        padding: "1rem 0",
        marginTop: "30px",
      }}
    >
      © {new Date().getFullYear()} Rayan el Kaouid
    </footer>
  );
}
