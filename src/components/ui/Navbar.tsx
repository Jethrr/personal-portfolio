import { useState, useEffect } from "react";
import HeroCircles from "./HeroCircles";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { IoSunny, IoMoon } from "react-icons/io5";

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
          className="fixed inset-0 bg-opacity-50 backdrop-filter backdrop-blur-sm"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`sidebar flex-col fixed left-0 top-0 w-[50%] md:w-64 border-r border-gray-300 h-full bg-[#09090B] transform transition-transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="text-white absolute top-2 right-2 md:hidden"
          onClick={toggleSidebar}
        >
          <AiOutlineClose size={24} />
        </button>
        <ul className="pt-10 space-y-5 ">
          <Link to="/home">
            <li className="w-full hover:bg-gray-400 my-3">
              <Button variant="secondary" className="text-white text-md">
                Home
              </Button>
            </li>
          </Link>

          <Link to="/projects">
            <li className="w-full hover:bg-gray-400 my-3">
              <Button variant="secondary" className="text-white text-md">
                Projects
              </Button>
            </li>
          </Link>

          <Link to="/contacts">
            <li className="w-full hover:bg-gray-400 my-3">
              <Button variant="secondary" className="text-white text-md">
                Contacts
              </Button>
            </li>
          </Link>
        </ul>
      </div>

      {/* Main Navigation */}
      <nav className="p-3 flex items-center justify-between mt-10">
        <div
          className="menu cursor-pointer block md:hidden "
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? (
            <Button variant="outline">
              <AiOutlineClose size={24} />
            </Button>
          ) : (
            <AiOutlineMenu size={24} />
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
    </div>
  );
};

export default Navbar;
