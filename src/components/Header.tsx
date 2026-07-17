"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Propiedades", href: "#propiedades" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-obsidian/90 backdrop-blur-lg border-b border-bone/50"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-4 group">
            <div className="w-9 h-9 border border-champagne/40 flex items-center justify-center text-champagne font-display text-base font-bold tracking-tight group-hover:bg-champagne group-hover:text-obsidian transition-all duration-500">
              M
            </div>
            <div className="hidden sm:flex flex-col leading-none">
              <span className="text-ivory text-xs font-semibold tracking-[0.35em] uppercase">
                Mimo
              </span>
              <span className="text-slate text-[9px] tracking-[0.25em] uppercase mt-0.5">
                Real Estate
              </span>
            </div>
          </a>

          {/* Nav */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative text-slate text-[13px] tracking-[0.15em] uppercase py-2 hover:text-ivory transition-colors duration-400 group/link"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-px bg-champagne transition-all duration-400 group-hover/link:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE}?text=Hola,%20me%20interesa%20una%20propiedad`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:flex items-center gap-2.5 border border-champagne/30 text-champagne px-7 py-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase hover:bg-champagne hover:text-obsidian transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-champagne focus-visible:outline-offset-2"
          >
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Contactar
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-slate hover:text-ivory transition-colors p-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-champagne"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              {mobileOpen ? (
                <path strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-obsidian/98 backdrop-blur-xl border-t border-bone/50">
          <nav className="flex flex-col items-center py-10 gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-slate text-sm tracking-[0.2em] uppercase hover:text-ivory transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <div className="gold-line-h w-12 my-2" />
            <a
              href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE}?text=Hola,%20me%20interesa%20una%20propiedad`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="border border-champagne/40 text-champagne px-10 py-3 text-xs font-semibold tracking-[0.2em] uppercase hover:bg-champagne hover:text-obsidian transition-all duration-500"
            >
              Contactar
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
