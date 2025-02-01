import { motion } from "framer-motion";
// import Navbar from "@/components/ui/Navbar";
// import Profile from "/images/Profile.jpg";
import { Spotlight } from "@/components/ui/Spotlight";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFileArrowDown, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";

export const projects = [
  {
    title: "React",
    imgUrl:
      "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-1024.png",
  },
  {
    title: "TypeScript",
    imgUrl:
      "https://w7.pngwing.com/pngs/915/519/png-transparent-typescript-hd-logo-thumbnail.png",
  },
  {
    title: "NextJS",
    imgUrl:
      "https://miro.medium.com/v2/resize:fit:1258/1*okiCUvTUJLtOqJv1dMzwpA.png",
  },

  {
    title: "Django",
    imgUrl: "/public/logos/django.png",
  },

  {
    title: "Python",
    imgUrl:
      "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-1024.png",
  },

  {
    title: "NodeJS",
    imgUrl: "/public/logos/nodejs.png",
  },
  {
    title: "ExpressJS",
    imgUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },

  {
    title: "Tensorflow",
    imgUrl: "/public/logos/tensorflow.png",
  },
  {
    title: "Prisma",
    imgUrl: "/public/logos/prisma.png",
  },
  {
    title: "PostgreSQL",
    imgUrl: "/public/logos/postgres.png",
  },

  {
    title: "TailwindCSS",
    imgUrl: "/public/logos/tailwind.png",
  },
];

// import { TypewriterEffect } from "@/components/ui/TypewriterEffect";

const Home = () => {
  // const handleClick = () => {
  //   window.location.href =
  //     "https://www.linkedin.com/in/jether-omictin-a997351b6";
  // };

  return (
    <section id="about" className="relative w-full">
      <GridBackgroundDemo />
      <div className="relative z-10 w-full  text-white flex items-center justify-center">
        <Spotlight />
        <div className="home-container h-full w-full mx-4 xl:mx-60 flex-col">
          {/* <Navbar /> */}

          <div className="home-contents my-16 h-screen px-4">
            <motion.h3
              className="scroll-m-20 mb-5 text-4xl xl:text-6xl font-bold tracking-tight text-white text-center xl:text-left dark:text-black"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              About
            </motion.h3>

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              <p className="dark:text-black font-semibold text-2xl">
                I'm Jether Omictin 🤖
              </p>
              <p className="dark:text-black mb-10">
                A computer science student from cebu institute of technology -
                university, philippines.
              </p>

              <p className="dark:text-black ">
                I am so interested in the fields of machine learning and
                artificial intelligence but for now i focused on creating web
                applications to deliver solutions that empower businesses and
                enhance user experiences. I specialize in crafting web apps
                using <strong>Typescript</strong> and <strong>React</strong>,{" "}
                <strong>NextJS </strong> for user-friendly websites and
                applications tailored to meet the unique needs of my clients.
              </p>
            </motion.h1>

            <motion.div
              className="card-animation"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1,
                delay: 0.1,
                ease: "easeOut",
              }}
            >
              <div className="education-div py-5">
                <p className="dark:text-black font-bold text-3xl py-5 ">
                  Education
                </p>
                <div className="timeline flex items-center gap-3">
                  <div className=" w-5 h-5 circle bg-white dark:bg-black rounded-full"></div>
                  <p className="dark:text-black">2022-2026</p>
                </div>

                <div className="citu  flex px-2 gap-3 ">
                  <p className="border-l-2 dark:border-gray-700 border-white"></p>
                  <img
                    className="w-16 h-16 object-contain"
                    src="images/citu_logo.png"
                    alt=""
                  />

                  <div className="text flex flex-col justify-center">
                    <p className="dark:text-black font-semibold ">
                      Cebu Institute of Technology - University
                    </p>
                    <p className="dark:text-black  ">
                      Bachelor of Science in Computer Science
                    </p>
                  </div>
                </div>
              </div>

              <div className="skills-div py-10 text-center flex flex-col items-center justify-center">
                <p className="dark:text-white bg-white text-black font-bold text-xl dark:bg-black p-1 w-28 rounded-lg mb-5">
                  Skills
                </p>

                <p className="text-white dark:text-black text-lg mb-3">
                  These is the primary <strong>Technologies</strong> i often
                  used
                </p>
                <div className="tech-stack cursor-pointer hover:scale-105 flex flex-wrap items-center justify-center gap-8 grayscale transition-all duration-500 ease-in-out hover:grayscale-0 p-5">
                  {projects.map((item, index) => (
                    <img
                      className="object-contain w-12 h-12"
                      src={item.imgUrl}
                      alt={item.title}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
