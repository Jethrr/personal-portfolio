import React from "react";

const HeroCircles: React.FC = () => {
  return (
    <div className="flex justify-between items-center w-16">
      <div className="w-3 h-3 border border-white dark:border-black rounded-full bg-transparent"></div>
      <div className="w-3 h-3 border border-white  dark:border-black  rounded-full bg-transparent"></div>
      <div className="w-3 h-3 border border-white  dark:border-black rounded-full bg-transparent"></div>
    </div>
  );
};

export default HeroCircles;
