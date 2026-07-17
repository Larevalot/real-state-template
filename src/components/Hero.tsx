"use client";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-obsidian/70" />

      {/* Architectural grid background */}
      <div className="absolute inset-0 arch-grid" />

      {/* Decorative vertical lines */}
      <div className="absolute top-0 left-[15%] h-full gold-line-v opacity-20 animate-draw-v" />
      <div className="absolute top-0 left-[85%] h-full gold-line-v opacity-10 animate-draw-v" style={{ animationDelay: "0.2s" }} />

      {/* Decorative horizontal line */}
      <div className="absolute top-[35%] left-0 w-full gold-line-h opacity-10 animate-draw-h" />

      {/* Corner accents */}
      <div className="absolute bottom-12 right-8 lg:right-16 w-12 h-12 border-r border-b border-champagne/20" />

      {/* Large decorative letter */}
      <div className="absolute right-8 lg:right-24 top-1/2 -translate-y-1/2 text-[280px] lg:text-[400px] font-display font-bold text-champagne/[0.03] leading-none select-none pointer-events-none animate-fade-in">
        M
      </div>

      {/* Content - left aligned */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-8 lg:px-12 pt-16 w-full">
        <div className="max-w-3xl">
          {/* Section number */}
          <div className="section-number mb-8 animate-slide-up">
            01
          </div>

          {/* Eyebrow */}
          <div className="animate-slide-up-d1">
            <span className="text-champagne text-[11px] tracking-[0.4em] uppercase inline-flex items-center gap-3">
              <span className="w-8 h-px bg-champagne/40" />
              Exclusividad &amp; Elegancia
            </span>
          </div>

          {/* Headline - dramatic scale contrast */}
          <h1 className="mt-8 animate-slide-up-d2">
            <span className="block font-display text-ivory text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.02em]">
              Donde el Lujo
            </span>
            <span className="block font-display text-ivory text-[clamp(2.5rem,6vw,5.5rem)] leading-[0.95] tracking-[-0.02em] mt-1">
              Encuentra su
            </span>
            <span className="block font-display text-champagne text-[clamp(3.5rem,9vw,8rem)] font-bold leading-[0.85] tracking-[-0.03em] mt-2">
              Hogar
            </span>
          </h1>

          {/* Divider */}
          <div className="w-16 h-px bg-champagne/40 mt-12 mb-8 animate-draw-h" />

          {/* Subheadline */}
          <p className="animate-slide-up-d3 text-slate text-base md:text-lg max-w-xl leading-relaxed">
            Propiedades Selectas &mdash; Una colección curada de residencias
            extraordinarias en las ubicaciones más exclusivas de Ecuador.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-start gap-4 mt-12 animate-slide-up-d3">
            <a
              href="#propiedades"
              className="group bg-champagne text-obsidian px-10 py-4 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-500 hover:bg-champagne-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-champagne focus-visible:outline-offset-2"
            >
              Explorar Propiedades
            </a>
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE}?text=Hola,%20me%20gustaría%20una%20consulta%20personalizada`}
              target="_blank"
              rel="noopener noreferrer"
              className="group border border-champagne/25 text-champagne px-10 py-4 text-[11px] font-semibold tracking-[0.2em] uppercase hover:border-champagne/50 hover:bg-champagne/5 transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-champagne focus-visible:outline-offset-2"
            >
              Consulta Privada
            </a>
          </div>
        </div>
      </div>


    </section>
  );
}
