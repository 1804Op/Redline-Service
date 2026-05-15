import React from "react";

export default function App() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.overlay}>
          <div style={styles.left}>
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

            <div style={styles.info}>
              <p>📍 Einsatzgebiet NRW & Umgebung</p>
              <p>📞 +49 155 67141137</p>
              <p>⏰ Auch Samstag & Sonntag erreichbar</p>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Fehleranalyse vor Ort</h2>

            <div style={styles.item}>🔧 Motorsteuergerät prüfen</div>
            <div style={styles.item}>💧 AdBlue / SCR Analyse</div>
            <div style={styles.item}>🛑 ABS / EBS Fehlercodes</div>
            <div style={styles.item}>⚙️ DPF Regeneration starten</div>
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
            <div style={styles.icon}>🔧</div>
            <h3>Pannenhilfe</h3>
            <p>Schnelle Unterstützung für Fahrer & Speditionen.</p>
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
    margin: 0,
    background: "#050505",
    fontFamily: "Arial, sans-serif",
    color: "#fff",
    overflowX: "hidden",
  },

  hero: {
    minHeight: "100vh",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.75)), url('/truck-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "60px 7%",
  },

  overlay: {
    width: "100%",
    maxWidth: "1400px",
    display: "grid",
    gridTemplateColumns: "1fr 420px",
    gap: "70px",
    alignItems: "center",
  },

  left: {
    maxWidth: "700px",
  },

  title: {
    fontSize: "82px",
    lineHeight: 1,
    marginBottom: "30px",
    fontWeight: "900",
  },

  red: {
    color: "#ff2a2a",
  },

  text: {
    fontSize: "28px",
    lineHeight: 1.5,
    color: "#f2f2f2",
    marginBottom: "40px",
    maxWidth: "750px",
  },

  button: {
    display: "inline-block",
    background: "#ff2a2a",
    color: "#fff",
    padding: "20px 34px",
    borderRadius: "14px",
    fontSize: "22px",
    textDecoration: "none",
    fontWeight: "bold",
    marginBottom: "35px",
    boxShadow: "0 0 25px rgba(255,0,0,0.4)",
  },

  info: {
    fontSize: "22px",
    lineHeight: 2,
    color: "#f2f2f2",
  },

  card: {
    background: "rgba(10,10,10,0.82)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "28px",
    padding: "35px",
    backdropFilter: "blur(8px)",
    boxShadow: "0 0 40px rgba(0,0,0,0.7)",
  },

  cardTitle: {
    fontSize: "42px",
    marginBottom: "30px",
    fontWeight: "bold",
  },

  item: {
    background: "rgba(255,255,255,0.08)",
    padding: "22px",
    borderRadius: "16px",
    marginBottom: "18px",
    fontSize: "20px",
    fontWeight: "bold",
  },

  services: {
    padding: "90px 7%",
    background: "#050505",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "52px",
    marginBottom: "14px",
  },

  redLine: {
    width: "90px",
    height: "5px",
    background: "#ff2a2a",
    margin: "0 auto 60px",
    borderRadius: "999px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: "30px",
    maxWidth: "1300px",
    margin: "0 auto",
  },

  serviceCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "26px",
    padding: "45px 30px",
    textAlign: "center",
  },

  icon: {
    fontSize: "54px",
    marginBottom: "20px",
  },

  footer: {
    borderTop: "2px solid #ff2a2a",
    padding: "30px",
    textAlign: "center",
    color: "#bdbdbd",
    background: "#050505",
    fontSize: "18px",
  },
};
