"use client";

const testimonials = [
  {
    name: "Alejandra Montalvo",
    role: "Empresaria",
    text: "MIMO no solo encontró la propiedad perfecta para mi familia, sino que hizo que todo el proceso fuera una experiencia placentera. Su profesionalismo es incomparable.",
  },
  {
    name: "Roberto Fernández",
    role: "Inversionista Internacional",
    text: "Llevo 8 años trabajando con MIMO. Han sido fundamentales en la construcción de mi portafolio de propiedades. Su conocimiento del mercado es excepcional.",
  },
  {
    name: "Carolina Vega",
    role: "Arquitecta",
    text: "Como profesional del diseño, aprecio la curación exquisita de propiedades que ofrece MIMO. Cada casa en su portfolio es una obra de arte.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 px-8 lg:px-12 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-bone/50" />

      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <div className="section-number mb-6">05</div>
          <span className="text-champagne text-[11px] tracking-[0.4em] uppercase inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-champagne/40" />
            Testimonios
          </span>
          <h2 className="font-display text-ivory text-4xl md:text-5xl tracking-[-0.02em]">
            Lo Que Dicen Nuestros{" "}
            <span className="text-champagne">Clientes</span>
          </h2>
          <div className="gold-line-h w-full mt-10 opacity-30" />
        </div>

        {/* Testimonials — editorial quote cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 bg-pearl/50 border border-bone/30 hover:border-champagne/20 transition-all duration-700 group"
            >
              {/* Large quotation mark */}
              <div className="font-display text-champagne/15 text-[80px] leading-none absolute top-4 left-6 select-none group-hover:text-champagne/25 transition-colors duration-700">
                &ldquo;
              </div>

              {/* Quote text */}
              <p className="relative z-10 text-ivory/80 text-sm leading-relaxed mb-10 italic font-display mt-12">
                {testimonial.text}
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-champagne/30 mb-6" />

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-bone flex items-center justify-center text-champagne-dim font-display text-sm font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="text-ivory text-sm font-semibold">
                    {testimonial.name}
                  </div>
                  <div className="text-slate text-[11px] tracking-wider">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
