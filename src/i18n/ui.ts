import type { Lang } from "./locales";

/**
 * UI strings. `en` is the source of truth: every other locale must define the
 * same keys, which TypeScript enforces through `satisfies`.
 * Wrap text in `**double asterisks**` to highlight it (see `RichText.astro`).
 */
const en = {
  "meta.title": "Raul Rodriguez — Full-Stack Developer",
  "meta.description":
    "Portfolio of Raul Rodriguez, Full-Stack Developer building web and mobile apps with TypeScript, React, React Native, Node.js and Cloudflare Workers.",
  "meta.jobTitle": "Full-Stack Developer",

  "a11y.skipLink": "Skip to main content",
  "a11y.mainNav": "Main",
  "a11y.toggleNav": "Toggle navigation",
  "a11y.github": "GitHub profile",
  "a11y.linkedin": "LinkedIn profile",
  "a11y.email": "Send email",
  "a11y.languagePicker": "Language",
  "a11y.newTab": "opens in a new tab",

  "nav.about": "About",
  "nav.experience": "Experience",
  "nav.projects": "Projects",
  "nav.skills": "Skills",
  "nav.contact": "Contact",
  "nav.resume": "Resume",

  "hero.intro": "Hi, my name is",
  "hero.role": "Full-Stack Developer",
  "hero.description":
    "I build **web and mobile** applications end to end, from React and React Native interfaces to TypeScript APIs, databases and automated tests.",
  "hero.imageAlt": "Portrait of Raul Rodriguez, Full-Stack Developer",
  "hero.cta": "View my Work",
  "hero.scroll": "SCROLL",

  "about.title": "About Me",
  "about.intro":
    "Hey! I'm Raul Rodriguez, a **Full-Stack Developer** based in Tijuana, Mexico. I build web and mobile applications with TypeScript, React, React Native and Node.js, from the interface to the API, the database and the tests.",
  "about.cais":
    "At CAIS, the health care center of **Universidad Autónoma de Baja California**, I led the team building a system for patients, medical records and emergencies with the medical center as a direct client. I interviewed client stakeholders and, with the team, wrote requirements and use cases and got our UI designs approved before development.",
  "about.cimarket":
    "I'm also building **cimarket**, a marketplace app for UABC students on iOS and Android, with a serverless API on Cloudflare Workers, real-time chat and AI-assisted listings. It's in testing, with launch planned for Q1 2027.",
  "about.techsTitle": "Technologies I Work With:",

  "experience.title": "Experience",
  "experience.duration": "Duration:",
  "experience.moreDetails": "More details",
  "experience.leadership": "Leadership & Activities",
  "experience.courses": "Courses",

  "courses.inProgress": "In progress",
  "courses.certificate": "certificate",
  "courses.practiceRepo": "Practice API repository",

  "projects.title": "Projects",
  "projects.completed": "Completed",
  "projects.inProgress": "In Progress",
  "projects.screenshot": "Screenshot of",
  "projects.viewOnGithub": "View {title} on GitHub",

  "skills.title": "Skills & Tools",
  "skills.group.languages": "Languages",
  "skills.group.webMobile": "Web and Mobile",
  "skills.group.backendData": "Backend and Data",
  "skills.group.cloudTools": "Cloud and Tools",
  "skills.group.testing": "Testing",
  "skills.group.practices": "Practices",
  "skills.group.spokenLanguages": "Spoken Languages",
  "skills.e2eTesting": "End-to-end testing",
  "skills.teamLeadership": "Team leadership",
  "skills.clientInterviews": "Client interviews",
  "skills.requirements": "Requirements",
  "skills.useCases": "Use cases",
  "skills.uiDesign": "UI design",
  "skills.spanish": "Spanish (native)",
  "skills.english": "English (B2)",

  "contact.kicker": "What's Next?",
  "contact.title": "Get In Touch!",
  "contact.description":
    "I'm currently looking for new opportunities. Feel free to reach out!",
  "contact.name": "Your Name",
  "contact.email": "Your Email",
  "contact.message": "Your Message",
  "contact.submit": "Send Message",

  "success.metaTitle": "Message Sent — Raul Rodriguez",
  "success.title": "Message Sent",
  "success.description":
    "Thanks for reaching out! I'll get back to you as soon as possible.",
  "success.back": "Back to Home",

  "common.viewAll": "View All",
  "common.back": "Back",

  "resume.onThisPage": "On this page",
  "resume.download": "Download CV ({language})",
  "resume.chooseLanguage": "Choose CV language",

  "page.projects.title": "Projects — Raul Rodriguez",
  "page.projects.description":
    "Projects by Raul Rodriguez, Full-Stack Developer: cimarket mobile marketplace, CAIS patient records system, CAIS E2E test suite and React web apps.",
  "page.experience.title": "Experience — Raul Rodriguez",
  "page.experience.description":
    "Experience of Raul Rodriguez, Full-Stack Developer: full-stack internship at Click & Party, team lead at CAIS (UABC), CIMATank and Udemy courses.",
  "page.resume.title": "Resume — Raul Rodriguez",
  "page.resume.description":
    "Resume of Raul Rodriguez, Full-Stack Developer. Experience at Click & Party and CAIS (UABC), cimarket, and skills in TypeScript, React, React Native, Node.js and Cloudflare.",

  "footer.credit": "Designed and built by Raul Rodriguez.",
  "footer.rights": "My Portfolio. All rights reserved.",
} as const;

export type UIKey = keyof typeof en;

const es = {
  "meta.title": "Raul Rodriguez — Desarrollador Full-Stack",
  "meta.description":
    "Portafolio de Raul Rodriguez, desarrollador full-stack que crea apps web y móviles con TypeScript, React, React Native, Node.js y Cloudflare Workers.",
  "meta.jobTitle": "Desarrollador Full-Stack",

  "a11y.skipLink": "Saltar al contenido principal",
  "a11y.mainNav": "Principal",
  "a11y.toggleNav": "Abrir o cerrar navegación",
  "a11y.github": "Perfil de GitHub",
  "a11y.linkedin": "Perfil de LinkedIn",
  "a11y.email": "Enviar correo",
  "a11y.languagePicker": "Idioma",
  "a11y.newTab": "se abre en una pestaña nueva",

  "nav.about": "Sobre mí",
  "nav.experience": "Experiencia",
  "nav.projects": "Proyectos",
  "nav.skills": "Habilidades",
  "nav.contact": "Contacto",
  "nav.resume": "CV",

  "hero.intro": "Hola, me llamo",
  "hero.role": "Desarrollador Full-Stack",
  "hero.description":
    "Desarrollo aplicaciones **web y móviles** de principio a fin, desde interfaces en React y React Native hasta APIs en TypeScript, bases de datos y pruebas automatizadas.",
  "hero.imageAlt": "Retrato de Raul Rodriguez, desarrollador full-stack",
  "hero.cta": "Ver mi trabajo",
  "hero.scroll": "SCROLL",

  "about.title": "Sobre mí",
  "about.intro":
    "¡Hola! Soy Raul Rodriguez, **desarrollador full-stack** en Tijuana, México. Desarrollo aplicaciones web y móviles con TypeScript, React, React Native y Node.js, desde la interfaz hasta la API, la base de datos y las pruebas.",
  "about.cais":
    "En CAIS, el centro de atención a la salud de la **Universidad Autónoma de Baja California**, lideré al equipo que desarrolló un sistema de pacientes, expedientes médicos y emergencias con el centro médico como cliente directo. Entrevisté a los clientes y, con el equipo, redacté requerimientos y casos de uso y logramos la aprobación de los diseños antes de desarrollar.",
  "about.cimarket":
    "También desarrollo **cimarket**, un marketplace móvil para estudiantes de la UABC en iOS y Android, con una API serverless en Cloudflare Workers, chat en tiempo real y publicaciones asistidas por IA. Está en pruebas, con lanzamiento previsto en el primer trimestre de 2027.",
  "about.techsTitle": "Tecnologías con las que trabajo:",

  "experience.title": "Experiencia",
  "experience.duration": "Duración:",
  "experience.moreDetails": "Más detalles",
  "experience.leadership": "Liderazgo y actividades",
  "experience.courses": "Cursos",

  "courses.inProgress": "En curso",
  "courses.certificate": "certificado",
  "courses.practiceRepo": "Repositorio de la API de práctica",

  "projects.title": "Proyectos",
  "projects.completed": "Terminado",
  "projects.inProgress": "En desarrollo",
  "projects.screenshot": "Captura de",
  "projects.viewOnGithub": "Ver {title} en GitHub",

  "skills.title": "Habilidades y herramientas",
  "skills.group.languages": "Lenguajes",
  "skills.group.webMobile": "Web y móvil",
  "skills.group.backendData": "Backend y datos",
  "skills.group.cloudTools": "Nube y herramientas",
  "skills.group.testing": "Pruebas",
  "skills.group.practices": "Prácticas",
  "skills.group.spokenLanguages": "Idiomas",
  "skills.e2eTesting": "Pruebas E2E",
  "skills.teamLeadership": "Liderazgo de equipo",
  "skills.clientInterviews": "Entrevistas con clientes",
  "skills.requirements": "Requerimientos",
  "skills.useCases": "Casos de uso",
  "skills.uiDesign": "Diseño UI",
  "skills.spanish": "Español (nativo)",
  "skills.english": "Inglés (B2)",

  "contact.kicker": "¿Qué sigue?",
  "contact.title": "¡Hablemos!",
  "contact.description":
    "Estoy buscando nuevas oportunidades. ¡Escríbeme con confianza!",
  "contact.name": "Tu nombre",
  "contact.email": "Tu correo",
  "contact.message": "Tu mensaje",
  "contact.submit": "Enviar mensaje",

  "success.metaTitle": "Mensaje enviado — Raul Rodriguez",
  "success.title": "Mensaje enviado",
  "success.description":
    "¡Gracias por escribir! Te responderé lo antes posible.",
  "success.back": "Volver al inicio",

  "common.viewAll": "Ver todo",
  "common.back": "Volver",

  "resume.onThisPage": "En esta página",
  "resume.download": "Descargar CV ({language})",
  "resume.chooseLanguage": "Elegir idioma del CV",

  "page.projects.title": "Proyectos — Raul Rodriguez",
  "page.projects.description":
    "Proyectos de Raul Rodriguez, desarrollador full-stack: el marketplace móvil cimarket, el sistema de expedientes CAIS, las pruebas E2E de CAIS y apps web en React.",
  "page.experience.title": "Experiencia — Raul Rodriguez",
  "page.experience.description":
    "Experiencia de Raul Rodriguez, desarrollador full-stack: prácticas full-stack en Click & Party, líder de equipo en CAIS (UABC), CIMATank y cursos de Udemy.",
  "page.resume.title": "CV — Raul Rodriguez",
  "page.resume.description":
    "CV de Raul Rodriguez, desarrollador full-stack. Experiencia en Click & Party y CAIS (UABC), cimarket y habilidades en TypeScript, React, React Native, Node.js y Cloudflare.",

  "footer.credit": "Diseñado y desarrollado por Raul Rodriguez.",
  "footer.rights": "Mi portafolio. Todos los derechos reservados.",
} as const satisfies Record<UIKey, string>;

export const ui: Record<Lang, Record<UIKey, string>> = { en, es };
