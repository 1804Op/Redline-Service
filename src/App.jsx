import React from "react";

export default function App() {
  return (
    <main style={styles.page}>
      <section style={styles.hero}>
        <div style={styles.overlay}>

          {/* LINKE SEITE */}
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
              <p>🚨 Auch Samstag & Sonntag erreichbar</p>
              <p>🔧 Mobile LKW Diagnose direkt vor Ort</p>
            </div>
          </div>

          {/* RECHTE SEITE */}
          <div style={styles.card}>
            <img
              src="/truck-bg.jpg"
              alt="Truck"
              style={styles.cardImage}
            />

            <div style={styles.cardOverlay}>
              Fehler auslesen • Fehler löschen • Fehleranalyse •
              Regeneration starten • schnelle Hilfe bei Problemen
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "#050505",
    color: "#fff",
    fontFamily: "Arial, sans-serif",
  },

  hero: {
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
    background:
      "radial-gradient(circle at center, #1a1a1a 0%, #050505 70%)",
  },

  overlay: {
    width: "100%",
    maxWidth: "1300px",
    display: "grid",
    gridTemplateColumns: "1fr 500px",
    gap: "70px",
    alignItems: "center",
  },

  left: {
    maxWidth: "550px",
  },

  title: {
    fontSize: "88px",
    lineHeight: "0.95",
    marginBottom: "30px",
    fontWeight: "900",
  },

  red: {
    color: "#ff1a1a",
    display: "block",
  },

  text: {
    fontSize: "26px",
    lineHeight: "1.5",
    color: "#f0f0f0",
    marginBottom: "35px",
    fontWeight: "500",
  },

  button: {
    display: "inline-block",
    background: "#ff1a1a",
    color: "#fff",
    padding: "20px 38px",
    borderRadius: "16px",
    textDecoration: "none",
    fontSize: "22px",
    fontWeight: "bold",
    boxShadow: "0 0 30px rgba(255,0,0,0.5)",
    marginBottom: "35px",
  },

  info: {
    display: "flex",
    flexDirection: "column",
    gap: "18px",
    fontSize: "22px",
    color: "#f5f5f5",
    fontWeight: "500",
  },

  card: {
    position: "relative",
    borderRadius: "28px",
    overflow: "hidden",
    background: "#111",
    boxShadow: "0 0 40px rgba(0,0,0,0.7)",
    border: "1px solid rgba(255,255,255,0.1)",
  },

  cardImage: {
    width: "100%",
    height: "700px",
    objectFit: "cover",
    display: "block",
  },

  cardOverlay: {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    background: "rgba(0,0,0,0.75)",
    padding: "24px",
    fontSize: "22px",
    lineHeight: "1.5",
    fontWeight: "bold",
    color: "#fff",
    backdropFilter: "blur(8px)",
  },
};
