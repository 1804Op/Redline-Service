import React from "react";

export default function App() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.content}>
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
              style={{ textDecoration: "none" }}
            >
              <button style={styles.button}>
                💬 Jetzt per WhatsApp anfragen
              </button>
            </a>

            <div style={styles.info}>
              <p>📍 Einsatzgebiet NRW &amp; Umgebung</p>
              <p>📞 +49 155 67141137</p>
              <p>⏰ Auch Samstag &amp; Sonntag erreichbar</p>
            </div>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Fehleranalyse vor Ort</h2>

            <div style={styles.item}>
              🔧 Motorsteuergerät prüfen
            </div>

            <div style={styles.item}>
              💧 AdBlue / SCR Analyse
            </div>

            <div style={styles.item}>
              🛑 ABS / EBS Fehlercodes
            </div>

            <div style={styles.item}>
              ⚙️ DPF Regeneration starten
            </div>
          </div>
        </div>
      </section>

      <section style={styles.services}>
        <h2 style={styles.sectionTitle}>Unsere Leistungen</h2>

        <div style={styles.line}></div>

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
        © 2026 Redline Service · Mobile LKW Diagnose · WhatsApp:
        +49 155 67141137
      </footer>
    </main>
  );
}

const styles = {
  page: {
    margin: 0,
    minHeight: "100vh",
    background: "#030303",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  },

  hero: {
    minHeight: "820px",
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.30), rgba(0,0,0,0.55)), url('/truck-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    padding: "340px 8% 100px",
  },

  content: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "90px",
    maxWidth: "1350px",
    margin: "0 auto",
    alignItems: "center",
  },

  left: {
    maxWidth: "620px",
  },

  badge: {
    display: "inline-block",
    background: "#f01822",
    padding: "14px 26px",
    borderRadius: "999px",
    fontWeight: "900",
    fontSize: "15px",
    marginBottom: "28px",
    boxShadow: "0 0 25px rgba(239,17,27,0.55)",
  },

  title: {
    fontSize: "64px",
    lineHeight: "1",
    margin: "0 0 26px",
    fontWeight: "900",
  },

  red: {
    color: "#f01822",
  },

  text: {
    fontSize: "23px",
    lineHeight: "1.6",
    color: "#f1f1f1",
    marginBottom: "34px",
  },

  button: {
    background: "#f01822",
    color: "#fff",
    border: "none",
    padding: "20px 36px",
    borderRadius: "16px",
    fontSize: "18px",
    fontWeight: "900",
    cursor: "pointer",
    boxShadow: "0 0 30px rgba(239,17,27,0.5)",
  },

  info: {
    marginTop: "34px",
    fontSize: "18px",
    lineHeight: "1.9",
    color: "#f3f3f3",
  },

  card: {
    background: "rgba(15,15,15,0.78)",
    border: "1px solid rgba(255,255,255,0.15)",
    borderRadius: "30px",
    padding: "42px",
    backdropFilter: "blur(8px)",
    boxShadow: "0 0 45px rgba(0,0,0,0.8)",
  },

  cardTitle: {
    fontSize: "38px",
    marginBottom: "30px",
    fontWeight: "900",
  },

  item: {
    background: "rgba(255,255,255,0.08)",
    borderRadius: "16px",
    padding: "22px",
    marginBottom: "18px",
    fontSize: "17px",
    fontWeight: "800",
  },

  services: {
    background: "#050505",
    padding: "90px 7%",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "52px",
    margin: 0,
    fontWeight: "900",
  },

  line: {
    width: "90px",
    height: "5px",
    background: "#f01822",
    margin: "24px auto 60px",
    borderRadius: "10px",
  },

  grid: {
    maxWidth: "1300px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "28px",
  },

  serviceCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "24px",
    padding: "42px 28px",
    minHeight: "250px",
    boxShadow: "0 0 30px rgba(0,0,0,0.45)",
  },

  icon: {
    fontSize: "48px",
    marginBottom: "20px",
  },

  footer: {
    borderTop: "2px solid #f01822",
    padding: "32px",
    textAlign: "center",
    color: "#aaa",
    background: "#050505",
    fontSize: "14px",
  },
};
