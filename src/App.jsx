import React from "react";

export default function App() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.overlay}>
          <div style={styles.left}>
            <div style={styles.badge}>Mobile LKW Diagnose</div>

            <h1 style={styles.title}>
              <span style={styles.red}>Redline</span> Service
            </h1>

            <p style={styles.text}>
              Mobile Diagnose, Fehleranalyse und schnelle Hilfe für LKW,
              Nutzfahrzeuge und Speditionen.
            </p>

            <a
              href="https://wa.me/4915567141137"
              target="_blank"
              rel="noreferrer"
              style={styles.button}
            >
              💬 Jetzt per WhatsApp anfragen
            </a>

            <div style={styles.infoBox}>
              <p>📍 Einsatzgebiet NRW &amp; Umgebung</p>
              <p>📞 +49 155 67141137</p>
              <p>🚨 Auch Samstag &amp; Sonntag erreichbar</p>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Fehleranalyse vor Ort</h2>

            <div style={styles.list}>
              <div style={styles.item}>🔧 Motorsteuergerät prüfen</div>
              <div style={styles.item}>💧 AdBlue / SCR Analyse</div>
              <div style={styles.item}>🚨 ABS / EBS Fehlercodes</div>
              <div style={styles.item}>⚙️ DPF Regeneration starten</div>
            </div>
          </div>
        </div>
      </section>

      <section style={styles.services}>
        <h2 style={styles.sectionTitle}>Unsere Leistungen</h2>
        <div style={styles.redLine}></div>

        <div style={styles.grid}>
          <div style={styles.serviceCard}>
            <div style={styles.icon}>🔍</div>
            <h3>LKW Diagnose</h3>
            <p>Fehlercodes auslesen und direkt analysieren.</p>
          </div>

          <div style={styles.serviceCard}>
            <div style={styles.icon}>💧</div>
            <h3>AdBlue Probleme</h3>
            <p>Unterstützung bei SCR- und AdBlue-Fehlern.</p>
          </div>

          <div style={styles.serviceCard}>
            <div style={styles.icon}>🛠️</div>
            <h3>Pannenhilfe</h3>
            <p>Schnelle Unterstützung für Fahrer &amp; Speditionen.</p>
          </div>

          <div style={styles.serviceCard}>
            <div style={styles.icon}>⚙️</div>
            <h3>Regeneration</h3>
            <p>DPF Regeneration und Fehlerbewertung.</p>
          </div>
        </div>
      </section>

      <footer style={styles.footer}>
        © 2026 Redline Service • Mobile LKW Diagnose • WhatsApp:
        +49 155 67141137
      </footer>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#050505",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
  },

  hero: {
    minHeight: "100vh",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.72)), url('/truck-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    padding: "0 5%",
  },

  overlay: {
    width: "100%",
    maxWidth: "1500px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 500px",
    gap: "120px",
    alignItems: "center",
  },

  left: {
    width: "100%",
    maxWidth: "700px",
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
    fontSize: "92px",
    lineHeight: "0.95",
    marginBottom: "24px",
    fontWeight: "900",
  },

  red: {
    color: "#ff2b2b",
  },

  text: {
    fontSize: "32px",
    lineHeight: "1.6",
    maxWidth: "760px",
    color: "#f1f1f1",
    marginBottom: "40px",
  },

  button: {
    display: "inline-block",
    background: "#ff1a1a",
    color: "#fff",
    padding: "18px 34px",
    borderRadius: "16px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "20px",
    boxShadow: "0 0 30px rgba(255,0,0,0.45)",
    marginBottom: "35px",
  },

  infoBox: {
    fontSize: "20px",
    lineHeight: "2",
    color: "#f1f1f1",
  },

  card: {
    background: "rgba(15,15,15,0.88)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "28px",
    padding: "40px",
    boxShadow: "0 0 40px rgba(0,0,0,0.8)",
    backdropFilter: "blur(8px)",
  },

  cardTitle: {
    fontSize: "42px",
    marginBottom: "30px",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },

  item: {
    background: "rgba(255,255,255,0.08)",
    padding: "22px",
    borderRadius: "18px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "18px",
  },

  services: {
    padding: "70px 7% 100px",
    background: "#080808",
    textAlign: "center",
    marginTop: "-40px",
  },

  sectionTitle: {
    fontSize: "58px",
    marginBottom: "18px",
  },

  redLine: {
    width: "90px",
    height: "5px",
    background: "#ff1a1a",
    margin: "0 auto 60px auto",
    borderRadius: "999px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: "30px",
    maxWidth: "1400px",
    margin: "0 auto",
  },

  serviceCard: {
    background: "#121212",
    borderRadius: "28px",
    padding: "40px",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#f1f1f1",
  },

  icon: {
    fontSize: "56px",
    marginBottom: "20px",
  },

  footer: {
    borderTop: "1px solid #222",
    padding: "30px",
    textAlign: "center",
    color: "#999",
    fontSize: "16px",
    background: "#050505",
  },
};
