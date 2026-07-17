"use client";

const stats = [
  { number: "15+", label: "Años de Experiencia" },
  { number: "320+", label: "Propiedades Vendidas" },
  { number: "$180M+", label: "En Transacciones" },
  { number: "98%", label: "Clientes Satisfechos" },
];

export default function About() {
  return (
    <section id="nosotros" className="py-28 px-8 lg:px-12 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-bone/50" />

      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Visual */}
          <div className="relative order-2 lg:order-1">
            <div className="relative overflow-hidden">
              <img
                src="/images/about-bg.jpg"
                alt="Sobre MIMO Real Estate"
                className="w-full h-[500px] object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-obsidian/20 to-transparent" />
            </div>

            {/* Floating accent frames */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-champagne/15" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-champagne/10" />
          </div>

          {/* Right: Content */}
          <div className="order-1 lg:order-2">
            <div className="section-number mb-6">03</div>

            <span className="text-champagne text-[11px] tracking-[0.4em] uppercase inline-flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-champagne/40" />
              Sobre Nosotros
            </span>

            <h2 className="font-display text-ivory text-4xl md:text-5xl tracking-[-0.02em] mb-10">
              La Excelencia es
              <br />
              <span className="text-champagne">Nuestro Legado</span>
            </h2>

            <div className="space-y-6 text-slate leading-relaxed">
              <p>
                Desde 2009, MIMO Real Estate ha definido el estándar de excelencia
                en el mercado de propiedades de lujo en Ecuador. Nuestra pasión
                por lo excepcional nos ha convertido en el referente para clientes
                que buscan más que una propiedad &mdash; buscan un estilo de vida.
              </p>
              <p>
                Nuestro equipo de asesores especializados ofrece un servicio
                personalizado, confidencial y de la más alta calidad. Cada
                consulta es tratada con la discreción y el profesionalismo que
                nuestros clientes merecen.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-8 mt-14 pt-10 border-t border-bone/50">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-champagne text-3xl md:text-4xl font-bold mb-1">
                    {stat.number}
                  </div>
                  <div className="text-slate text-xs tracking-[0.1em]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
