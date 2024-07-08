"use client";
import { TypewriterEffectSmooth } from "./typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const facebook = (
  <FontAwesomeIcon
    icon={faFacebook}
    size="2xl"
    className="text-current dark:text-black"
  />
);
const github = (
  <FontAwesomeIcon
    icon={faGithub}
    size="2xl"
    className="text-current dark:text-black"
  />
);
const instagram = (
  <FontAwesomeIcon
    icon={faInstagram}
    size="2xl"
    className="text-current dark:text-black"
  />
);

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
    <div className="flex flex-col items-center justify-center h-[20rem] lg:mt-20 ">
      <p className="text-white dark:text-black text-xs sm:text-base mt-[-10]">
        Got a project in mind or just want to chat?
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <div className="social-media-navs">
          <div className="nav-links">
            <ul className="flex items-center justify-center gap-5">
              <li>
                <a href="https://www.facebook.com/profile.php?id=100094149589311">
                  {facebook}
                </a>
              </li>

              <li>
                <a href="https://github.com/Jethrr">{github}</a>
              </li>

              <li>
                <a href="https://www.instagram.com/jethvrdio/">{instagram}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
