"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import type { Project } from "@/types";
import { PROJECTS } from "@/lib/constants";
import BrowserFrame from "@/components/ui/BrowserFrame";

interface CardContentProps {
  project: Project;
}

function CardContent({ project }: CardContentProps) {
  return (
    <>
      <div
        className={`relative h-[240px] bg-gradient-to-br ${project.gradient} flex items-center justify-center overflow-hidden group py-6`}
      >
        {project.image ? (
          <BrowserFrame
            src={project.image}
            alt={`Captura de ${project.name}`}
            url={project.url}
          />
        ) : (
          <motion.div
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.3 }}
            className={`w-[180px] h-[120px] ${
              project.isComingSoon
                ? "bg-[var(--color-accent)]/20 border-[var(--color-accent)]/40"
                : "bg-white/10 border-white/20"
            } border backdrop-blur-sm flex flex-col gap-1 p-2`}
          >
            <div
              className={`w-full h-2 ${
                project.isComingSoon
                  ? "bg-[var(--color-accent)]/30"
                  : "bg-white/20"
              } rounded-sm`}
            />
            <div className="flex-1 flex gap-2">
              <div
                className={`w-10 h-full ${
                  project.isComingSoon
                    ? "bg-[var(--color-accent)]/25"
                    : "bg-white/15"
                }`}
              />
              <div
                className={`flex-1 ${
                  project.isComingSoon
                    ? "bg-[var(--color-accent)]/10"
                    : "bg-white/10"
                }`}
              />
            </div>
          </motion.div>
        )}

        {project.isComingSoon && (
          <span className="absolute bottom-4 font-display text-sm font-semibold tracking-widest text-[var(--color-accent)]">
            PRÓXIMAMENTE
          </span>
        )}
      </div>

      <div
        className={`p-6 flex flex-col gap-3 ${
          project.isComingSoon
            ? "bg-[var(--color-accent)]"
            : "bg-[var(--color-bg-secondary)]"
        }`}
      >
        <span
          className={`text-[11px] ${
            project.isComingSoon
              ? "text-[var(--color-bg-primary)]"
              : "text-[var(--color-accent)]"
          }`}
        >
          {project.tag}
        </span>
        <h3
          className={`font-display text-xl font-semibold tracking-wide ${
            project.isComingSoon
              ? "text-[var(--color-bg-primary)]"
              : "text-[var(--color-text-primary)]"
          }`}
        >
          {project.name}
        </h3>
        <p
          className={`text-[13px] leading-relaxed ${
            project.isComingSoon
              ? "text-[var(--color-bg-primary)]"
              : "text-[var(--color-text-secondary)]"
          }`}
        >
          {project.description}
        </p>
      </div>
    </>
  );
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={
        !project.isComingSoon
          ? { y: -8, boxShadow: "0 20px 40px rgba(31, 111, 211, 0.15)" }
          : undefined
      }
      className={`flex flex-col overflow-hidden border transition-all duration-300 ${
        project.isComingSoon
          ? "border-transparent"
          : "border-[var(--color-border)] hover:border-[var(--color-accent)]"
      }`}
    >
      {project.url ? (
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col h-full cursor-pointer"
        >
          <CardContent project={project} />
        </a>
      ) : (
        <CardContent project={project} />
      )}
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="bg-[var(--color-bg-primary)] py-24 md:py-32"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="flex flex-col gap-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4"
          >
            <span className="text-[var(--color-accent)] text-sm">
              {"// MY_PROJECTS"}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wider text-[var(--color-text-primary)]">
              PROYECTOS DESTACADOS
            </h2>
            <p className="text-[var(--color-text-secondary)] text-base">
              Soluciones digitales que he desarrollado para diversos clientes y
              sectores.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
