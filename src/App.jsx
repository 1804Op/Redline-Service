import React from "react";

export default function App() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.overlay}>
          <div style={styles.left}>
            <div style={styles.badge}>Mobile LKW Diagnose</div>

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
    backgroundColor: "#050505",
    color: "#ffffff",
    fontFamily: "Arial, sans-serif",
  },

  hero: {
    backgroundImage:
      "linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.84)), url('/truck-bg.jpg')",
    backgroundSize: "50%",
    backgroundPosition: "78% center",
    backgroundRepeat: "no-repeat",
    backgroundColor: "#050505",
    minHeight: "100vh",
    padding: "40px 7% 110px",
  },

  overlay: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: "50px",
    maxWidth: "1400px",
    margin: "0 auto",
    alignItems: "start",
  },

  left: {
    width: "100%",
    marginTop: "260px",
  },

  badge: {
    display: "inline-block",
    background: "#ef111b",
    color: "#fff",
    padding: "10px 18px",
    borderRadius: "999px",
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "30px",
    boxShadow: "0 0 20px rgba(255,0,0,0.35)",
  },

  text: {
    fontSize: "25px",
    color: "#f1f1f1",
    maxWidth: "540px",
    lineHeight: "1.7",
    fontWeight: "700",
  },

  button: {
    marginTop: "45px",
    background: "#ef111b",
    color: "#fff",
    border: "none",
    padding: "20px 38px",
    borderRadius: "18px",
    fontSize: "18px",
    fontWeight: "900",
    cursor: "pointer",
    boxShadow: "0 0 18px rgba(239,17,27,0.35)",
  },

  infoBox: {
    marginTop: "34px",
    fontSize: "19px",
    color: "#f1f1f1",
    lineHeight: "2",
    fontWeight: "700",
  },

  card: {
    background: "rgba(15,15,15,0.72)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: "30px",
    padding: "42px",
    boxShadow: "0 0 45px rgba(0,0,0,0.65)",
    backdropFilter: "blur(10px)",
    marginTop: "340px",
    marginLeft: "120px",
    maxWidth: "520px",
  },

  cardTitle: {
    fontSize: "38px",
    marginBottom: "30px",
    fontWeight: "900",
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
    fontSize: "18px",
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
