"use client";
import { TypewriterEffectSmooth } from "./typewriter-effect";
export function TypewriterEffect() {
  const words = [
    {
      text: "Build",
    },
    {
      text: "awesome",
    },
    {
      text: "apps",
    },
    {
      text: "with",
    },
    {
      text: "Me.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[25rem] mt-20 ">
      <p className="text-white dark:text-neutral-200 text-xs sm:text-base  ">
        Got a project in mind or just want to chat?
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          jethomictin@gmail.com
        </button>
      </div>
    </div>
  );
}
