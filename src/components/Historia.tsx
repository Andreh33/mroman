"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionLabel from "./SectionLabel";

const timeline = [
  {
    year: "1952",
    title: "Apertura del taller",
    desc: "Manuel Román funda el primer taller en la calle de los plateros, con el reto de combinar joya y reloj bajo un mismo nombre.",
  },
  {
    year: "1974",
    title: "Distribución oficial",
    desc: "La casa pasa a ser distribuidor autorizado de las primeras maisons relojeras suizas, consolidando su prestigio en la ciudad.",
  },
  {
    year: "1998",
    title: "Segunda generación",
    desc: "Carmen Román hereda el taller y suma una visión contemporánea: alta joyería contemporánea y diseño a medida.",
  },
  {
    year: "2018",
    title: "Boutique actual",
    desc: "Apertura de la actual boutique con taller a la vista, devolviendo al cliente el oficio que tantas veces queda oculto.",
  },
  {
    year: "Hoy",
    title: "Tercera generación",
    desc: "Marcos Román dirige la casa junto a un equipo de seis artesanos: relojero, joyera, engastador, fundidor, grabador y diseñadora.",
  },
];

export default function Historia() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section
      id="historia"
      ref={ref}
      className="relative bg-pearl py-32 md:py-48 px-6 md:px-10 lg:px-14"
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-12 gap-6 mb-24">
          <div className="col-span-12 md:col-span-5">
            <SectionLabel index="V" title="Casa Román" className="mb-10" />
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2 }}
              className="font-display text-5xl md:text-6xl uppercase tracking-tight leading-[0.95] text-ink"
            >
              Tres
              <br />
              generaciones,
              <br />
              <span className="font-serif italic font-normal normal-case text-gold-deep">
                un mismo pulso.
              </span>
            </motion.h2>
          </div>
          <div className="col-span-12 md:col-span-6 md:col-start-7 flex items-end">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="font-serif italic text-xl md:text-2xl text-graphite leading-relaxed"
            >
              Setenta y dos años después seguimos midiendo el éxito en piezas
              entregadas, no en escaparates. Aquí, cada joya tiene un nombre detrás —
              el de quien la lleva y el de quien la hace.
            </motion.p>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-16">
          <div className="absolute left-0 top-2 bottom-0 w-px bg-bone" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-0 top-2 w-px bg-gold origin-top"
          />

          <div className="space-y-24">
            {timeline.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 1.1,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative grid grid-cols-12 gap-6"
              >
                <div className="absolute -left-[34px] md:-left-[66px] top-2 w-3 h-3 rounded-full bg-gold ring-4 ring-pearl" />
                <div className="col-span-12 md:col-span-3">
                  <span className="font-display text-4xl md:text-5xl tracking-tight text-gold-deep">
                    {t.year}
                  </span>
                </div>
                <div className="col-span-12 md:col-span-9 md:col-start-5">
                  <h3 className="font-display text-2xl uppercase tracking-[0.05em] text-ink mb-3">
                    {t.title}
                  </h3>
                  <p className="font-serif text-xl text-graphite leading-relaxed max-w-2xl">
                    {t.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
