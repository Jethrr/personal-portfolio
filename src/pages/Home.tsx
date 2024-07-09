import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Profile from "/images/Profile.jpg";
import { Spotlight } from "@/components/ui/Spotlight";
import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";

const Home = () => {
  return (
    <div className="relative w-full">
      <GridBackgroundDemo />
      <div className="relative z-10 w-full  text-[#B2B5AD] flex items-center justify-center">
        <Spotlight />
        <div className="home-container h-full w-full mx-4 xl:mx-60">
          <Navbar />

          <div className="home-contents my-16">
            <motion.div
              className="header-nav flex flex-col-reverse xl:flex-row items-center justify-center p-5"
              initial={{ opacity: 0, x: "-100vw" }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="heading-texts w-full flex flex-col items-center xl:items-start justify-center xl:justify-start">
                <motion.h3
                  className="scroll-m-20 text-4xl xl:text-6xl font-bold tracking-tight text-white text-center xl:text-left dark:text-black"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                >
                  Jether Omictin
                </motion.h3>
                <motion.h4
                  className="scroll-m-20 text-xl xl:text-2xl font-semibold tracking-tight text-white text-center xl:text-left dark:text-black"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                >
                  Computer Science Student
                </motion.h4>
                <motion.blockquote
                  className="mt-6 border-l-2 dark:border-black pl-6 italic text-center xl:text-left dark:text-black"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                >
                  "Hi, I am a Computer Science student from Cebu Institute Of
                  Technology University. <br /> Aspiring to be a Full Stack
                  Developer."
                </motion.blockquote>
              </div>
              <motion.div
                className="img-div p-5"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
              >
                <img
                  src={Profile}
                  className="w-full max-w-[200px] xl:max-w-[400px] h-auto rounded-full"
                />
              </motion.div>
            </motion.div>
            <TypewriterEffect />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
