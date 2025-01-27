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
  location: "",
  about:
    "Passionate full-stack developer with expertise in building modern web applications. Focused on creating efficient, scalable, and user-friendly solutions.",
  social: {
    email: "john.doe@example.com",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/johndoe",
    cv: "/cv.pdf",
  },
  skills: [
    "JavaScript",
    "TypeScript",
    "Vue.js",
    "React",
    "Node.js",
    "Python",
    "Docker",
    "AWS",
  ],
  experience: [
    {
      company: "Tech Corp",
      position: "Senior Full Stack Developer",
      period: "2020 - Present",
      description:
        "Lead developer for multiple high-impact projects, implementing modern web technologies and best practices.",
    },
    {
      company: "StartUp Inc",
      position: "Full Stack Developer",
      period: "2018 - 2020",
      description:
        "Developed and maintained various web applications using Vue.js and Node.js.",
    },
  ],
  projects: [
    {
      name: "E-commerce Platform",
      description: "A modern e-commerce platform built with Vue 3 and Node.js",
      image: "https://picsum.photos/400/300",
      demo: "https://demo.example.com",
      repo: "https://github.com/johndoe/ecommerce",
    },
    {
      name: "Task Management App",
      description:
        "A real-time task management application using Vue 3 and Firebase",
      image: "https://picsum.photos/400/300",
      repo: "https://github.com/johndoe/task-manager",
    },
  ],
  education: [
    {
      institution: "University of Technology",
      degree: "Bachelor of Computer Science",
      period: "2014 - 2018",
      description: "Focus on Software Engineering and Web Technologies",
    },
  ],
};
