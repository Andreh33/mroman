"use client";

import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface RevealTextProps {
  text: string;
  className?: string;
  italicWords?: number[];
}

export default function RevealText({
  text,
  className = "",
  italicWords = [],
}: RevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "end 0.35"],
  });

  const words = text.split(" ");

  return (
    <div ref={containerRef} className={className}>
      <p className="flex flex-wrap">
        {words.map((word, i) => {
          const start = i / words.length;
          const end = start + 1 / words.length;
          return (
            <Word
              key={i}
              progress={scrollYProgress}
              range={[start, end]}
              italic={italicWords.includes(i)}
            >
              {word}
            </Word>
          );
        })}
      </p>
    </div>
  );
}

function Word({
  children,
  progress,
  range,
  italic,
}: {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  italic?: boolean;
}) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return (
    <span className="relative mr-[0.28em] mt-2 inline-block">
      {!italic && (
        <span className="absolute opacity-15 select-none">{children}</span>
      )}
      <motion.span
        style={{ opacity }}
        className={italic ? "italic text-gold-deep" : ""}
      >
        {children}
      </motion.span>
    </span>
  );
}
