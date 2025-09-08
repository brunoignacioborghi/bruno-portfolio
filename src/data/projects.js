
import project1 from "../assets/menu-project1.png";
import project2 from "../assets/menu-project2.png";
import project3 from "../assets/menu-project3.png";

export const projects = [
  {
    slug: "restaurant-menu",
    title: "Restaurant Menu — Filters + Tags",
    description:
      "Menú con subcategorías, filtros combinados y etiquetas [GF, V, DF]. Sin Tailwind, CSS puro.",
    image: project1,
    tags: ["React", "Modern CSS", "Frontend", "Framer Motion"],
    github: "https://github.com/brunoignacioborghi/Restaurant-website",
    demo: "",
  },
  {
    slug: "auth-email-verify",
    title: "Auth + Email Verify — Express/Nodemailer",
    description:
      "Registro/login con verificación por email, JWT y buenas prácticas de seguridad.",
    image: project2,
    tags: ["Node", "Express", "JWT", "Full-stack"],
    github: "https://github.com/brunoignacioborghi/my-map",
    demo: "",
  },
  {
    slug: "profiles-app",
    title: "Profiles App — Estilo mundopsicologos",
    description:
      "Listado de profesionales con cards, búsqueda y perfil editable con foto.",
    image: project3,
    tags: ["React", "Vite"],
    github: "https://github.com/brunoignacioborghi/mundopsicologos",
    demo: "",
  },
];
