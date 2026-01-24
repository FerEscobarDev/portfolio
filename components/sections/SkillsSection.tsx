"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface Skill {
  icon: string;
  name: string;
  color: string;
  isHighlighted?: boolean;
}

const skillsRow1: Skill[] = [
  { icon: "C#", name: "C#", color: "#9B4F96" },
  { icon: ".NET", name: ".NET", color: "#512BD4" },
  { icon: "JS", name: "JavaScript", color: "#F7DF1E" },
  { icon: "TS", name: "TypeScript", color: "#3178C6" },
  { icon: "React", name: "React", color: "#0D0D0D", isHighlighted: true },
  { icon: "Vue", name: "Vue.js", color: "#4FC08D" },
  { icon: "SQL", name: "SQL Server", color: "#00D4AA" },
];

const skillsRow2: Skill[] = [
  { icon: "Node", name: "Node.js", color: "#339933" },
  { icon: "Ng", name: "Angular", color: "#DD0031" },
  { icon: "Git", name: "Git", color: "#F05032" },
  { icon: "AWS", name: "AWS", color: "#FF9900" },
  { icon: "CSS", name: "CSS/SASS", color: "#1572B6" },
  { icon: "API", name: "REST APIs", color: "#00D4AA" },
  { icon: "DB", name: "MongoDB", color: "#47A248" },
];

interface SkillCardProps {
  skill: Skill;
  index: number;
  row: number;
}

function SkillCard({ skill, index, row }: SkillCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, delay: (row * 7 + index) * 0.05 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className={`w-[150px] p-6 flex flex-col items-center gap-3 transition-all duration-300 ${
        skill.isHighlighted
          ? "bg-[var(--color-accent)]"
          : "bg-[var(--color-bg-primary)] border border-[var(--color-border)] hover:border-[var(--color-accent)]"
      }`}
    >
      <motion.span
        whileHover={{ scale: 1.1 }}
        className="text-2xl md:text-[28px] font-bold"
        style={{
          color: skill.isHighlighted ? "#0D0D0D" : skill.color,
        }}
      >
        {skill.icon}
      </motion.span>
      <span
        className={`text-[13px] ${
          skill.isHighlighted
            ? "text-[var(--color-bg-primary)]"
            : "text-[var(--color-text-primary)]"
        }`}
      >
        {skill.name}
      </span>
    </motion.div>
  );
}

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="bg-[var(--color-bg-secondary)] py-24 md:py-32"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          className="flex flex-col gap-12"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4 text-center"
          >
            <span className="text-[var(--color-accent)] text-sm">
              {"// TECH_STACK"}
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold tracking-wider text-[var(--color-text-primary)]">
              TECNOLOGÍAS
            </h2>
            <p className="text-[var(--color-text-secondary)] text-base max-w-xl">
              Las herramientas que uso para construir soluciones de alto
              impacto.
            </p>
          </motion.div>

          {/* Skills Grid Row 1 */}
          <div className="flex flex-wrap justify-center gap-4">
            {skillsRow1.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={index}
                row={0}
              />
            ))}
          </div>

          {/* Skills Grid Row 2 */}
          <div className="flex flex-wrap justify-center gap-4">
            {skillsRow2.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                index={index}
                row={1}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
