"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "./SectionLabel";

const brands = [
  "Rolex",
  "Omega",
  "Tudor",
  "TAG Heuer",
  "Longines",
  "Cartier",
  "Jaeger-LeCoultre",
  "IWC Schaffhausen",
  "Breitling",
  "Tissot",
];

const watches = [
  {
    name: "Cronografía Eterna",
    ref: "Ref. M·R 1952",
    spec: "Movimiento automático suizo · 42mm · Oro 18k",
    year: "Edición casa",
  },
  {
    name: "Hora del Taller",
    ref: "Ref. M·R 2024",
    spec: "Calibre manual · Esfera guilloché · Correa cocodrilo",
    year: "Serie limitada — 24 ejemplares",
  },
  {
    name: "Boutique Reserve",
    ref: "Ref. M·R 1978",
    spec: "Vintage restaurado · Caja acero · Cristal zafiro",
    year: "Procedencia certificada",
  },
];

export default function Relojeria() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgX = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="relojeria" ref={ref} className="relative bg-ink text-ivory overflow-hidden">
      {/* Background letters */}
      <motion.div
        style={{ x: bgX }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.04]"
      >
        <span className="font-display font-medium text-[clamp(10rem,28vw,38rem)] tracking-[-0.04em] uppercase whitespace-nowrap select-none text-ivory">
          Relojería
        </span>
      </motion.div>

      <div className="relative py-32 md:py-48 px-6 md:px-10 lg:px-14">
        <div className="mx-auto max-w-[1600px]">
          <div className="grid grid-cols-12 gap-6 mb-24">
            <div className="col-span-12 md:col-span-5">
              <SectionLabel index="III" title="Relojería" className="mb-10 [&_span]:!text-gold [&_span:last-child]:!text-pearl" />
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-5xl md:text-7xl uppercase tracking-tight leading-[0.95] text-ivory"
              >
                El tiempo,
                <br />
                <span className="font-serif italic font-normal normal-case gold-text">
                  medido a mano.
                </span>
              </motion.h2>
            </div>

            <div className="col-span-12 md:col-span-6 md:col-start-7 flex items-end">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.2, delay: 0.2 }}
                className="font-serif text-xl md:text-2xl leading-relaxed text-pearl/80"
              >
                Distribuidor oficial de las grandes maisons relojeras. Servicio técnico
                propio con maestros certificados para revisión, restauración y
                mantenimiento de piezas mecánicas — desde el clásico cuerda manual hasta
                la alta complicación.
              </motion.p>
            </div>
          </div>

          {/* Featured watches */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mt-20">
            {watches.map((w, i) => (
              <WatchCard key={w.ref} {...w} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* Brand marquee */}
      <div className="relative border-y border-graphite/60 py-10 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />
        <div className="flex marquee-track whitespace-nowrap">
          {[...brands, ...brands].map((b, i) => (
            <div
              key={i}
              className="flex items-center gap-16 px-8 font-display text-2xl md:text-3xl uppercase tracking-[0.15em] text-pearl/70"
            >
              <span>{b}</span>
              <span className="text-gold">✦</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WatchCard({
  name,
  ref: refNum,
  spec,
  year,
  index,
}: (typeof watches)[number] & { index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 1.2,
        delay: index * 0.15,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group"
    >
      <div className="relative aspect-square overflow-hidden bg-graphite/40 mb-8">
        <WatchArt index={index} />
        <div className="absolute top-4 left-4 right-4 flex justify-between font-sans text-[10px] tracking-[0.4em] uppercase text-pearl/60">
          <span>{String(index + 1).padStart(2, "0")}/03</span>
          <span>Mecánico</span>
        </div>
      </div>
      <div className="space-y-3">
        <h3 className="font-display text-2xl tracking-[0.05em] uppercase text-ivory">
          {name}
        </h3>
        <p className="font-sans text-[11px] tracking-[0.3em] uppercase text-gold">
          {refNum}
        </p>
        <p className="font-serif italic text-lg text-pearl/80">{spec}</p>
        <p className="font-sans text-xs text-pearl/50">{year}</p>
      </div>
    </motion.div>
  );
}

function WatchArt({ index }: { index: number }) {
  const palette = [
    { case: "#f3efe7", dial: "#fbfaf7", num: "#14110d", accent: "#b8975a" },
    { case: "#d6b97e", dial: "#14110d", num: "#f6e9c4", accent: "#f6e9c4" },
    { case: "#2a2622", dial: "#ece7dc", num: "#14110d", accent: "#8a6e3c" },
  ][index % 3];

  return (
    <svg
      viewBox="0 0 500 500"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <radialGradient id={`bg-w${index}`} cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#2a2622" />
          <stop offset="100%" stopColor="#14110d" />
        </radialGradient>
        <radialGradient id={`case-w${index}`} cx="50%" cy="40%" r="55%">
          <stop offset="0%" stopColor={palette.case} />
          <stop offset="100%" stopColor={palette.accent} />
        </radialGradient>
      </defs>
      <rect width="500" height="500" fill={`url(#bg-w${index})`} />
      {/* Lugs */}
      <rect x="220" y="80" width="60" height="40" rx="8" fill={palette.case} />
      <rect
        x="220"
        y="380"
        width="60"
        height="40"
        rx="8"
        fill={palette.case}
      />
      {/* Case */}
      <circle cx="250" cy="250" r="155" fill={`url(#case-w${index})`} />
      <circle cx="250" cy="250" r="140" fill={palette.dial} />
      <circle
        cx="250"
        cy="250"
        r="140"
        fill="none"
        stroke={palette.accent}
        strokeWidth="2"
        opacity="0.4"
      />
      {/* Hour markers */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * 30 * Math.PI) / 180;
        const x1 = 250 + Math.sin(angle) * 120;
        const y1 = 250 - Math.cos(angle) * 120;
        const x2 = 250 + Math.sin(angle) * 130;
        const y2 = 250 - Math.cos(angle) * 130;
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={palette.num}
            strokeWidth={i % 3 === 0 ? "4" : "2"}
          />
        );
      })}
      {/* Hands */}
      <line
        x1="250"
        y1="250"
        x2="250"
        y2="160"
        stroke={palette.num}
        strokeWidth="4"
        strokeLinecap="round"
      />
      <line
        x1="250"
        y1="250"
        x2="320"
        y2="220"
        stroke={palette.num}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="250"
        y1="250"
        x2="240"
        y2="330"
        stroke={palette.accent}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="250" cy="250" r="6" fill={palette.accent} />
      {/* Subdials hint */}
      <circle
        cx="250"
        cy="330"
        r="22"
        fill="none"
        stroke={palette.num}
        strokeWidth="1"
        opacity="0.4"
      />
      {/* Crown */}
      <rect x="405" y="240" width="14" height="20" rx="3" fill={palette.case} />
    </svg>
  );
}
