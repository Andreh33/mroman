"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

export default function Visita() {
  return (
    <section
      id="visita"
      className="relative bg-ivory py-32 md:py-48 px-6 md:px-10 lg:px-14"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-6">
            <SectionLabel index="VI" title="Boutique" className="mb-10" />
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2 }}
              className="font-display text-5xl md:text-7xl uppercase tracking-tight leading-[0.92] text-ink"
            >
              Visite
              <br />
              la casa.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="mt-10 font-serif italic text-xl md:text-2xl text-graphite leading-relaxed max-w-xl"
            >
              Nuestra boutique reserva una sala privada para clientes que desean
              estudiar piezas en intimidad o asesorarse con el maestro relojero.
              La visita es siempre con cita.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-bone">
          {[
            {
              h: "Dirección",
              l1: "Calle de Serrano, 14",
              l2: "28001 Madrid",
              l3: "España",
            },
            {
              h: "Horario",
              l1: "Lunes a Viernes — 10:30 a 14:00",
              l2: "Tardes — 17:00 a 20:30",
              l3: "Sábados — 11:00 a 14:00 (con cita)",
            },
            {
              h: "Contacto",
              l1: "+34 91 555 19 52",
              l2: "boutique@mroman.es",
              l3: "Cita privada por teléfono",
            },
          ].map((b, i) => (
            <motion.div
              key={b.h}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1, delay: i * 0.1 }}
              className="bg-ivory p-10 md:p-14"
            >
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold">
                {b.h}
              </span>
              <div className="mt-8 space-y-2 font-serif text-xl text-ink">
                <p>{b.l1}</p>
                <p>{b.l2}</p>
                <p className="text-graphite italic">{b.l3}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Map placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.4 }}
          className="mt-16 relative aspect-[21/9] bg-pearl overflow-hidden"
        >
          <MapArt />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-ivory shadow-[0_8px_30px_rgba(20,17,13,0.15)] ring-1 ring-gold/30">
                <span className="block w-3 h-3 bg-gold rounded-full" />
              </div>
              <p className="mt-6 font-display text-xl tracking-[0.3em] uppercase text-ink">
                M·Roman
              </p>
              <p className="font-serif italic text-base text-graphite">
                Barrio de Salamanca, Madrid
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MapArt() {
  return (
    <svg
      viewBox="0 0 1400 600"
      className="absolute inset-0 w-full h-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern
          id="grid"
          width="40"
          height="40"
          patternUnits="userSpaceOnUse"
        >
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="#ece7dc"
            strokeWidth="1"
          />
        </pattern>
      </defs>
      <rect width="1400" height="600" fill="#f3efe7" />
      <rect width="1400" height="600" fill="url(#grid)" />
      {/* Streets */}
      <path
        d="M 0 280 Q 400 200 700 300 T 1400 280"
        stroke="#d8cfb8"
        strokeWidth="40"
        fill="none"
      />
      <path
        d="M 700 0 L 700 600"
        stroke="#d8cfb8"
        strokeWidth="28"
        fill="none"
      />
      <path
        d="M 200 0 L 280 600"
        stroke="#d8cfb8"
        strokeWidth="20"
        fill="none"
      />
      <path
        d="M 1100 0 L 1180 600"
        stroke="#d8cfb8"
        strokeWidth="20"
        fill="none"
      />
      {/* Block hints */}
      {Array.from({ length: 20 }).map((_, i) => (
        <rect
          key={i}
          x={(i * 73) % 1300}
          y={((i * 113) % 500) + 30}
          width="60"
          height="40"
          fill="#ece7dc"
          opacity="0.6"
          rx="2"
        />
      ))}
    </svg>
  );
}
