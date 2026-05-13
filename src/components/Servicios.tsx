"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const services = [
  {
    n: "01",
    title: "Diseño a medida",
    desc: "Boceto, modelado 3D y fundición artesanal. De la idea a la pieza única, acompañando cada decisión.",
  },
  {
    n: "02",
    title: "Restauración",
    desc: "Devolvemos la vida a joyas y relojes heredados. Limpieza, reparación de engastes, reemplazado de calibres.",
  },
  {
    n: "03",
    title: "Tasación oficial",
    desc: "Peritaje certificado para seguros, herencias y subastas. Tasadores acreditados por el Colegio Oficial.",
  },
  {
    n: "04",
    title: "Servicio de relojería",
    desc: "Revisión completa, mantenimiento de movimientos mecánicos y automáticos, cambio de cristal y pulido.",
  },
  {
    n: "05",
    title: "Compra de oro",
    desc: "Adquirimos piezas de oro, plata y platino con peritaje transparente y pago al instante.",
  },
  {
    n: "06",
    title: "Grabado a mano",
    desc: "Iniciales, dedicatorias y heráldica realizadas a buril por nuestro grabador, en taller propio.",
  },
];

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="relative bg-ivory py-32 md:py-48 px-6 md:px-10 lg:px-14"
    >
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-5">
            <SectionLabel index="IV" title="Taller" className="mb-10" />
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2 }}
              className="font-display text-5xl md:text-6xl uppercase tracking-tight leading-[0.95] text-ink"
            >
              Servicios
              <br />
              <span className="font-serif italic font-normal normal-case text-gold-deep">
                de la casa
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
              Todo lo que ofrecemos sale del mismo taller. Sin intermediarios, sin
              envíos a fábrica: el oficio se respira detrás del escaparate.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-bone">
          {services.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 1,
                delay: (i % 3) * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative border-b border-bone md:border-r p-10 md:p-12 hover:bg-pearl/50 transition-colors duration-700 cursor-default"
            >
              <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold">
                {s.n}
              </span>
              <h3 className="mt-6 font-display text-2xl md:text-3xl uppercase tracking-[0.04em] text-ink">
                {s.title}
              </h3>
              <p className="mt-4 font-serif text-lg leading-relaxed text-graphite">
                {s.desc}
              </p>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-gold transition-all duration-700 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
