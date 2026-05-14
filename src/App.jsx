import React from "react";

export default function App() {
  return ( 
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.overlay}>
          <div style={styles.left}>
            <div style={styles.logo}>
              RED<span style={{ color: "#ffffff" }}>LINE</span>
              <small style={styles.logoSmall}> SERVICE</small>
            </div>

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
                💬 Jetzt per WhatsApp anfragen
              </button>
            </a>

            <div style={styles.infoBox}>
              <p>📍 Einsatzgebiet NRW &amp; Umgebung</p>
              <p>📞 +49 155 67141137</p>
              <p>⏰ Auch Samstag &amp; Sonntag erreichbar</p>
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
                🛑 ABS / EBS Fehlercodes
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
    minHeight: "100vh",
    backgroundColor: "#050505",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
  },

  hero: {
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.82)), url('/truck-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    minHeight: "720px",
    padding: "70px 7% 110px",
  },

  overlay: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "70px",
    maxWidth: "1400px",
    margin: "0 auto",
    alignItems: "center",
  },

  left: {
    width: "100%",
  },

  logo: {
    fontSize: "42px",
    fontWeight: "900",
    color: "#ef111b",
    marginBottom: "45px",
    letterSpacing: "-1px",
  },

  logoSmall: {
    fontSize: "22px",
    color: "#ffffff",
  },

  badge: {
    display: "inline-block",
    background: "#ef111b",
    color: "#fff",
    padding: "12px 22px",
    borderRadius: "999px",
    fontSize: "15px",
    fontWeight: "bold",
    marginBottom: "28px",
    boxShadow: "0 0 25px rgba(239,17,27,0.5)",
  },

  title: {
    fontSize: "72px",
    lineHeight: "1",
    marginBottom: "28px",
    fontWeight: "900",
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
    background: "#ef111b",
    color: "#fff",
    border: "none",
    padding: "20px 36px",
    borderRadius: "18px",
    fontSize: "18px",
    fontWeight: "900",
    cursor: "pointer",
    boxShadow: "0 0 30px rgba(239,17,27,0.55)",
  },

  infoBox: {
    marginTop: "35px",
    fontSize: "18px",
    color: "#f1f1f1",
    lineHeight: "2",
  },

  card: {
    background: "rgba(15,15,15,0.86)",
    border: "1px solid rgba(255,255,255,0.14)",
    borderRadius: "30px",
    padding: "42px",
    boxShadow: "0 0 45px rgba(0,0,0,0.75)",
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
    background: "rgba(255,255,255,0.09)",
    padding: "20px",
    borderRadius: "16px",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "17px",
  },

  services: {
    padding: "95px 7%",
    background: "linear-gradient(#050505, #0b0b0b)",
    textAlign: "center",
  },

  sectionTitle: {
    fontSize: "48px",
    marginBottom: "10px",
  },

  redLine: {
    width: "80px",
    height: "5px",
    background: "#ef111b",
    margin: "20px auto 60px",
    borderRadius: "10px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "28px",
    maxWidth: "1300px",
    margin: "0 auto",
  },

  serviceCard: {
    background: "rgba(255,255,255,0.04)",
    borderRadius: "26px",
    padding: "40px 30px",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#e8e8e8",
    minHeight: "245px",
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
    fontSize: "14px",
    background: "#050505",
  },
};
