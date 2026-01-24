"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Button from "@/components/ui/Button";

const codeLines = [
  { content: "const developer = {", color: "text-white" },
  {
    content: "  name: 'Fernando Escobar',",
    color: "text-[var(--color-code-string)]",
  },
  {
    content: "  role: 'Fullstack Developer',",
    color: "text-[var(--color-code-string)]",
  },
  {
    content: "  experience: '5+ years',",
    color: "text-[var(--color-code-string)]",
  },
  {
    content: "  passion: 'Building solutions',",
    color: "text-[var(--color-code-string)]",
  },
  { content: "  status: 'Available'", color: "text-[var(--color-accent)]" },
  { content: "};", color: "text-white" },
  { content: " ", color: "text-white" },
  {
    content: "developer.createAwesomeThings();",
    color: "text-[var(--color-accent)]",
  },
];

function TerminalWindow() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (visibleLines < codeLines.length) {
      const timer = setTimeout(() => {
        setVisibleLines((prev) => prev + 1);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [visibleLines]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 50, rotateY: -10 }}
      animate={{ opacity: 1, x: 0, rotateY: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="w-full max-w-[500px] h-[450px] bg-[var(--color-bg-secondary)] border border-[var(--color-border)] p-6 flex flex-col gap-4"
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 rounded-full bg-[var(--color-terminal-red)]" />
        <div className="w-3 h-3 rounded-full bg-[var(--color-terminal-yellow)]" />
        <div className="w-3 h-3 rounded-full bg-[var(--color-terminal-green)]" />
        <span className="text-[var(--color-text-secondary)] text-xs ml-2">
          fernando@dev:~
        </span>
      </div>

      {/* Code Block */}
      <div className="flex-1 flex flex-col gap-1">
        {codeLines.slice(0, visibleLines).map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className={`text-sm ${line.color}`}
          >
            {line.content}
          </motion.div>
        ))}
        {visibleLines >= codeLines.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center"
          >
            <div
              className={`w-2.5 h-5 bg-[var(--color-accent)] ${
                showCursor ? "opacity-100" : "opacity-0"
              } transition-opacity`}
            />
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-screen bg-[var(--color-bg-primary)] flex items-center pt-20"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-20 py-16 md:py-24 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 flex flex-col gap-8"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[var(--color-accent)] text-sm"
            >
              {"// FULLSTACK_DEVELOPER"}
            </motion.span>

            <div className="flex flex-col gap-2">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-[var(--color-text-primary)]"
              >
                Transformando ideas
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-[var(--color-text-primary)]"
              >
                en código que
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-wider text-[var(--color-accent)]"
              >
                impacta.
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-[var(--color-text-secondary)] text-base leading-relaxed max-w-lg"
            >
              +5 años construyendo soluciones digitales. Apasionado por el
              código limpio, las mejores prácticas y el aprendizaje constante.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Button href="#projects" size="lg">
                viewProjects()
              </Button>
              <Button
                href="/cv-fernando-escobar.pdf"
                variant="secondary"
                size="lg"
                isExternal
              >
                downloadCV()
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Terminal */}
          <div className="flex-shrink-0">
            <TerminalWindow />
          </div>
        </div>
      </div>
    </section>
  );
}
