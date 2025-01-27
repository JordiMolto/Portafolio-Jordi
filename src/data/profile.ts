export interface Profile {
  name: string;
  title: string;
  location: string;
  about: string;
  social: {
    email: string;
    linkedin: string;
    github: string;
    cv: string;
  };
  skills: string[];
  experience: Experience[];
  projects: Project[];
  education: Education[];
}

interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

interface Project {
  name: string;
  description: string;
  image: string;
  demo?: string;
  repo: string;
}

interface Education {
  institution: string;
  degree: string;
  period: string;
  description?: string;
}

export const profile: Profile = {
  name: "Jordi Moltó Solís",
  title: "Frontend Developer",
  location: "Alcoy, Alicante",
  about:
    "Soy una persona responsable, autodidacta y paciente, con una rápida capacidad de aprendizaje. Estoy comprometido con el crecimiento constante, manteniéndome en formación continua para adquirir nuevos conocimientos y habilidades. Además, tengo interés por explorar áreas complementarias como la edición de video, fotografía y diseño, lo que amplía mi perspectiva y creatividad en los proyectos que desarrollo.",
  social: {
    email: "jordimolto1@gmail.com",
    linkedin: "https://www.linkedin.com/in/jordi-molto/",
    github: "https://github.com/JordiMolto",
    cv: "/CV-jordi-molto.pdf",
  },
  skills: [
    "JavaScript",
    "Vue2 / Vue3",
    "React.js",
    "TypeScript",
    "CSS / SCSS",
    "HTML",
    "PHP",
    "Laravel",
    "Java",
    "Git",
    "Docker",
    "Blade",
    "Playwright",
    "Webpack",
    "Wordpress avanzado",
    "Inertia",
    "Ziggy",
    "Bootstrap",
    "Prestashop",
    "Visual Studio Code",
    "Terminal",
    "Vite",
  ],
  experience: [
    {
      company: "Zataca Systems",
      position: "Frontend Developer",
      period: "28/08/2023 - Presente",
      description: "Encargado del desarrollo frontend de la aplicación web.",
    },
    {
      company: "Viviendea",
      position: "Frontend Developer",
      period: "01/06/2022 - 20/08/2023",
      description:
        "Encargado del desarrollo de la aplicación interna de Viviendea, solución de incidencias, soporte técnico, mantenimiento web.",
    },
    {
      company: "acceseo",
      position: "DUAL - Frontend Developer",
      period: "09/2021 - 07/2022",
      description:
        "Encargado de: Wordpress, solución de incidencias, SEO técnico, soporte técnico, mantenimiento web.",
    },
    {
      company: "doblemente",
      position: "Prácticas Grado Medio - Frontend Developer",
      period: "02/2019 - 05/2019",
      description:
        "Realización de prácticas como Frontend Developer durante el grado medio.",
    },
  ],
  projects: [
    {
      name: "E-commerce Platform",
      description: "A modern e-commerce platform built with Vue 3 and Node.js",
      image: "https://picsum.photos/400/300",
      demo: "",
      repo: "",
    },
    {
      name: "Task Management App",
      description:
        "A real-time task management application using Vue 3 and Firebase",
      image: "https://picsum.photos/400/300",
      repo: "",
    },
  ],
  education: [
    {
      institution: "CIPFP BATOI",
      degree: "DAW (Desarrollo de Aplicaciones Web)",
      period: "09/2020 - Finalizado",
      description: "",
    },
    {
      institution: "San Roque",
      degree: "Técnico en Sistemas Microinformáticos y Redes",
      period: "09/2018 - Finalizado",
      description: "",
    },
  ],
};

export const profileCompany = {
  company: "Ofasty",
  description: "Software TPV para restaurantes",
  features: [
    "Gestión de pedidos",
    "Control de inventario",
    "Informes de ventas",
    "Gestión de mesas",
    "Sistema de reservas",
    "Gestión de empleados",
  ],
  contact: {
    email: "contacto@ofasty.com",
    phone: "+34 XXX XXX XXX",
    address: "Calle Ejemplo, 123, 28001 Madrid",
  },
};
