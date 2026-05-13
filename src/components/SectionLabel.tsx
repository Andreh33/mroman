"use client";

import { motion } from "framer-motion";

export default function SectionLabel({
  index,
  title,
  className = "",
}: {
  index: string;
  title: string;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-center gap-4 ${className}`}
    >
      <span className="font-sans text-[10px] tracking-[0.4em] text-gold uppercase">
        {index}
      </span>
      <span className="h-px w-12 bg-gold" />
      <span className="font-sans text-[10px] tracking-[0.4em] text-graphite uppercase">
        {title}
      </span>
    </motion.div>
  );
}
