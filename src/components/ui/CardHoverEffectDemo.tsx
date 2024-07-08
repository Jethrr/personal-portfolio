import { HoverEffect } from "../ui/card-hover-effect";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-full md:mx-auto md:py-8">
      <HoverEffect items={projects} />
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
    title: "Java",
    imgUrl:
      "https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_logo_icon_146458.png",
  },
  {
    title: "PHP",
    imgUrl:
      "https://cdn.icon-icons.com/icons2/2415/PNG/512/php_plain_logo_icon_146397.png",
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
    title: "Git",
    imgUrl:
      "https://cdn.icon-icons.com/icons2/2415/PNG/512/git_original_wordmark_logo_icon_146510.png",
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
