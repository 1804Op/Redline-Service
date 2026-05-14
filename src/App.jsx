import React from "react";

export default function App() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.overlay}>
          <div style={styles.left}>
            <div style={styles.badge}>Mobile LKW Diagnose</div>

            <h1 style={styles.title}>Redline Service</h1>

            <p style={styles.text}>
              Mobile Diagnose, Fehleranalyse und schnelle Hilfe für LKW,
              Nutzfahrzeuge und Speditionen.
            </p>

            <a
              href="https://wa.me/4915567141137"
              target="_blank"
              rel="noreferrer"
              style={styles.link}
            >
              <button style={styles.button}>
                Jetzt per WhatsApp anfragen
              </button>
            </a>

            <div style={styles.infoBox}>
              <p>📍 Einsatzgebiet NRW & Umgebung</p>
              <p>📞 +49 155 67141137</p>
              <p>🛠 Auch Samstag & Sonntag erreichbar</p>
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
            <p>Schnelle Unterstützung für Fahrer & Speditionen.</p>
          </div>

          <div style={styles.serviceCard}>
            <h3>Regeneration</h3>
            <p>DPF Regeneration und Fehlerbewertung.</p>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        © 2026 Redline Service • Mobile LKW Diagnose
      </footer>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#050505",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
  },

  hero: {
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.82)), url('/truck-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    padding: "100px 7%",
  },

  overlay: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: "50px",
    maxWidth: "1400px",
    margin: "0 auto",
    alignItems: "center",
  },

  left: {
    width: "100%",
  },

  badge: {
    display: "inline-block",
    background: "#ff1a1a",
    color: "#fff",
    padding: "10px 18px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "24px",
    boxShadow: "0 0 20px rgba(255,0,0,0.4)",
  },

  title: {
    fontSize: "68px",
    lineHeight: "1",
    marginBottom: "28px",
    fontWeight: "800",
  },

  text: {
    fontSize: "22px",
    color: "#f1f1f1",
    lineHeight: "1.7",
    maxWidth: "650px",
  },

  link: {
    textDecoration: "none",
  },

  button: {
    marginTop: "35px",
    background: "#ff1a1a",
    color: "#fff",
    border: "none",
    padding: "18px 34px",
    borderRadius: "16px",
    fontSize: "18px",
    fontWeight: "bold",
    cursor: "pointer",
    boxShadow: "0 0 25px rgba(255,0,0,0.45)",
  },

  infoBox: {
    marginTop: "35px",
    fontSize: "18px",
    color: "#f1f1f1",
    lineHeight: "2",
  },

  card: {
    background: "rgba(15,15,15,0.82)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "30px",
    padding: "40px",
    boxShadow: "0 0 40px rgba(0,0,0,0.7)",
    backdropFilter: "blur(8px)",
  },

  cardTitle: {
    fontSize: "38px",
    marginBottom: "30px",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  item: {
    background: "rgba(255,255,255,0.08)",
    padding: "18px",
    borderRadius: "16px",
    color: "#fff",
    fontWeight: "bold",
  },

  services: {
    padding: "90px 7%",
    background: "#080808",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "48px",
    marginBottom: "50px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "25px",
    maxWidth: "1300px",
    margin: "0 auto",
  },

  serviceCard: {
    background: "#141414",
    borderRadius: "24px",
    padding: "35px",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#e8e8e8",
  },

  footer: {
    borderTop: "1px solid #222",
    padding: "30px",
    textAlign: "center",
    color: "#888",
    fontSize: "14px",
    background: "#050505",
  },
};
