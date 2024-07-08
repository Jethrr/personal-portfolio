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
    title: "TeknoLost App",
    description:
      "A lost and found mobile application built using Android Studio and Firebase.",
    content:
      "This is my final Project for CSIT284 platform based development. Implemented features include: user authentication, lost and found item posting.",
    footerText: "Java / Firebase",
    footerIconClass: "bg-orange-500",
    githubLink: "https://github.com/Jethrr?tab=repositories",
    imageUrl: "src/assets/images/teknolost.png",
  },
  {
    title: "GymChum Website",
    description:
      "A gym appoinment/management system built using PHP and MYSQL.",
    content:
      "A web-based project for information management system 1. Aims to provide a platform for gym owners to manage their gym appointments as well as clients.",
    footerText: "PHP / MySQL",
    footerIconClass: "bg-blue-500",
    githubLink: "https://github.com/Jethrr/gymchum",
    imageUrl: "src/assets/images/gymchum.png",
  },

  {
    title: "Creative Studio Collective",
    description:
      "A website i made for creative artist movement in cebu  built using HTML/CSS/JS.",
    content:
      "A web-based project for Platform Based Development Web. Aims to provide a platform for creative artist to showcase their works and connect with other artists.",
    footerText: "HTML / CSS / JS",
    footerIconClass: "bg-yellow-500",
    githubLink: "https://github.com/Jethrr/CSIT201Final",
    imageUrl: "src/assets/images/csc.png",
  },

  {
    title: "Monopoly Clone",
    description: "A game clone project build using Java and Swing.",
    content:
      "A game project for Object Oriented Programming 1. This is a monopoly game clone with modified features.",
    footerText: "Java / Swing",
    footerIconClass: "bg-orange-500",
    githubLink: "https://github.com/Jethrr/MonopolyClone_OOP_G6",
    imageUrl: "src/assets/images/csc.png",
  },

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
    imageUrl: "src/assets/images/csc.png",
  },
];

const Home = () => {
  return (
    <div className="relative w-full">
      <GridBackgroundDemo />

      <div className="relative z-10 w-full  text-[#B2B5AD] flex items-center justify-center">
        <Spotlight />
        <div className="home-container h-full w-full shadow-xl mx-4 xl:mx-60 bg-black">
          <Navbar />

          <div className="home-contents my-16 px-3 ">
            <h3 className="scroll-m-20 text-4xl xl:text-6xl font-bold tracking-tight text-white text-center xl:text-left">
              Projects
            </h3>

            <div className="projects-nav mt-10">
              {cardsData.map((card, index) => (
                <CardComponent
                  key={index}
                  title={card.title}
                  description={card.description}
                  content={card.content}
                  footerText={card.footerText}
                  footerIconClass={card.footerIconClass}
                  githubLink={card.githubLink}
                  imageUrl={card.imageUrl}
                />
              ))}
            </div>

            <div className="techstack-nav my-10">
              <h3 className="scroll-m-20 text-4xl xl:text-6xl font-bold tracking-tight text-white text-center xl:text-left">
                Technologies
              </h3>

              <div className="tech-nav">
                <CardHoverEffectDemo />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
