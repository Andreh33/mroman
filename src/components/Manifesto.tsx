"use client";

import RevealText from "./RevealText";
import SectionLabel from "./SectionLabel";
import { motion } from "framer-motion";

export default function Manifesto() {
  return (
    <section className="relative bg-ivory py-32 md:py-48 px-6 md:px-10 lg:px-14">
      <div className="mx-auto max-w-[1400px]">
        <SectionLabel index="I" title="Manifiesto" className="mb-16" />

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-2">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="font-serif italic text-7xl md:text-8xl text-gold leading-none"
            >
              “
            </motion.span>
          </div>

          <div className="col-span-12 md:col-span-10">
            <RevealText
              text="Cada pieza nace de la pausa. No fabricamos joyas, las descubrimos en el silencio del taller, donde el oro se vuelve memoria y el tiempo se mide por latidos de un mecanismo perfecto."
              italicWords={[2, 3, 14, 15, 16, 17]}
              className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight text-ink"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2, delay: 0.4 }}
              className="mt-16 flex items-center gap-4"
            >
              <span className="h-px w-16 bg-gold" />
              <span className="font-serif italic text-lg text-graphite">
                Manuel Román, fundador
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
