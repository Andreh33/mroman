"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Letters spread apart and rise as you scroll
  const mX = useTransform(scrollYProgress, [0, 1], ["0vw", "-22vw"]);
  const dotScale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const dotOpacity = useTransform(scrollYProgress, [0, 0.6, 1], [1, 0.4, 0]);
  const romanX = useTransform(scrollYProgress, [0, 1], ["0vw", "22vw"]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 0.7, 0]);
  const subY = useTransform(scrollYProgress, [0, 1], ["0%", "-160%"]);
  const subOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.3, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative h-[180vh] bg-ivory"
    >
      <div className="sticky top-0 h-screen flex flex-col overflow-hidden">
        {/* Top eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute top-28 left-0 right-0 flex justify-center"
        >
          <div className="flex items-center gap-4">
            <span className="h-px w-10 bg-gold" />
            <span className="font-sans text-[10px] tracking-[0.5em] uppercase text-gold-deep">
              Madrid · Desde 1952
            </span>
            <span className="h-px w-10 bg-gold" />
          </div>
        </motion.div>

        {/* Massive title */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="flex-1 flex items-center justify-center"
        >
          <h1 className="font-display font-medium leading-[0.82] text-ink text-center">
            <span className="block tracking-[-0.02em] text-[clamp(5rem,18vw,22rem)] uppercase whitespace-nowrap">
              <motion.span
                style={{ x: mX, display: "inline-block" }}
                className="will-change-transform"
              >
                M
              </motion.span>
              <motion.span
                style={{
                  scale: dotScale,
                  opacity: dotOpacity,
                  display: "inline-block",
                }}
                className="mx-[0.18em] origin-center will-change-transform"
              >
                <span className="gold-text">·</span>
              </motion.span>
              <motion.span
                style={{ x: romanX, display: "inline-block" }}
                className="will-change-transform"
              >
                Roman
              </motion.span>
            </span>
          </h1>
        </motion.div>

        {/* Subtitle bottom */}
        <motion.div
          style={{ y: subY, opacity: subOpacity }}
          className="absolute bottom-16 left-0 right-0"
        >
          <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 flex items-end justify-between flex-wrap gap-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif italic text-2xl md:text-3xl text-graphite max-w-md leading-tight"
            >
              Joyería y relojería de autor
              <br />
              <span className="text-gold-deep">— tres generaciones de oficio.</span>
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="flex items-center gap-3 font-sans text-[10px] tracking-[0.4em] uppercase text-graphite"
            >
              <span>Descubrir</span>
              <motion.span
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="block h-10 w-px bg-gold origin-top"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Decorative side numerals */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1.2 }}
          className="hidden md:block absolute left-6 md:left-10 lg:left-14 top-1/2 -translate-y-1/2 vertical-rl font-sans text-[10px] tracking-[0.5em] uppercase text-gold-deep"
        >
          <span>N.º 01 — Casa M·Roman</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1.2 }}
          className="hidden md:block absolute right-6 md:right-10 lg:right-14 top-1/2 -translate-y-1/2 vertical-rl font-sans text-[10px] tracking-[0.5em] uppercase text-gold-deep rotate-180"
        >
          <span>MMXXVI — Edición eterna</span>
        </motion.div>
      </div>
    </section>
  );
}
