"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { NAVIGATION_LINKS, CONTACT_LINKS, SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-bg-primary)] py-16 md:py-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-10"
        >
          {/* Main Footer */}
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            {/* Left - Logo & Description */}
            <div className="flex flex-col gap-4 max-w-md">
              <motion.a
                href="#"
                className="flex items-center gap-3"
                whileHover={{ scale: 1.02 }}
              >
                <span className="text-[var(--color-accent)] font-bold text-2xl">
                  {"</>"}
                </span>
                <span className="text-[var(--color-text-primary)] text-lg">
                  fernando.escobar
                </span>
              </motion.a>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                Desarrollador Fullstack apasionado por crear soluciones
                digitales que generan impacto.
              </p>
            </div>

            {/* Right - Links */}
            <div className="flex flex-wrap gap-12 md:gap-20">
              {/* Navigation */}
              <div className="flex flex-col gap-4">
                <span className="text-[var(--color-accent)] text-xs">
                  {"// NAVEGACIÓN"}
                </span>
                <div className="flex flex-col gap-2">
                  {NAVIGATION_LINKS.map((item) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      whileHover={{ x: 5, color: "var(--color-accent)" }}
                      className="text-[var(--color-text-secondary)] text-[13px] transition-colors"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div className="flex flex-col gap-4">
                <span className="text-[var(--color-accent)] text-xs">
                  {"// CONTACTO"}
                </span>
                <div className="flex flex-col gap-2">
                  {CONTACT_LINKS.map((item) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      whileHover={{ x: 5, color: "var(--color-accent)" }}
                      className="text-[var(--color-text-secondary)] text-[13px] transition-colors"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div className="flex flex-col gap-4">
                <span className="text-[var(--color-accent)] text-xs">
                  {"// SOCIAL"}
                </span>
                <div className="flex flex-col gap-2">
                  {SOCIAL_LINKS.map((item) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 5, color: "var(--color-accent)" }}
                      className="text-[var(--color-text-secondary)] text-[13px] transition-colors"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-6 border-t border-[var(--color-border)]">
            <span className="text-[var(--color-text-secondary)] text-xs">
              © {currentYear} Fernando Escobar. Todos los derechos reservados.
            </span>
            <span className="text-[var(--color-text-secondary)] text-xs">
              Diseñado y desarrollado con pasión.
            </span>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
