import React from "react";

export default function App() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.left}>
          <div style={styles.badge}>Mobile LKW Diagnose</div>

          <h1 style={styles.title}>Redline Service</h1>

          <p style={styles.text}>
            Mobile Diagnose, Fehleranalyse und schnelle Hilfe für LKW,
            Nutzfahrzeuge und Fuhrparks.
          </p>

          <a
            href="https://wa.me/4915567141137"
            target="_blank"
            rel="noreferrer"
          >
            <button style={styles.button}>Jetzt per WhatsApp anfragen</button>
          </a>

          <div style={styles.infoBox}>
            <p>📍 Einsatzgebiet NRW und Umgebung</p>
            <p>📞 +49 155 67141137</p>
            <p>⏰ Auch Samstag und Sonntag erreichbar</p>
          </div>
        </div>

        <div style={styles.card}>
          <h2 style={styles.cardTitle}>Fehleranalyse vor Ort</h2>

          <div style={styles.list}>
            <div style={styles.item}>Motorsteuergerät prüfen</div>
            <div style={styles.item}>AdBlue / SCR Analyse</div>
            <div style={styles.item}>ABS / EBS Fehlercodes</div>
            <div style={styles.item}>DPF Regeneration starten</div>
          </div>
        </div>
      </section>

      <section style={styles.services}>
        <h2 style={styles.sectionTitle}>Unsere Leistungen</h2>

        <div style={styles.grid}>
          <div style={styles.serviceCard}>
            <h3>LKW Diagnose</h3>
            <p>Fehlercodes auslesen und direkt analysieren.</p>
          </div>

          <div style={styles.serviceCard}>
            <h3>AdBlue Probleme</h3>
            <p>Unterstützung bei SCR- und AdBlue-Fehlern.</p>
          </div>

          <div style={styles.serviceCard}>
            <h3>Pannenhilfe</h3>
            <p>Schnelle Unterstützung für Fahrer und Speditionen.</p>
          </div>

          <div style={styles.serviceCard}>
            <h3>Regeneration</h3>
            <p>DPF Regeneration und Fehlerbewertung.</p>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        © 2026 Redline Service · Mobile LKW Diagnose · WhatsApp: +49 155 67141137
      </footer>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#000000",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
  },
  hero: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "80px 20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "40px",
    alignItems: "center",
  },
  left: {
    width: "100%",
  },
  badge: {
    display: "inline-block",
    backgroundColor: "#7f1d1d",
    color: "#ffffff",
    padding: "10px 18px",
    borderRadius: "30px",
    marginBottom: "24px",
    fontSize: "14px",
    fontWeight: "bold",
  },
  title: {
    fontSize: "56px",
    lineHeight: "1.1",
    margin: "0",
    fontWeight: "900",
  },
  text: {
    marginTop: "24px",
    color: "#cccccc",
    fontSize: "20px",
    lineHeight: "1.7",
  },
  button: {
    marginTop: "28px",
    backgroundColor: "#dc2626",
    color: "#ffffff",
    border: "none",
    padding: "18px 30px",
    borderRadius: "16px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
  },
  infoBox: {
    marginTop: "30px",
    color: "#cccccc",
    fontSize: "16px",
    lineHeight: "1.8",
  },
  card: {
    backgroundColor: "#111111",
    border: "1px solid #222222",
    borderRadius: "24px",
    padding: "35px",
  },
  cardTitle: {
    fontSize: "30px",
    marginBottom: "24px",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "14px",
  },
  item: {
    backgroundColor: "#1a1a1a",
    padding: "16px",
    borderRadius: "14px",
    color: "#eeeeee",
  },
  services: {
    backgroundColor: "#0a0a0a",
    padding: "80px 20px",
  },
  sectionTitle: {
    maxWidth: "1200px",
    margin: "0 auto 40px auto",
    fontSize: "40px",
  },
  grid: {
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
  },
  serviceCard: {
    backgroundColor: "#111111",
    border: "1px solid #222222",
    borderRadius: "20px",
    padding: "25px",
    color: "#dddddd",
  },
  footer: {
    borderTop: "1px solid #222222",
    padding: "30px 20px",
    textAlign: "center",
    color: "#777777",
    fontSize: "14px",
  },
};
