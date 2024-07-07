import Navbar from "@/components/ui/Navbar";
import Profile from "../assets/images/Profile.jpg";
import { Spotlight } from "@/components/ui/Spotlight";
import { GridBackgroundDemo } from "@/components/ui/GridBackgroundDemo";

import { TypewriterEffect } from "@/components/ui/TypewriterEffect";

const Home = () => {
  return (
    <div className="relative h-screen w-full">
      <GridBackgroundDemo />
      <div className="relative z-10  w-full h-screen text-[#B2B5AD] flex items-center justify-center">
        <Spotlight />
        <div className="home-container h-full w-full shadow-xl mx-60">
          <Navbar />
          <div className="home-contents">
            <div className="header-nav flex items-center justify-center p-5">
              <div className="heading-texts w-full">
                <h3 className="scroll-m-20 text-6xl font-bold tracking-tight text-white">
                  Jether Omictin
                </h3>
                <h4 className="scroll-m-20 text-2xl font-semibold tracking-tight text-white">
                  Computer Science Student
                </h4>

                <blockquote className="mt-6 border-l-2 pl-6 italic">
                  "Hi, I am a Computer Science student from Cebu Institute Of
                  Technology University. <br /> Aspiring to be a Full Stack
                  Developer."
                </blockquote>
              </div>
              <div className="img-div p-5">
                <img src={Profile} className="w-[400px] rounded-full" />
              </div>
            </div>

            <TypewriterEffect />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
