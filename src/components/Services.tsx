"use client";

const services = [
  {
    num: "01",
    title: "Búsqueda Personalizada",
    description: "Agente dedicado que entiende tu visión y localiza propiedades que coinciden con tus criterios más específicos, incluso antes de llegar al mercado público.",
  },
  {
    num: "02",
    title: "Due Diligence Premium",
    description: "Verificación completa de títulos, gravámenes, planos y documentación legal. Protegemos tu inversión con el rigor que merece.",
  },
  {
    num: "03",
    title: "Asesoría de Inversión",
    description: "Análisis de mercado, proyecciones de valorización y estrategias de inversión personalizadas para maximizar el retorno de tu patrimonio.",
  },
  {
    num: "04",
    title: "Gestión Integral",
    description: "Desde la negociación hasta la escrituración, coordinamos cada detalle del proceso para que tu experiencia sea fluida y sin estrés.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-28 px-8 lg:px-12 relative bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <div className="section-number mb-6">04</div>
          <span className="text-champagne text-[11px] tracking-[0.4em] uppercase inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-champagne/40" />
            Nuestros Servicios
          </span>
          <h2 className="font-display text-obsidian text-4xl md:text-5xl tracking-[-0.02em]">
            Servicio{" "}
            <span className="text-champagne">Excepcional</span>
          </h2>
          <div className="gold-line-h w-full mt-10 opacity-30" />
        </div>

        {/* Services — editorial numbered list */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={index}
              className="group grid grid-cols-[auto_1fr] md:grid-cols-[80px_1fr_2fr] gap-6 md:gap-12 items-start py-10 border-b border-bone/40 hover:bg-pearl/30 transition-colors duration-500 px-4 -mx-4"
            >
              {/* Number */}
              <div className="font-mono text-champagne-dim text-xs tracking-wider pt-1">
                {service.num}
              </div>

              {/* Title */}
              <h3 className="font-display text-obsidian text-xl md:text-2xl group-hover:text-champagne transition-colors duration-500">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-slate text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
