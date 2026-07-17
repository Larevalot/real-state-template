"use client";

const properties = [
  {
    id: 1,
    name: "Villa Aurora",
    location: "Cumbayá, Quito",
    price: "$1,250,000",
    beds: 5,
    baths: 4,
    area: "680 m²",
    description: "Residencia contemporánea con vistas panorámicas al valle. Acabados de mármol italiano y jardines diseñados por paisajistas internacionales.",
    accent: "bg-champagne/10",
    tag: "Exclusiva",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    name: "Penthouse Élite",
    location: "La Carolina, Quito",
    price: "$2,100,000",
    beds: 4,
    baths: 3,
    area: "520 m²",
    description: "Ática de diseño vanguardista en el corazón de la ciudad. Terraza infinity pool con vistas de los Andes. Smart home completo.",
    accent: "bg-ivory/5",
    tag: "Premium",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    name: "Hacienda del Sol",
    location: "Valle de los Chillos",
    price: "$3,800,000",
    beds: 7,
    baths: 6,
    area: "1,450 m²",
    description: "Hacienda restaurada del siglo XVIII con moderno confort. Viñedo privado, caballerizas y piscina termal natural.",
    accent: "bg-champagne/8",
    tag: "Única",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    name: "Loft Cristal",
    location: "Bellavista, Quito",
    price: "$890,000",
    beds: 3,
    baths: 2,
    area: "310 m²",
    description: "Espacio industrial-elegante con ventanales de piso a techo. Arte contemporáneo integrado y cocina de chef profesional.",
    accent: "bg-slate/10",
    tag: "Moderno",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    name: "Casa Serenity",
    location: "Tumbaco, Quito",
    price: "$1,680,000",
    beds: 5,
    baths: 5,
    area: "820 m²",
    description: "Diseño bioclimático con certificación LEED. Energía solar, jardín vertical y materiales sostenibles de primera calidad.",
    accent: "bg-champagne/6",
    tag: "Sostenible",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    name: "Residencia Royal",
    location: "Cumbayá, Quito",
    price: "$4,500,000",
    beds: 8,
    baths: 7,
    area: "2,100 m²",
    description: "La joya de nuestra colección. Castillo moderno con campo de golf privado, spa y helipuerto. Seguridad perimetral 24/7.",
    accent: "bg-champagne/12",
    tag: "Icono",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop",
  },
];

function PropertyCard({ property, index }: { property: typeof properties[0]; index: number }) {
  return (
    <div className="group relative overflow-hidden card-hover liquid-glass">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={property.image}
          alt={property.name}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent opacity-80 group-hover:from-charcoal group-hover:opacity-80 transition-all duration-500" />

        {/* Area */}
        <div className="absolute top-5 right-5 bg-white/10 backdrop-blur-sm border border-white/10 px-3 py-1.5 text-charcoal text-[11px] tracking-wider font-mono transition-all duration-500 group-hover:bg-obsidian/40 group-hover:border-champagne/20 group-hover:text-ivory">
          {property.area}
        </div>

        {/* Bottom gold accent line */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-champagne/30 to-transparent group-hover:via-champagne/60 transition-all duration-700" />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Location */}
        <div className="flex items-center gap-2 mb-3">
          <svg className="w-3 h-3 text-champagne-dim" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          <span className="text-charcoal text-[11px] tracking-[0.15em] uppercase transition-colors duration-500">
            {property.location}
          </span>
        </div>

        {/* Name */}
        <h3 className="font-display text-obsidian text-xl mb-3 group-hover:text-champagne transition-colors duration-500">
          {property.name}
        </h3>

        {/* Description */}
        <p className="text-charcoal text-sm leading-relaxed mb-5 line-clamp-2 transition-colors duration-500">
          {property.description}
        </p>

        {/* Specs */}
        <div className="flex items-center gap-5 mb-5 pb-5 border-b border-bone/50 transition-colors duration-500">
          <div className="flex items-center gap-1.5 text-charcoal text-[11px] tracking-wider transition-colors duration-500">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
            {property.beds} Hab
          </div>
          <div className="flex items-center gap-1.5 text-charcoal text-[11px] tracking-wider transition-colors duration-500">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
            </svg>
            {property.baths} Baños
          </div>
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <span className="font-display text-champagne text-xl font-bold">{property.price}</span>
          <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_PHONE}?text=Hola,%20me%20interesa%20la%20propiedad%20${property.name}%20en%20${property.location}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-champagne-dim text-[11px] tracking-[0.15em] uppercase hover:text-champagne transition-colors duration-400 group/cta focus-visible:outline focus-visible:outline-2 focus-visible:outline-champagne"
          >
            Consultar
            <svg className="w-3.5 h-3.5 group-hover/cta:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Properties() {
  return (
    <section id="propiedades" className="py-28 px-8 lg:px-12 relative bg-white">
      <div className="max-w-[1400px] mx-auto">
        {/* Section header */}
        <div className="mb-20">
          <div className="section-number mb-6">02</div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="text-champagne text-[11px] tracking-[0.4em] uppercase inline-flex items-center gap-3 mb-6">
                <span className="w-8 h-px bg-champagne/40" />
                Nuestra Colección
              </span>
              <h2 className="font-display text-obsidian text-4xl md:text-5xl tracking-[-0.02em]">
                Propiedades{" "}
                <span className="text-champagne">Exclusivas</span>
              </h2>
            </div>
            <p className="text-slate text-sm max-w-md leading-relaxed">
              Cada propiedad ha sido cuidadosamente seleccionada para ofrecer
              lo mejor en diseño, ubicación y confort.
            </p>
          </div>
          <div className="gold-line-h w-full mt-10 opacity-30" />
        </div>

        {/* Properties grid — staggered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property, index) => (
            <PropertyCard key={property.id} property={property} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
