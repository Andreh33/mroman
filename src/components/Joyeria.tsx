"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "./SectionLabel";

const collections = [
  {
    name: "Aurea",
    subtitle: "Anillos de compromiso",
    desc: "Oro rosa de 18k. Tallas brillante, esmeralda y antiguo. Engaste a mano por nuestros maestros.",
    pieces: "27 piezas",
    year: "MMXXIV",
  },
  {
    name: "Lyra",
    subtitle: "Alta joyería",
    desc: "Diamantes de origen ético, zafiros Padparadscha y esmeraldas colombianas. Edición limitada.",
    pieces: "12 piezas",
    year: "MMXXV",
  },
  {
    name: "Vesta",
    subtitle: "Cotidiano",
    desc: "Cadenas, aros y solitarios pensados para acompañar la piel. Oro reciclado certificado.",
    pieces: "48 piezas",
    year: "MMXXIII",
  },
  {
    name: "Hereditas",
    subtitle: "A medida",
    desc: "Reinterpretamos joyas heredadas. Fusión de boceto, fundición y tradición familiar.",
    pieces: "Por encargo",
    year: "Atemporal",
  },
];

export default function Joyeria() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);

  return (
    <section
      id="joyeria"
      ref={ref}
      className="relative bg-pearl py-32 md:py-48 overflow-hidden"
    >
      {/* Background giant word */}
      <motion.div
        style={{ y: titleY }}
        className="pointer-events-none absolute -top-10 left-0 right-0 flex justify-center"
      >
        <span className="font-display font-medium text-[clamp(8rem,22vw,28rem)] uppercase tracking-[-0.04em] text-bone leading-none whitespace-nowrap select-none">
          Joyería
        </span>
      </motion.div>

      <div className="relative mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14">
        <div className="flex justify-between items-end mb-20 flex-wrap gap-8">
          <SectionLabel index="II" title="Colecciones" />
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2 }}
            className="font-serif text-2xl md:text-3xl text-ink max-w-xl leading-snug italic"
          >
            Cuatro líneas que recorren <span className="text-gold-deep not-italic">setenta años</span> de oficio: de la pieza diaria al objeto único.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 md:gap-y-32 gap-x-10 mt-32">
          {collections.map((c, i) => (
            <CollectionCard key={c.name} {...c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CollectionCard({
  name,
  subtitle,
  desc,
  pieces,
  year,
  index,
}: (typeof collections)[number] & { index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const offset = index % 2 === 0 ? "md:mt-0" : "md:mt-40";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative ${offset}`}
    >
      <motion.div
        style={{ y }}
        className="relative aspect-[4/5] overflow-hidden bg-bone"
      >
        <PieceArt index={index} />
        <div className="absolute inset-0 ring-1 ring-inset ring-bone/40" />
        <div className="absolute top-4 left-4 right-4 flex justify-between font-sans text-[10px] tracking-[0.4em] uppercase text-graphite">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{year}</span>
        </div>
      </motion.div>

      <div className="mt-8 flex flex-col gap-3">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-4xl md:text-5xl tracking-[0.05em] text-ink uppercase">
            {name}
          </h3>
          <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-gold-deep">
            {pieces}
          </span>
        </div>
        <span className="font-serif italic text-xl text-gold-deep">
          {subtitle}
        </span>
        <p className="font-sans text-sm leading-relaxed text-graphite max-w-md">
          {desc}
        </p>
        <a
          href="#contacto"
          className="mt-4 inline-flex items-center gap-3 font-sans text-[11px] tracking-[0.3em] uppercase text-ink group/btn"
        >
          <span>Solicitar catálogo</span>
          <span className="h-px w-8 bg-gold transition-all duration-500 group-hover/btn:w-14" />
        </a>
      </div>
    </motion.div>
  );
}

// SVG art placeholders — abstract luxury piece silhouettes
function PieceArt({ index }: { index: number }) {
  const variants = [
    // Ring
    (
      <svg
        viewBox="0 0 400 500"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="bg0" cx="50%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#f3efe7" />
            <stop offset="100%" stopColor="#d8cfb8" />
          </radialGradient>
          <linearGradient id="g0" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d6b97e" />
            <stop offset="50%" stopColor="#f6e9c4" />
            <stop offset="100%" stopColor="#8a6e3c" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#bg0)" />
        <ellipse
          cx="200"
          cy="280"
          rx="110"
          ry="115"
          fill="none"
          stroke="url(#g0)"
          strokeWidth="18"
        />
        <polygon
          points="200,140 215,170 200,200 185,170"
          fill="url(#g0)"
        />
        <circle cx="200" cy="170" r="22" fill="#f6e9c4" opacity="0.6" />
      </svg>
    ),
    // Necklace
    (
      <svg
        viewBox="0 0 400 500"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="bg1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ece7dc" />
            <stop offset="100%" stopColor="#c8bfa6" />
          </linearGradient>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#8a6e3c" />
            <stop offset="50%" stopColor="#e8d29a" />
            <stop offset="100%" stopColor="#8a6e3c" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#bg1)" />
        <path
          d="M50 120 Q200 320 350 120"
          fill="none"
          stroke="url(#g1)"
          strokeWidth="3"
        />
        <path
          d="M70 140 Q200 320 330 140"
          fill="none"
          stroke="url(#g1)"
          strokeWidth="2"
          opacity="0.6"
        />
        <ellipse cx="200" cy="340" rx="20" ry="32" fill="url(#g1)" />
        <circle cx="200" cy="380" r="8" fill="#f6e9c4" />
      </svg>
    ),
    // Earrings
    (
      <svg
        viewBox="0 0 400 500"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="bg2" cx="50%" cy="40%" r="70%">
            <stop offset="0%" stopColor="#fbfaf7" />
            <stop offset="100%" stopColor="#c8bfa6" />
          </radialGradient>
          <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#b8975a" />
            <stop offset="100%" stopColor="#f6e9c4" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#bg2)" />
        <g>
          <circle cx="140" cy="180" r="8" fill="url(#g2)" />
          <path d="M140 188 L140 280" stroke="url(#g2)" strokeWidth="2" />
          <circle cx="140" cy="310" r="28" fill="url(#g2)" />
          <circle cx="140" cy="310" r="20" fill="#f6e9c4" opacity="0.5" />
        </g>
        <g>
          <circle cx="260" cy="180" r="8" fill="url(#g2)" />
          <path d="M260 188 L260 280" stroke="url(#g2)" strokeWidth="2" />
          <circle cx="260" cy="310" r="28" fill="url(#g2)" />
          <circle cx="260" cy="310" r="20" fill="#f6e9c4" opacity="0.5" />
        </g>
      </svg>
    ),
    // Bracelet
    (
      <svg
        viewBox="0 0 400 500"
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="bg3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#d8cfb8" />
            <stop offset="100%" stopColor="#ece7dc" />
          </linearGradient>
          <linearGradient id="g3" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#8a6e3c" />
            <stop offset="50%" stopColor="#f6e9c4" />
            <stop offset="100%" stopColor="#8a6e3c" />
          </linearGradient>
        </defs>
        <rect width="400" height="500" fill="url(#bg3)" />
        <ellipse
          cx="200"
          cy="250"
          rx="150"
          ry="50"
          fill="none"
          stroke="url(#g3)"
          strokeWidth="12"
        />
        <ellipse
          cx="200"
          cy="250"
          rx="150"
          ry="50"
          fill="none"
          stroke="#fbfaf7"
          strokeWidth="2"
          opacity="0.6"
        />
        {Array.from({ length: 6 }).map((_, i) => (
          <circle
            key={i}
            cx={80 + i * 48}
            cy={250 - (i % 2 ? -12 : 12)}
            r="4"
            fill="#f6e9c4"
          />
        ))}
      </svg>
    ),
  ];
  return variants[index % variants.length];
}
