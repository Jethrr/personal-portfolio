import { HoverEffect } from "../ui/card-hover-effect";
import { motion } from "framer-motion";
export function CardHoverEffectDemo() {
  return (
    <div className="max-w-full md:mx-auto md:py-5 ">
      <motion.h3
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        <HoverEffect items={projects} />
      </motion.h3>
    </div>
  );
}

export const projects = [
  {
    title: "React",
    imgUrl:
      "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png",
  },
  {
    title: "TypeScript",
    imgUrl:
      "https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_original_logo_icon_146317.png",
  },
  {
    title: "Django",
    imgUrl:
      "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_django_icon_130645.png",
  },
  {
    title: "NextJS",
    imgUrl:
      "https://miro.medium.com/v2/resize:fit:1258/1*okiCUvTUJLtOqJv1dMzwpA.png",
  },

  {
    title: "Python",
    imgUrl:
      "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-1024.png",
  },

  {
    title: "NodeJS",
    imgUrl:
      "https://cdn.icon-icons.com/icons2/2415/PNG/512/nodejs_original_wordmark_logo_icon_146412.png",
  },
  {
    title: "ExpressJS",
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  {
    title: "MySQL",
    imgUrl:
      "https://cdn.icon-icons.com/icons2/2415/PNG/512/mysql_original_wordmark_logo_icon_146417.png",
  },
  {
    title: "PostgreSQL",
    imgUrl:
      "https://cdn.icon-icons.com/icons2/2415/PNG/512/postgresql_plain_wordmark_logo_icon_146390.png",
  },
  {
    title: "Svelte",
    imgUrl:
      "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_svelte_icon_130137.png",
  },
  {
    title: "Postman",
    imgUrl:
      "https://cdn.icon-icons.com/icons2/3053/PNG/512/postman_macos_bigsur_icon_189815.png",
  },

  {
    title: "TailwindCSS",
    imgUrl:
      "https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_tailwind_icon_130128.png",
  },
];
