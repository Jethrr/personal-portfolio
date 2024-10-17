import { motion } from "framer-motion";
import Navbar from "@/components/ui/Navbar";
import { Spotlight } from "@/components/ui/Spotlight";
import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";
import CardComponent from "@/components/ui/CardComponent";
import { CardHoverEffectDemo } from "@/components/ui/CardHoverEffectDemo";

interface CardData {
  title: string;
  description: string;
  content: string;
  footerText: string;
  footerIconClass: string;
  githubLink: string;
  imageUrl: string;
}

const cardsData: CardData[] = [
   {
    title: "Nest",
    description:
      "A full stack web link organizing and sharing platform",
    content:
      "A web app  developed to address these issues by providing an automated solution for categorizing, and managing events such as meetings etc, ultimately enhancing productivity and reducing the burden of manual calendar management.",
    footerText: "Django / Tailwind / PostgreSQL",
    footerIconClass: "bg-orange-500",
    githubLink: "https://github.com/Jethrr/TeknoLost",
    imageUrl: "/images/NEST.png",
  },
  // {
  //   title: "TeknoLost App",
  //   description:
  //     "A lost and found mobile application built using Android Studio and Firebase.",
  //   content:
  //     "A convenient lost-and-found app that helps users quickly locate and recover lost items. With features to post lost or found items, browse recent listings, and connect with others nearby, FindIt makes it easy to reunite lost belongings with their owners. Whether it's a misplaced phone, keys, or valuable documents, FindIt simplifies the search process, helping you get back what matters most.",
  //   footerText: "Java / Firebase / Android Studio",
  //   footerIconClass: "bg-orange-500",
  //   githubLink: "https://github.com/Jethrr/TeknoLost",
  //   imageUrl: "/images/teknolost.png",
  // },
 

  {
    title: "Creative Studio Collective",
    description:
      "A website i made for creative artist movement in cebu  built using HTML/CSS/JS.",
    content:
      "A web-based project for Platform Based Development Web. Aims to provide a platform for creative artist to showcase their works and connect with other artists.",
    footerText: "Html / CSS / Javascript / Wordpress",
    footerIconClass: "bg-yellow-500",
    githubLink: "https://github.com/Jethrr/CSIT201Final",
    imageUrl: "/images/csc.png",
  },

  //  {
  //   title: "GymChum Website",
  //   description:
  //     "A gym appoinment/management system built using PHP and MYSQL.",
  //   content:
  //     "A web-based project for information management system 1. Aims to provide a platform for gym owners to manage their gym appointments as well as clients to schedule gym appoinment.",
  //   footerText: "PHP / MySQL / Tailwind",
  //   footerIconClass: "bg-blue-500",
  //   githubLink: "https://github.com/Jethrr/gymchum",
  //   imageUrl: "/images/gymchum.png",
  // },

  // {
  //   title: "Monopoly Clone",
  //   description: "A game clone project build using Java and Swing.",
  //   content:
  //     "A game project for Object Oriented Programming 1. This is a monopoly game clone with modified features.",
  //   footerText: "Java / Swing",
  //   footerIconClass: "bg-orange-500",
  //   githubLink: "https://github.com/Jethrr/MonopolyClone_OOP_G6",
  //   imageUrl: "/images/oop1.jpg",
  // },

  {
    title: "Lersch Grossman Algorithm Visualizer",
    description:
      "A lerch grossman algorithm visualizer built using Java and JavaFX.",
    content:
      "A simple visualizer we made for Object Oriented Programming 2. This aims to provide a visualizer for this specific algorithm using JavaFX for mining Engineers.",
    footerText: "Java / JavaFX",
    footerIconClass: "bg-orange-500",
    githubLink:
      "https://github.com/Dioooooooooooooooo/Lerch-Grossman-Visualization",
    imageUrl: "/images/OOP2.png",
  },
];

const Projects = () => {
  return (
    <div className="relative w-full">
      <GridBackgroundDemo />

      <div className="relative z-10 w-full  text-[#B2B5AD] flex items-center justify-center">
        <Spotlight />
        <div className="home-container h-full w-full  mx-4 xl:mx-60 bg-black dark:bg-white dark:text-black">
          <Navbar />

          <div className="home-contents my-16 px-3">
            <motion.h3
              className="scroll-m-20 text-4xl xl:text-6xl font-bold tracking-tight text-white text-center xl:text-left dark:text-black"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              Featured 
            </motion.h3>

             <motion.h3
              className="ml-20 scroll-m-20 text-4xl xl:text-6xl font-bold tracking-tight text-white text-center xl:text-left dark:text-black"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              Projects 
            </motion.h3>

          
            <motion.div
              className="projects-nav mt-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              {cardsData.map((card, index) => (
                <motion.div
                  key={index}
                  className="card-animation"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 1,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <CardComponent
                    title={card.title}
                    description={card.description}
                    content={card.content}
                    footerText={card.footerText}
                    footerIconClass={card.footerIconClass}
                    githubLink={card.githubLink}
                    imageUrl={card.imageUrl}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* <div className="techstack-nav my-5">
              <motion.h3
                className="scroll-m-20 text-4xl xl:text-6xl font-bold tracking-tight text-white text-center xl:text-left dark:text-black"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
              >
                Technologies
              </motion.h3>

              <div className="tech-nav">
                <CardHoverEffectDemo />
              </div>

              
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
