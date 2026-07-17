"use client";

export default function Contact() {
  return (
    <section id="contacto" className="py-28 px-8 lg:px-12 relative bg-white border border-gray-200">
      <div className="max-w-[1000px] mx-auto text-center">
        <div className="section-number mb-6 text-left md:text-center">06</div>

        <span className="text-champagne text-[11px] tracking-[0.4em] uppercase inline-flex items-center gap-3 mb-6 justify-center">
          <span className="w-8 h-px bg-champagne/40" />
          Contáctanos
          <span className="w-8 h-px bg-champagne/40" />
        </span>

        <h2 className="font-display text-obsidian text-4xl md:text-5xl tracking-[-0.02em] mb-6">
          Comienza Tu{" "}
          <span className="text-champagne">Búsqueda</span>
        </h2>

        <div className="w-12 h-px bg-champagne/40 mx-auto mb-8" />

        <p className="text-slate text-base max-w-xl mx-auto mb-14 leading-relaxed">
          Estamos listos para ayudarte a encontrar la propiedad de tus sueños.
          Contáctanos por WhatsApp para una consulta inmediata y personalizada.
        </p>

        {/* WhatsApp CTA — round border style */}
        <a
          href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE}?text=Hola,%20estoy%20interesado/a%20en%20una%20propiedad%20de%20lujo.%20Me%20gustaría%20recibir%20más%20información.`}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center justify-center w-32 h-32 rounded-full border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-champagne focus-visible:outline-offset-4"
        >
          <svg className="w-14 h-14 group-hover:scale-110 transition-transform duration-500" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        {/* Phone */}
        <div className="mt-8 text-slate text-sm tracking-wider">
          <span className="text-champagne font-display">+{process.env.NEXT_PUBLIC_PHONE}</span>
          <span className="mx-3 text-bone">|</span>
          <span>Disponible 24/7</span>
        </div>

        {/* Quick actions */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
          {[
            {
              href: `https://wa.me/${process.env.NEXT_PUBLIC_PHONE}?text=Hola,%20quiero%20agendar%20una%20visita%20a%20una%20propiedad`,
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              ),
              title: "Agendar Visita",
              desc: "Programa una cita privada",
            },
            {
              href: `https://wa.me/${process.env.NEXT_PUBLIC_PHONE}?text=Hola,%20quiero%20una%20asesoría%20de%20inversión`,
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              ),
              title: "Asesoría",
              desc: "Consulta de inversión",
            },
            {
              href: `https://wa.me/${process.env.NEXT_PUBLIC_PHONE}?text=Hola,%20quiero%20vender%20una%20propiedad`,
              icon: (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ),
              title: "Vender",
              desc: "Valorización de patrimonio",
            },
          ].map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-white border border-gray-200 hover:bg-obsidian hover:border-obsidian transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-champagne"
            >
              <div className="text-champagne-dim mb-5 group-hover:text-champagne transition-colors duration-500 flex justify-center">
                {item.icon}
              </div>
              <div className="text-obsidian font-display text-base mb-1 text-center group-hover:text-white transition-colors duration-500">
                {item.title}
              </div>
              <div className="text-slate text-xs text-center group-hover:text-ivory transition-colors duration-500">{item.desc}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
