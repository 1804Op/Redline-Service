import React from "react";

export default function App() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                background: "#991b1b",
                padding: "10px 18px",
                borderRadius: "30px",
                marginBottom: "20px",
                fontSize: "14px",
              }}
            >
              Mobile LKW Diagnose
            </div>

            <h1
              style={{
                fontSize: "64px",
                fontWeight: "900",
                margin: "0",
                lineHeight: "1.1",
              }}
            >
              Redline Service
            </h1>

            <p
              style={{
                marginTop: "25px",
                color: "#ccc",
                fontSize: "20px",
                lineHeight: "1.7",
              }}
            >
              Mobile Diagnose, Fehleranalyse und schnelle Hilfe für
              Nutzfahrzeuge und Speditionen.
            </p>

            <a
              href="https://wa.me/4915567141137"
              target="_blank"
              rel="noreferrer"
            >
              <button
                style={{
                  marginTop: "30px",
                  background: "#dc2626",
                  color: "white",
                  border: "none",
                  padding: "18px 30px",
                  borderRadius: "16px",
                  fontSize: "18px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Jetzt per WhatsApp anfragen
              </button>
            </a>

            <div style={{ marginTop: "30px", color: "#ccc" }}>
              <p>📍 Einsatzgebiet NRW &amp; Umgebung</p>
              <p>📞 +49 155 67141137</p>
              <p>⏰ Auch Samstag &amp; Sonntag erreichbar</p>
            </div>
          </div>

          <div
            style={{
              background: "#111",
              borderRadius: "24px",
              padding: "35px",
              border: "1px solid #222",
            }}
          >
            <h2
              style={{
                fontSize: "32px",
                marginBottom: "25px",
              }}
            >
              Fehleranalyse vor Ort
            </h2>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "15px",
              }}
            >
              <div
                style={{
                  background: "#1a1a1a",
                  padding: "15px",
                  borderRadius: "14px",
                }}
              >
                Motorsteuergerät prüfen
              </div>

              <div
                style={{
                  background: "#1a1a1a",
                  padding: "15px",
                  borderRadius: "14px",
                }}
              >
                AdBlue / SCR Analyse
              </div>

              <div
                style={{
                  background: "#1a1a1a",
                  padding: "15px",
                  borderRadius: "14px",
                }}
              >
                ABS / EBS Fehlercodes
              </div>

              <div
                style={{
                  background: "#1a1a1a",
                  padding: "15px",
                  borderRadius: "14px",
                }}
              >
                DPF Regeneration starten
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          background: "#0a0a0a",
          padding: "80px 20px",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "42px",
              marginBottom: "50px",
            }}
          >
            Unsere Leistungen
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: "20px",
            }}
          >
            <div
              style={{
                background: "#111",
                padding: "25px",
                borderRadius: "20px",
              }}
            >
              <h3>LKW Diagnose</h3>
              <p style={{ color: "#bbb", lineHeight: "1.6" }}>
                Fehlercodes auslesen und direkt analysieren.
              </p>
            </div>

            <div
              style={{
                background: "#111",
                padding: "25px",
                borderRadius: "20px",
              }}
            >
              <h3>AdBlue Probleme</h3>
              <p style={{ color: "#bbb", lineHeight: "1.6" }}>
                Unterstützung bei SCR- und AdBlue-Fehlern.
              </p>
            </div>

            <div
              style={{
                background: "#111",
                padding: "25px",
                borderRadius: "20px",
              }}
            >
              <h3>Pannenhilfe</h3>
              <p style={{ color: "#bbb", lineHeight: "1.6" }}>
                Schnelle Unterstützung für Fahrer &amp; Speditionen.
              </p>
            </div>

            <div
              style={{
                background: "#111",
                padding: "25px",
                borderRadius: "20px",
              }}
            >
              <h3>Regeneration</h3>
              <p style={{ color: "#bbb", lineHeight: "1.6" }}>
                DPF Regeneration und Fehlerbewertung.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer
        style={{
          borderTop: "1px solid #222",
          padding: "30px",
          textAlign: "center",
          color: "#777",
        }}
      >
        © 2026 Redline Service · Mobile LKW Diagnose
      </footer>
    </main>
  );
}
