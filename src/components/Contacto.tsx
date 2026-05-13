"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import SectionLabel from "./SectionLabel";

export default function Contacto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  const [sent, setSent] = useState(false);

  return (
    <section
      id="contacto"
      ref={ref}
      className="relative bg-ink text-ivory py-32 md:py-48 px-6 md:px-10 lg:px-14 overflow-hidden"
    >
      <motion.div
        style={{ y: titleY }}
        className="pointer-events-none absolute inset-x-0 top-0 flex justify-center"
      >
        <span className="font-display font-medium text-[clamp(8rem,18vw,20rem)] uppercase tracking-[-0.04em] text-pearl/[0.04] whitespace-nowrap select-none leading-[0.8]">
          Contacto
        </span>
      </motion.div>

      <div className="relative mx-auto max-w-[1400px]">
        <SectionLabel
          index="VII"
          title="Cita privada"
          className="mb-10 [&_span]:!text-gold [&_span:last-child]:!text-pearl"
        />

        <div className="grid grid-cols-12 gap-6 md:gap-12">
          <div className="col-span-12 md:col-span-5">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 1.2 }}
              className="font-display text-5xl md:text-7xl uppercase tracking-tight leading-[0.92]"
            >
              Hable
              <br />
              con
              <br />
              <span className="font-serif italic font-normal normal-case gold-text">
                la casa.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="mt-10 font-serif italic text-xl text-pearl/70 leading-relaxed max-w-md"
            >
              Sea para un encargo, una restauración o simplemente para conocer el
              taller: déjenos sus datos y le contestaremos en menos de 24 horas.
            </motion.p>

            <div className="mt-12 space-y-4 font-sans text-sm">
              <a
                href="mailto:boutique@mroman.es"
                className="block text-pearl/80 hover:text-gold transition-colors"
              >
                boutique@mroman.es
              </a>
              <a
                href="tel:+34915551952"
                className="block text-pearl/80 hover:text-gold transition-colors"
              >
                +34 91 555 19 52
              </a>
            </div>
          </div>

          <motion.form
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.2, delay: 0.2 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="col-span-12 md:col-span-7 space-y-8"
          >
            <Field label="Nombre completo" name="name" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Field label="Correo electrónico" name="email" type="email" />
              <Field label="Teléfono" name="phone" type="tel" />
            </div>
            <SelectField
              label="Motivo de la consulta"
              name="motivo"
              options={[
                "Joyería a medida",
                "Compra de reloj",
                "Restauración",
                "Tasación",
                "Visita privada",
                "Otro",
              ]}
            />
            <Field label="Cuéntenos su idea" name="message" textarea />

            <div className="flex items-center gap-4 pt-4">
              <button
                type="submit"
                disabled={sent}
                className="group relative px-10 py-5 overflow-hidden border border-gold/40 disabled:opacity-70"
              >
                <span className="absolute inset-0 bg-gold translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                <span className="relative font-sans text-[11px] tracking-[0.4em] uppercase text-ivory group-hover:text-ink transition-colors duration-700">
                  {sent ? "Mensaje enviado" : "Enviar mensaje"}
                </span>
              </button>
              <p className="font-serif italic text-sm text-pearl/50">
                Respondemos en menos de 24 h.
              </p>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  textarea,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
}) {
  return (
    <label className="block group">
      <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-pearl/50 group-focus-within:text-gold transition-colors">
        {label}
      </span>
      {textarea ? (
        <textarea
          name={name}
          rows={4}
          className="mt-3 w-full bg-transparent border-b border-pearl/20 focus:border-gold outline-none py-3 font-serif text-xl text-ivory placeholder:text-pearl/30 transition-colors resize-none"
        />
      ) : (
        <input
          type={type}
          name={name}
          className="mt-3 w-full bg-transparent border-b border-pearl/20 focus:border-gold outline-none py-3 font-serif text-xl text-ivory placeholder:text-pearl/30 transition-colors"
        />
      )}
    </label>
  );
}

function SelectField({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block group">
      <span className="font-sans text-[10px] tracking-[0.4em] uppercase text-pearl/50 group-focus-within:text-gold transition-colors">
        {label}
      </span>
      <select
        name={name}
        defaultValue=""
        className="mt-3 w-full bg-transparent border-b border-pearl/20 focus:border-gold outline-none py-3 font-serif text-xl text-ivory transition-colors appearance-none cursor-pointer"
      >
        <option value="" disabled className="bg-ink">
          Seleccionar…
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-ink text-ivory">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
