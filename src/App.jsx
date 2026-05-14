import React from "react";

export default function App() {
  return (
    <div style={styles.page}>
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

            <div style={styles.infoBox}>
              <div>📍 Einsatzgebiet NRW & Umgebung</div>
              <div>📞 +49 155 67141137</div>
              <div>🚨 Auch Samstag & Sonntag erreichbar</div>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Fehleranalyse vor Ort</h2>

            <div style={styles.list}>
              <div style={styles.item}>
                🔧 Motorsteuergerät prüfen
              </div>

              <div style={styles.item}>
                💧 AdBlue / SCR Analyse
              </div>

              <div style={styles.item}>
                🚨 ABS / EBS Fehlercodes
              </div>

              <div style={styles.item}>
                ⚙️ DPF Regeneration starten
              </div>
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
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#050505",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
    overflow: "hidden",
  },

  hero: {
    minHeight: "100vh",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.30), rgba(0,0,0,0.72)), url('/truck-bg.jpg')",
    backgroundSize: "72%",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 6%",
  },

  overlay: {
    width: "100%",
    maxWidth: "1500px",
    display: "grid",
    gridTemplateColumns: "1fr 420px",
    gap: "70px",
    alignItems: "center",
  },

  left: {
    maxWidth: "620px",
    marginTop: "-20px",
    marginLeft: "40px",
  },

  title: {
    fontSize: "72px",
    lineHeight: "1",
    marginBottom: "20px",
    fontWeight: "900",
    letterSpacing: "-2px",
  },

  red: {
    color: "#ff2b2b",
  },

  text: {
    fontSize: "22px",
    lineHeight: "1.6",
    color: "#f1f1f1",
    marginBottom: "32px",
    maxWidth: "560px",
    textShadow: "0 0 18px rgba(0,0,0,0.9)",
  },

  button: {
    display: "inline-block",
    background: "linear-gradient(135deg,#ff1a1a,#c40000)",
    color: "#fff",
    padding: "18px 34px",
    borderRadius: "14px",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px",
    boxShadow: "0 0 30px rgba(255,0,0,0.45)",
    marginBottom: "35px",
    transition: "0.3s",
  },

  infoBox: {
    fontSize: "20px",
    lineHeight: "2",
    color: "#f5f5f5",
    textShadow: "0 0 10px rgba(0,0,0,0.8)",
  },

  card: {
    background: "rgba(18,18,18,0.82)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "26px",
    padding: "26px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 0 40px rgba(0,0,0,0.75)",
    width: "390px",
    marginTop: "-10px",
  },

  cardTitle: {
    fontSize: "36px",
    marginBottom: "24px",
    fontWeight: "800",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },

  item: {
    background: "rgba(255,255,255,0.08)",
    padding: "18px",
    borderRadius: "14px",
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: "16px",
    border: "1px solid rgba(255,255,255,0.05)",
  },

  services: {
    background: "#080808",
    padding: "90px 7%",
    marginTop: "-40px",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "56px",
    marginBottom: "18px",
    fontWeight: "800",
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
    gap: "28px",
    maxWidth: "1400px",
    margin: "0 auto",
  },

  serviceCard: {
    background: "#121212",
    borderRadius: "26px",
    padding: "38px",
    border: "1px solid rgba(255,255,255,0.08)",
    color: "#f1f1f1",
    transition: "0.3s",
    boxShadow: "0 0 20px rgba(0,0,0,0.4)",
  },

  icon: {
    fontSize: "54px",
    marginBottom: "20px",
  },

  footer: {
    borderTop: "1px solid #222",
    padding: "28px",
    textAlign: "center",
    color: "#888",
    fontSize: "15px",
    background: "#050505",
  },
};
