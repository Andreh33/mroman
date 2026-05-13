"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.2, 1]);

  return (
    <footer ref={ref} className="relative bg-ivory border-t border-bone">
      {/* Massive farewell */}
      <div className="px-6 md:px-10 lg:px-14 pt-20 pb-10 overflow-hidden">
        <motion.div
          style={{ scale, opacity }}
          className="flex justify-center origin-bottom"
        >
          <h2 className="font-display font-medium uppercase tracking-[-0.03em] leading-[0.82] text-ink text-[clamp(5rem,18vw,22rem)] whitespace-nowrap">
            M<span className="gold-text">·</span>Roman
          </h2>
        </motion.div>
      </div>

      <div className="hairline h-px mx-6 md:mx-10 lg:mx-14" />

      <div className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10">
          <div className="col-span-2">
            <p className="font-serif italic text-2xl text-ink leading-snug max-w-sm">
              Joyería y relojería de autor.
              <br />
              <span className="text-gold-deep">Madrid, desde 1952.</span>
            </p>
          </div>

          <FooterCol
            title="Casa"
            links={[
              { label: "Manifiesto", href: "#top" },
              { label: "Historia", href: "#historia" },
              { label: "Taller", href: "#servicios" },
            ]}
          />
          <FooterCol
            title="Visita"
            links={[
              { label: "Boutique", href: "#visita" },
              { label: "Cita privada", href: "#contacto" },
              { label: "Mapa", href: "#visita" },
            ]}
          />
          <FooterCol
            title="Casa"
            links={[
              { label: "Instagram", href: "#" },
              { label: "WhatsApp", href: "#" },
              { label: "LinkedIn", href: "#" },
            ]}
          />
        </div>

        <div className="mt-16 pt-8 border-t border-bone flex flex-col md:flex-row justify-between items-start md:items-center gap-4 font-sans text-[10px] tracking-[0.3em] uppercase text-graphite">
          <span>© MMXXVI — M·Roman Joyería y Relojería · C.I.F. B-12345678</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-gold transition-colors">
              Aviso legal
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Privacidad
            </a>
            <a href="#" className="hover:text-gold transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-gold mb-5">
        {title}
      </p>
      <ul className="space-y-3 font-serif text-lg text-ink">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="hover:text-gold-deep transition-colors">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
