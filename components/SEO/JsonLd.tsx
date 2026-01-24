export default function JsonLd() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Fernando Escobar",
    url: "https://fernandoescobar.dev",
    image: "https://fernandoescobar.dev/og-image.png",
    sameAs: [
      "https://github.com/fernandoescobar",
      "https://linkedin.com/in/fernandoescobar",
      "https://twitter.com/fernandoescobar",
    ],
    jobTitle: "Fullstack Developer",
    worksFor: {
      "@type": "Organization",
      name: "SincoSoft ERP",
    },
    knowsAbout: [
      "C#",
      ".NET",
      "JavaScript",
      "TypeScript",
      "React",
      "Vue.js",
      "Angular",
      "Node.js",
      "SQL Server",
      "MongoDB",
      "AWS",
      "REST APIs",
    ],
    description:
      "Desarrollador Fullstack con más de 5 años de experiencia construyendo soluciones digitales que marcan la diferencia.",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Fernando Escobar - Portfolio",
    url: "https://fernandoescobar.dev",
    description:
      "Portfolio profesional de Fernando Escobar, desarrollador Fullstack especializado en C#, .NET, React y TypeScript.",
    author: {
      "@type": "Person",
      name: "Fernando Escobar",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
