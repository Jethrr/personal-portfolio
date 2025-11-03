import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";
import { IoSunny, IoMoon } from "react-icons/io5";
import { HiMenu } from "react-icons/hi";
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
      className={`fixed top-0 left-0 right-0 mt-2 md:mt-5 z-50 px-4 md:px-1 max-w-[1200px] mx-auto`}
    >
      {/* Main Navigation */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className={`dark:bg-white rounded-2xl ${
          scrolled
            ? "bg-black dark:lg:bg-white lg:border lg:rounded-2xl"
            : "bg-transparent dark:bg-transparent"
        }`}
      >
        <nav className="px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 justify-center">
            <img
              className="mt-1"
              src="/JETHRR.png"
              alt="logo"
              width={40}
              height={50}
            />
            <Link to="/home">
              <p className="font-bold dark:text-black text-white text-xl md:text-2xl hover:cursor-pointer transition hover:scale-105">
                jethrr
              </p>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="gap-3 hidden md:flex items-center ">
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
                <ScrollLink to="workflows" smooth={true} duration={500}>
                  Workflows
                </ScrollLink>
              </Button>
            </li>
            <li>
              <Button className="text-white text-md dark:text-black relative hover:before:scale-x-100 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-current before:scale-x-0 before:origin-left before:transition-transform before:duration-300">
                <ScrollLink to="skills" smooth={true} duration={500}>
                  Skills
                </ScrollLink>
              </Button>
            </li>
            <li>
              <Button className="text-white text-md dark:text-black relative hover:before:scale-x-100 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-current before:scale-x-0 before:origin-left before:transition-transform before:duration-300">
                <ScrollLink to="certificates" smooth={true} duration={500}>
                  Certificates
                </ScrollLink>
              </Button>
            </li>
            <li>
              <Button className="text-white text-md dark:text-black relative hover:before:scale-x-100 before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-[2px] before:bg-current before:scale-x-0 before:origin-left before:transition-transform before:duration-300">
                <ScrollLink to="contacts" smooth={true} duration={500}>
                  Contact
                </ScrollLink>
              </Button>
            </li>
          </ul>

          {/* Mobile Menu & Dark Mode */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <Button onClick={toggleDarkMode} className="hidden md:block">
              {isDarkMode ? (
                <IoMoon size={24} className="text-current dark:text-black" />
              ) : (
                <IoSunny size={24} className="text-current dark:text-black" />
              )}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              onClick={toggleSidebar}
              className="md:hidden text-white dark:text-black "
            >
              <HiMenu size={24} />
            </Button>

           
          </div>
        </nav>
      </motion.div>

      {/* Mobile Sidebar */}
      <motion.div
        initial={false}
        animate={{
          x: isSidebarOpen ? 0 : -320,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className={`fixed left-0 top-0 h-full w-80 bg-black dark:bg-white z-40 shadow-2xl md:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Sidebar Header */}
          <div className="flex items-center justify-between p-4 border-b border-white/10 dark:border-black/10">
            <div className="flex items-center gap-2">
              <img
                src="/JETHRR.png"
                alt="logo"
                width={30}
                height={30}
              />
              <p className="font-bold text-white dark:text-black text-xl">
                jethrr
              </p>
            </div>
            <button
              onClick={toggleSidebar}
              className="text-white dark:text-black hover:text-gray-300 dark:hover:text-gray-700"
            >
              <AiOutlineClose size={24} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 p-4 space-y-2">
            <ScrollLink to="about" smooth={true} duration={500} onClick={toggleSidebar}>
              <Button className="w-full justify-start text-left text-white dark:text-black hover:bg-white/10 dark:hover:bg-black/10">
                About
              </Button>
            </ScrollLink>
            <ScrollLink to="projects" smooth={true} duration={500} onClick={toggleSidebar}>
              <Button className="w-full justify-start text-left text-white dark:text-black hover:bg-white/10 dark:hover:bg-black/10">
                Projects
              </Button>
            </ScrollLink>
            <ScrollLink to="workflows" smooth={true} duration={500} onClick={toggleSidebar}>
              <Button className="w-full justify-start text-left text-white dark:text-black hover:bg-white/10 dark:hover:bg-black/10">
                Workflows
              </Button>
            </ScrollLink>
            <ScrollLink to="skills" smooth={true} duration={500} onClick={toggleSidebar}>
              <Button className="w-full justify-start text-left text-white dark:text-black hover:bg-white/10 dark:hover:bg-black/10">
                Skills
              </Button>
            </ScrollLink>
            <ScrollLink to="certificates" smooth={true} duration={500} onClick={toggleSidebar}>
              <Button className="w-full justify-start text-left text-white dark:text-black hover:bg-white/10 dark:hover:bg-black/10">
                Certificates
              </Button>
            </ScrollLink>
            <ScrollLink to="contacts" smooth={true} duration={500} onClick={toggleSidebar}>
              <Button className="w-full justify-start text-left text-white dark:text-black hover:bg-white/10 dark:hover:bg-black/10">
                Contact
              </Button>
            </ScrollLink>
           
            <Button onClick={toggleDarkMode} className="w-full  text-white dark:text-black hover:bg-white/10 dark:hover:bg-black/10">
              {isDarkMode ? (
                 <Button className="w-full justify-start text-left text-white dark:text-black ">
                 Dark Mode
               </Button>
              ) : (
                <Button className="w-full justify-start text-left text-white dark:text-blac">
                 Light Mode
               </Button>
              )}
            </Button>
          </nav>

          {/* Sidebar Footer */}
          <div className="p-4 border-t border-white/10 dark:border-black/10">
            <p className="text-sm text-white/60 dark:text-black/60 text-center">
              © 2024 jethrr
            </p>
          </div>
        </div>
      </motion.div>

      {/* Backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
};

export default Navbar;
