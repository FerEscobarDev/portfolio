"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="bg-[var(--color-accent)] py-24 md:py-32"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="flex flex-col items-center gap-8 text-center"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--color-bg-primary)] text-sm"
          >
            {"// LET'S_BUILD_TOGETHER"}
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-[var(--color-bg-primary)] max-w-4xl"
          >
            ¿TIENES UN PROYECTO EN MENTE?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3 }}
            className="text-[var(--color-bg-primary)] text-lg max-w-xl"
          >
            Estoy disponible para proyectos freelance y colaboraciones.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mt-4"
          >
            <motion.a
              href="mailto:contacto@fernandoescobar.dev"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-[var(--color-bg-primary)] text-[var(--color-text-primary)] px-8 py-4 text-sm font-semibold transition-all duration-300 hover:brightness-110"
            >
              sendEmail()
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/fernandoescobar"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center justify-center bg-transparent border-2 border-[var(--color-bg-primary)] text-[var(--color-bg-primary)] px-8 py-4 text-sm font-semibold transition-all duration-300 hover:bg-[var(--color-bg-primary)]/10"
            >
              viewLinkedIn()
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
