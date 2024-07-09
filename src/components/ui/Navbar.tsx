import { useState, useEffect } from "react";
import HeroCircles from "./HeroCircles";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoSunny, IoMoon } from "react-icons/io5";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
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
    <div className="nav-div relative">
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-30 backdrop-filter backdrop-blur-[1px]"
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
        <ul className="pt-10 space-y-5">
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
        className="relative z-10"
      >
        <nav className="p-3 flex items-center justify-between mt-10">
          <div
            className="menu cursor-pointer block md:hidden"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? (
              <Button variant="outline">
                <AiOutlineClose
                  size={24}
                  className="text-current dark:text-black"
                />
              </Button>
            ) : (
              <AiOutlineMenu
                size={24}
                className="text-current dark:text-black"
              />
            )}
          </div>

          <div className="dots hidden md:block">
            <HeroCircles />
          </div>

          <ul className="gap-5 hidden md:flex">
            <li>
              <Button
                variant="link"
                className="text-white text-md dark:text-black"
              >
                <Link to="/home">Home</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                className="text-white text-md dark:text-black"
              >
                <Link to="/projects">Projects</Link>
              </Button>
            </li>
            <li>
              <Button
                variant="link"
                className="text-white text-md dark:text-black"
              >
                <Link to="/contacts">Contacts</Link>
              </Button>
            </li>
          </ul>

          <div className="icon">
            <Button onClick={toggleDarkMode}>
              {isDarkMode ? (
                <IoMoon size={24} className="text-current dark:text-black" />
              ) : (
                <IoSunny size={24} className="text-current dark:text-black" />
              )}
            </Button>
          </div>
        </nav>
      </motion.div>
    </div>
  );
};

export default Navbar;
