"use client";
import { TypewriterEffectSmooth } from "./typewriter-effect";
import { motion } from "framer-motion";

export function Typewriter() {
  const words = [
    {
      text: "Send",
    },
    {
      text: "me",
    },
    {
      text: "a",
    },

    {
      text: "Message!",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[10rem]">
      <TypewriterEffectSmooth words={words} />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <p className="text-white dark:text-black text-xs sm:text-base text-center">
          Got a project in mind? Lets get in touch! Just fill out the form below
          <br />
          and I'll get back to you as soon as possible.
        </p>
      </motion.div>
    </div>
  );
}
