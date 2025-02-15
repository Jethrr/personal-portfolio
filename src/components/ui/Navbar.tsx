import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { IoSunny, IoMoon } from "react-icons/io5";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <div
      className={` hidden  md:block fixed top-0 left-0 right-0 mt-5 z-50  md:px-1  max-w-[1200px] mx-auto ${
        scrolled
          ? "bg-black  dark:lg:bg-white lg:border lg:rounded-2xl"
          : "bg-transparent"
      }`}
    >
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-30 backdrop-filter backdrop-blur-[1px] z-40"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`sidebar flex-col fixed left-0 top-0 w-[50%] md:w-64 border-r border-gray-300 h-full transform transition-transform z-50 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } ${!isDarkMode ? "bg-[#09090B] text-white" : "bg-white text-black"}`}
      >
        <button
          className={`absolute top-2 right-2 md:hidden ${
            !isDarkMode ? "text-white" : "text-black"
          }`}
          onClick={toggleSidebar}
        >
          <AiOutlineClose size={24} />
        </button>
        <ul className="pt-10 space-y-5 ">
          <Link to="/home">
            <li
              className={`w-full hover:bg-gray-400 my-3 ${
                !isDarkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"
              }`}
            >
              <Button
                variant="secondary"
                className={`text-md ${
                  !isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Home
              </Button>
            </li>
          </Link>

          <Link to="/about">
            <li
              className={`w-full hover:bg-gray-400 my-3 ${
                !isDarkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"
              }`}
            >
              <Button
                variant="secondary"
                className={`text-md ${
                  !isDarkMode ? "text-white" : "text-black"
                }`}
              >
                About
              </Button>
            </li>
          </Link>

          <Link to="/projects">
            <li
              className={`w-full hover:bg-gray-400 my-3 ${
                !isDarkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"
              }`}
            >
              <Button
                variant="secondary"
                className={`text-md ${
                  !isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Projects
              </Button>
            </li>
          </Link>

          <Link to="/contacts">
            <li
              className={`w-full hover:bg-gray-400 my-3 ${
                !isDarkMode ? "hover:bg-gray-600" : "hover:bg-gray-200"
              }`}
            >
              <Button
                variant="secondary"
                className={`text-md ${
                  !isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Contacts
              </Button>
            </li>
          </Link>
        </ul>
      </div>

      {/* Main Navigation */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className=" dark:bg-white rounded-2xl"
      >
        <nav className="  p-3 flex items-center justify-between">
          <div className="dots hidden md:flex items-center gap-2 justify-center">
            <img
              className="mt-1"
              src="/JETHRR.png"
              alt="logo"
              width={40}
              height={50}
            />
            <Link to="/home">
              <p className="font-bold dark:text-black text-white text-2xl hover:cursor-pointer transition hover:scale-105">
                jethrr
              </p>
            </Link>
          </div>
          <ul className="gap-5 hidden md:flex">
            <li>
              <Button className="text-white text-md dark:text-black relative hover:before:scale-x-100 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-current before:scale-x-0 before:origin-left before:transition-transform before:duration-300">
                <ScrollLink to="about" smooth={true} duration={500}>
                  About
                </ScrollLink>
              </Button>
            </li>
            <li>
              <Button className="text-white text-md dark:text-black relative hover:before:scale-x-100 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-current before:scale-x-0 before:origin-left before:transition-transform before:duration-300">
                <ScrollLink to="projects" smooth={true} duration={500}>
                  Projects
                </ScrollLink>
              </Button>
            </li>
            <li>
              <Button className="text-white text-md dark:text-black relative hover:before:scale-x-100 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-current before:scale-x-0 before:origin-left before:transition-transform before:duration-300">
                <ScrollLink to="contacts" smooth={true} duration={500}>
                  Contacts
                </ScrollLink>
              </Button>
            </li>
          </ul>
          <Button onClick={toggleDarkMode}>
            {isDarkMode ? (
              <IoMoon size={24} className="text-current dark:text-black" />
            ) : (
              <IoSunny size={24} className="text-current dark:text-black" />
            )}
          </Button>
        </nav>
      </motion.div>
    </div>
  );
};

export default Navbar;
