import project1 from "../assets/menu-project1.png";
import project2 from "../assets/menu-project2.png";
import project3 from "../assets/menu-project3.png";

export const projects = [
  {
    slug: "restaurant-menu",
    title: "Restaurant Menu — Filters + Tags",
    description:
      "Menu with subcategories, combined filters and dietary tags [GF, V, DF]. No Tailwind, pure CSS.",
    image: project1,
    tags: ["React", "Modern CSS", "Frontend", "Framer Motion"],
    github: "https://github.com/brunoignacioborghi/Restaurant-website",
    demo: "",
  },
  {
    slug: "auth-email-verify",
    title: "Auth + Email Verify — Express/Nodemailer",
    description:
      "Signup/login with email verification, JWT and security best practices.",
    image: project2,
    tags: ["Node", "Express", "JWT", "Full-stack"],
    github: "https://github.com/brunoignacioborghi/my-map",
    demo: "",
  },
  {
    slug: "profiles-app",
    title: "Profiles App — Mundopsicologos Style",
    description:
      "Professionals listing with cards, search, and editable profile with photo.",
    image: project3,
    tags: ["React", "Vite"],
    github: "https://github.com/brunoignacioborghi/mundopsicologos",
    demo: "",
  },
];
