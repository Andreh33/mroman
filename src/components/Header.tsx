"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#joyeria", label: "Joyería" },
  { href: "#relojeria", label: "Relojería" },
  { href: "#servicios", label: "Taller" },
  { href: "#historia", label: "Casa" },
  { href: "#visita", label: "Boutique" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/85 backdrop-blur-md border-b border-bone"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-[1600px] px-6 md:px-10 lg:px-14 h-20 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-3 group"
          aria-label="M·Roman inicio"
        >
          <span className="font-display text-2xl tracking-[0.2em] text-ink">
            M<span className="text-gold">·</span>ROMAN
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-9 font-sans text-[11px] tracking-[0.28em] uppercase">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative text-graphite hover:text-ink transition-colors duration-300"
              >
                <span>{l.label}</span>
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className="hidden md:inline-flex items-center gap-2 group"
        >
          <span className="font-sans text-[11px] tracking-[0.28em] uppercase text-ink">
            Cita Privada
          </span>
          <span className="h-px w-8 bg-gold transition-all duration-500 group-hover:w-12" />
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menú"
        >
          <span
            className={`block w-6 h-px bg-ink transition-all ${
              open ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-all ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-px bg-ink transition-all ${
              open ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-ivory border-t border-bone"
          >
            <ul className="flex flex-col gap-6 px-6 py-10 font-serif text-3xl">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-ink"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contacto"
                  onClick={() => setOpen(false)}
                  className="text-gold italic"
                >
                  Cita privada
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
