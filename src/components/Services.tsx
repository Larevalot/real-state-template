"use client";

import { useState } from "react";

const services = [
  {
    num: "01",
    title: "Búsqueda Personalizada",
    description:
      "Agente dedicado que entiende tu visión y localiza propiedades que coinciden con tus criterios más específicos, incluso antes de llegar al mercado público.",
  },
  {
    num: "02",
    title: "Due Diligence Premium",
    description:
      "Verificación completa de títulos, gravámenes, planos y documentación legal. Protegemos tu inversión con el rigor que merece.",
  },
  {
    num: "03",
    title: "Asesoría de Inversión",
    description:
      "Análisis de mercado, proyecciones de valorización y estrategias de inversión personalizadas para maximizar el retorno de tu patrimonio.",
  },
  {
    num: "04",
    title: "Gestión Integral",
    description:
      "Desde la negociación hasta la escrituración, coordinamos cada detalle del proceso para que tu experiencia sea fluida y sin estrés.",
  },
];

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="servicios"
      className="py-28 px-8 lg:px-12 relative bg-white"
    >
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

        {/* Services — accordion list */}
        <div className="space-y-0">
          {services.map((service, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border-b border-bone/40 transition-colors duration-500 ${
                  isOpen ? "bg-ivory/60" : "hover:bg-ivory/30"
                }`}
              >
                {/* Header row — always visible */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full grid grid-cols-[40px_1fr_auto] md:grid-cols-[60px_1fr_auto] gap-4 md:gap-8 items-center py-8 md:py-10 pl-6 md:pl-10 pr-4 md:pr-6 text-left cursor-pointer group"
                  aria-expanded={isOpen}
                >
                  {/* Number */}
                  <div className="font-mono text-champagne text-sm md:text-base tracking-wider">
                    {service.num}
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-obsidian text-lg md:text-2xl group-hover:text-champagne transition-colors duration-500">
                    {service.title}
                  </h3>

                  {/* Chevron */}
                  <div className="text-champagne/70 transition-transform duration-500">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`transition-transform duration-500 ${
                        isOpen ? "rotate-45" : "rotate-0"
                      }`}
                    >
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </div>
                </button>

                {/* Description — collapsible */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="pl-[60px] md:pl-[76px] pr-6 md:pr-10 pb-8 md:pb-10">
                    <div className="w-12 h-px bg-champagne/40 mb-5" />
                    <p className="text-slate text-sm leading-relaxed max-w-2xl">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
