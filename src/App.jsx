import React from "react";
                <MapPin className="w-5 h-5 text-red-400" />
                Einsatzgebiet NRW & Umgebung
              </div>
   <div className="flex items-center gap-2">
  <MapPin className="w-5 h-5 text-red-400" />
  <span>Einsatzgebiet NRW &amp; Umgebung</span>
</div>
            </div>
          </div>
          <div className="bg-neutral-900 border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-red-400 uppercase tracking-widest text-sm">
                  Diagnosegerät aktiv
                </p>
                <h2 className="text-3xl font-bold mt-2">
                  Fehleranalyse vor Ort
                </h2>
              </div>
              <div className="bg-red-600 p-4 rounded-2xl">
                <Gauge className="w-8 h-8" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-white/5 rounded-2xl p-4 flex justify-between">
                <span>Motorsteuergerät</span>
                <span className="text-red-400">Prüfung</span>
              </div>

              <div className="bg-white/5 rounded-2xl p-4 flex justify-between">
                <span>AdBlue / SCR</span>
                <span className="text-red-400">Analyse</span>
              </div>

              <div className="bg-white/5 rounded-2xl p-4 flex justify-between">
                <span>ABS / EBS</span>
                <span className="text-red-400">Fehlercode</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      <section className="px-6 py-20 md:px-16 bg-neutral-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-black mb-12">
            Unsere Leistungen
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/5 border border-white/10 rounded-3xl p-6"
                >
                  <div className="bg-red-600/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-5 text-red-400">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-bold mb-3">
                    {service.title}
                  </h3>

                  <p className="text-neutral-300 leading-7">
                    {service.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-16">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-4xl font-black leading-tight">
              Warum Redline Service?
            </h2>

            <p className="mt-6 text-neutral-300 text-lg leading-8">
              Schnelle Hilfe, praxisnahe Diagnose und direkte Unterstützung
              bei Problemen im täglichen Transportbetrieb.
            </p>
          </div>

          <div className="space-y-4">
            {benefits.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-2xl p-4 flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-red-400" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-8 text-center text-neutral-500 text-sm">
        © 2026 Redline Service · Mobile LKW Diagnose · WhatsApp:
        +49 155 67141137
      </footer>
    </main>
  );
}
