import type { NavItem, Project, Skill, ContactLink, SocialLink } from "@/types";

export const SITE_CONFIG = {
  name: "Fernando Escobar",
  title: "Desarrollador Fullstack",
  description:
    "Desarrollador Fullstack con +5 años de experiencia construyendo soluciones digitales.",
  url: "https://fernandoescobar.dev",
  email: "contacto@fernandoescobar.dev",
  location: "Colombia",
} as const;

export const NAV_ITEMS: NavItem[] = [
  { label: "// about", href: "#about" },
  { label: "// projects", href: "#projects" },
  { label: "// skills", href: "#skills" },
  { label: "// contact", href: "#contact" },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    tag: "// PSYCHOLOGY",
    name: "erikacaropsicologa.com",
    description:
      "Plataforma web profesional para servicios de psicología clínica.",
    gradient: "from-[#9B4F96] to-[#6B3A6B]",
    url: "https://erikacaropsicologa.com",
    image: "/img/ErikaCaroPsicologa.png",
  },
  {
    id: "2",
    tag: "// MENTAL_HEALTH",
    name: "psikora.com",
    description: "Aplicación para gestión y seguimiento de salud mental.",
    gradient: "from-[#7C3AED] to-[#4C1D95]",
    url: "https://psikora.com",
    image: "/img/Psikora.png",
  },
  {
    id: "3",
    tag: "// E-COMMERCE",
    name: "receramica.com",
    description: "Tienda online para productos de cerámica artesanal.",
    gradient: "from-[#D97706] to-[#92400E]",
    url: "https://receramica.com",
    image: "/img/Receramica.png",
  },
  {
    id: "4",
    tag: "// FINTECH",
    name: "exchangelatam.com",
    description: "Plataforma de cambio de divisas para Latinoamérica.",
    gradient: "from-[#059669] to-[#065F46]",
    url: "https://exchangelatam.com",
    image: "/img/Exchangelatam.png",
  },
  {
    id: "5",
    tag: "// SOCIAL_IMPACT",
    name: "amiganoestassola.com",
    description: "Red de apoyo y acompañamiento emocional para mujeres.",
    gradient: "from-[#EC4899] to-[#9D174D]",
    url: "https://amiganoestassola.com",
    image: "/img/AmigaNoEstasSola.png",
  },
  {
    id: "6",
    tag: "// COMING_SOON",
    name: "companypolygraph.com",
    description:
      "Sistema de evaluaciones poligráficas empresariales. Próximamente.",
    gradient: "from-[#1A1A1A] to-[#0D0D0D]",
    isComingSoon: true,
  },
];

export const SKILLS_ROW_1: Skill[] = [
  { icon: "C#", name: "C#", color: "#9B4F96" },
  { icon: ".NET", name: ".NET", color: "#512BD4" },
  { icon: "JS", name: "JavaScript", color: "#F7DF1E" },
  { icon: "TS", name: "TypeScript", color: "#3178C6" },
  { icon: "React", name: "React", color: "#58c4dc", isHighlighted: false },
  { icon: "Vue", name: "Vue.js", color: "#4FC08D" },
  { icon: "SQL", name: "SQL Server", color: "#00D4AA" },
];

export const SKILLS_ROW_2: Skill[] = [
  { icon: "Node", name: "Node.js", color: "#339933" },
  { icon: "Ng", name: "Angular", color: "#DD0031" },
  { icon: "Git", name: "Git", color: "#F05032" },
  { icon: "Laravel", name: "Laravel", color: "#FF9900" },
  { icon: "CSS", name: "CSS/SASS", color: "#1572B6" },
  { icon: "API", name: "REST APIs", color: "#00D4AA" },
  { icon: "DB", name: "MongoDB", color: "#47A248" },
];

export const NAVIGATION_LINKS: ContactLink[] = [
  { label: "about()", href: "#about" },
  { label: "projects()", href: "#projects" },
  { label: "skills()", href: "#skills" },
];

export const CONTACT_LINKS: ContactLink[] = [
  {
    label: "contacto@fernandoescobar.dev",
    href: "mailto:contacto@fernandoescobar.dev",
  },
  { label: "Colombia", href: "#" },
];

export const SOCIAL_LINKS: SocialLink[] = [
  { label: "GitHub", href: "https://github.com/FerEscobarDev" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jeisonfernandoescobarbermudezdev/" },
  // { label: "Twitter", href: "https://twitter.com/fernandoescobar" },
  { label: "Instagram", href: "https://www.instagram.com/ferescb?igsh=MTU0aXU1azdqNTlxMA==" },
];

export const STATS = [
  { number: "5+", label: "años de\nexperiencia" },
  { number: "6+", label: "proyectos\nindependientes" },
] as const;

export const CODE_LINES = [
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
] as const;
