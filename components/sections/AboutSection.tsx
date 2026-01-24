"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { STATS } from "@/lib/constants";

interface StatBoxProps {
  number: string;
  label: string;
  delay: number;
}

function StatBox({ number, label, delay }: StatBoxProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.02, borderColor: "var(--color-accent)" }}
      className="w-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] p-6 flex items-center gap-4 transition-all duration-300"
    >
      <span className="font-display text-5xl font-bold text-[var(--color-accent)]">
        {number}
      </span>
      <span className="text-[var(--color-text-secondary)] text-sm leading-snug whitespace-pre-line">
        {label}
      </span>
    </motion.div>
  );
}

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="about"
      className="bg-[var(--color-bg-secondary)] py-24 md:py-32"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col gap-12"
        >
          {/* Header */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center gap-4"
          >
            <span className="text-[var(--color-accent)] text-sm">
              {"// ABOUT_ME"}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wider text-[var(--color-text-primary)]">
              ¿QUIÉN SOY?
            </h2>
          </motion.div>

          {/* Content */}
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Left - Text Content */}
            <motion.div
              variants={containerVariants}
              className="flex-1 flex flex-col gap-6"
            >
              <motion.p
                variants={itemVariants}
                className="text-[var(--color-text-primary)] text-base leading-relaxed"
              >
                Soy Fernando Escobar, desarrollador de software fullstack con
                más de 5 años de experiencia construyendo soluciones digitales
                que marcan la diferencia.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-[var(--color-text-secondary)] text-base leading-relaxed"
              >
                Me apasiona la programación, el aprendizaje constante y resolver
                problemas complejos. Aplico las mejores prácticas y tecnologías
                que mejor se adaptan a cada solución.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-[var(--color-text-secondary)] text-base leading-relaxed"
              >
                Actualmente trabajo en SincoSoft ERP, desarrollando sistemas
                empresariales robustos, mientras también llevo proyectos
                independientes para diversos clientes.
              </motion.p>
            </motion.div>

            {/* Right - Stats */}
            <div className="w-full lg:w-[350px] flex flex-col gap-4">
              {STATS.map((stat, index) => (
                <StatBox
                  key={stat.number}
                  number={stat.number}
                  label={stat.label}
                  delay={0.3 + index * 0.1}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
