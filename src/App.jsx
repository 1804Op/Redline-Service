import React from "react";

export default function App() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.overlay}></div>

        <div style={styles.logo}>RED<span>LINE</span><small>SERVICE</small></div>

        <div style={styles.heroContent}>
          <div style={styles.left}>
            <div style={styles.badge}>Mobile LKW Diagnose</div>

            <h1 style={styles.title}>
              <span>Redline</span> Service
            </h1>

            <p style={styles.text}>
              Mobile Diagnose, Fehleranalyse und schnelle Hilfe für LKW,
              Nutzfahrzeuge und Speditionen.
            </p>

            <a href="https://wa.me/4915567141137" target="_blank" rel="noreferrer">
              <button style={styles.button}>💬 Jetzt per WhatsApp anfragen</button>
            </a>

            <div style={styles.infoBox}>
              <p>📍 Einsatzgebiet NRW & Umgebung</p>
              <p>📞 +49 155 67141137</p>
              <p>⏰ Auch Samstag & Sonntag erreichbar</p>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Fehleranalyse vor Ort</h2>
            <div style={styles.list}>
              <div style={styles.item}>🔧 Motorsteuergerät prüfen</div>
              <div style={styles.item}>💧 AdBlue / SCR Analyse</div>
              <div style={styles.item}>🛑 ABS / EBS Fehlercodes</div>
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
        © 2026 Redline Service · Mobile LKW Diagnose · WhatsApp: +49 155 67141137
      </footer>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: "#030303",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  },
  hero: {
    position: "relative",
    minHeight: "720px",
    padding: "50px 7%",
    background:
      "linear-gradient(120deg, rgba(0,0,0,0.95), rgba(0,0,0,0.45)), radial-gradient(circle at 70% 30%, rgba(220,0,0,0.45), transparent 35%), linear-gradient(135deg, #070707, #111, #000)",
    overflow: "hidden",
  },
  overlay: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.15), #050505 95%)",
  },
  logo: {
    position: "relative",
    zIndex: 2,
    fontSize: "42px",
    fontWeight: "900",
    color: "#e50914",
    letterSpacing: "-2px",
    marginBottom: "70px",
  },
  logo: {
    position: "relative",
    zIndex: 2,
    fontSize: "44px",
    fontWeight: "900",
    color: "#e50914",
    marginBottom: "70px",
  },
  heroContent: {
    position: "relative",
    zIndex: 2,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "70px",
    alignItems: "center",
  },
  left: {
    maxWidth: "650px",
  },
  badge: {
    display: "inline-block",
    backgroundColor: "#ef111b",
    padding: "14px 24px",
    borderRadius: "30px",
    fontSize: "16px",
    fontWeight: "800",
    marginBottom: "30px",
    boxShadow: "0 0 25px rgba(239,17,27,0.5)",
  },
  title: {
    fontSize: "72px",
    lineHeight: "1",
    margin: 0,
    fontWeight: "900",
  },
  text: {
    fontSize: "22px",
    lineHeight: "1.7",
    color: "#e5e5e5",
    maxWidth: "620px",
  },
  button: {
    marginTop: "28px",
    backgroundColor: "#ef111b",
    color: "#fff",
    border: "none",
    borderRadius: "18px",
    padding: "20px 34px",
    fontSize: "18px",
    fontWeight: "900",
    cursor: "pointer",
    boxShadow: "0 0 30px rgba(239,17,27,0.55)",
  },
  infoBox: {
    marginTop: "32px",
    fontSize: "18px",
    color: "#f1f1f1",
    lineHeight: "1.8",
  },
  card: {
    background: "rgba(15,15,15,0.9)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "28px",
    padding: "38px",
    boxShadow: "0 0 40px rgba(0,0,0,0.8)",
    backdropFilter: "blur(8px)",
  },
  cardTitle: {
    fontSize: "34px",
    marginBottom: "30px",
  },
  list: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
  },
  item: {
  backgroundImage:
  "linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.88)), url('./truck-bg.jpg')",
backgroundSize: "cover",
backgroundPosition: "center",
backgroundRepeat: "no-repeat",
  },
  services: {
    background: "linear-gradient(#050505, #0b0b0b)",
    padding: "90px 7%",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: "46px",
    margin: 0,
  },
  redLine: {
    width: "80px",
    height: "5px",
    backgroundColor: "#ef111b",
    margin: "25px auto 60px auto",
    borderRadius: "10px",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
    gap: "28px",
  },
  serviceCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.12)",
    borderRadius: "24px",
    padding: "40px 28px",
    minHeight: "250px",
    boxShadow: "0 0 30px rgba(0,0,0,0.5)",
  },
  icon: {
    fontSize: "48px",
    marginBottom: "20px",
  },
  footer: {
    borderTop: "2px solid #ef111b",
    padding: "32px",
    textAlign: "center",
    color: "#aaa",
    backgroundColor: "#050505",
  },
};
