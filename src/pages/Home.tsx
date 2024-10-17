import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import Profile from "/images/Profile.jpg";
import { Spotlight } from "@/components/ui/Spotlight";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";

const Home = () => {
  const handleClick = () => {
    window.location.href =
      "https://www.linkedin.com/in/jether-omictin-a997351b6";
  };

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
                <motion.h2
                  className="text-2xl text-white dark:text-black font-semibold"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                >
                  Hello!{" "}
                  <motion.span
                    animate={{
                      rotate: [0, 20, -20, 20, -20, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "loop",
                    }}
                    style={{
                      display: "inline-block",
                    }}
                  >
                    👋
                  </motion.span>
                  I am,
                </motion.h2>

                <motion.h3
                  className="scroll-m-20 text-4xl xl:text-6xl font-bold tracking-tight text-white text-center xl:text-left dark:text-black"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                >
                  Jether Omictin
                </motion.h3>
                {/* <motion.h4
                  className="scroll-m-20 text-xl xl:text-2xl font-semibold tracking-tight text-white text-center xl:text-left dark:text-black"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
                >
                  Computer Science Student
                </motion.h4> */}
               <motion.blockquote
                  className="mt-3 border-l-2 dark:border-black pl-6 italic text-center sm:text-justify xl:text-left dark:text-black"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
                >
                  {/* Text without <br /> for smaller screens */}
                  <span className="block sm:hidden">
                    "A passionate computer student from the <strong>Philippines</strong> on a mission to transform people's lives through software development, machine learning, and AI."
                  </span>
                  
                  {/* Text with <br /> for larger screens */}
                  <span className="hidden sm:block">
                    "A passionate computer student from the <strong>Philippines</strong> on a mission to transform <br /> people's lives through software development, machine learning, and AI."
                  </span>
                </motion.blockquote>


                <div className="shimmer-button my-5 flex gap-5">
              {/* <button
                onClick={handleClick}
                className="flex-grow gap-2 inline-flex h-10 min-w-[150px] animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
              >
                <FontAwesomeIcon icon={faPaperPlane} />
                Get In Touch
              </button> */}

                  <button
                    onClick={handleClick}
                    className="flex-grow gap-2 inline-flex h-10 min-w-[150px] animate-shimmer items-center justify-center rounded-md border border-gray-50 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                  >
                    <FontAwesomeIcon icon={faFileArrowDown} />
                    Resume
                  </button>
                </div>



              </div>

              <motion.div
                className="img-div p-5"
                initial={{ opacity: 0 }}
                whileHover={{
                  y: [0, -10, 0], // Bounce effect on hover
                }}
                animate={{ opacity: 1, y: [0, -10, 0] }}
                transition={{ duration: 1, delay: 1, ease: "easeOut" }}
              >
                <img
                  src={Profile}
                  className="w-full max-w-[200px] xl:max-w-[400px] h-auto rounded-full"
                />
              </motion.div>
            </motion.div>
            <TypewriterEffect />

            <div className="footer-div  flex justify-center ">
              <p className="text-[12px] dark:text-black">
                Copyright © 2024 JETHRR. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
