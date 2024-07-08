import { useState } from "react";
import HeroCircles from "./HeroCircles";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="nav-div relative">
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0  bg-opacity-50 backdrop-filter backdrop-blur-sm"
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
        <ul className="pt-10 space-y-5">
          <li className="w-full hover:bg-gray-400">
            <Button variant="secondary" className="text-white text-md">
              <Link to="/home">Home</Link>
            </Button>
          </li>
          <li className="w-full hover:bg-gray-400">
            <Button variant="secondary" className="text-white text-md">
              <Link to="/projects">Projects</Link>
            </Button>
          </li>
          <li className="w-full hover:bg-gray-400">
            <Button variant="secondary" className="text-white text-md">
              <Link to="/contacts">Contacts</Link>
            </Button>
          </li>
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
            <Button variant="link" className="text-white text-md">
              <Link to="/home">Home</Link>
            </Button>
          </li>
          <li>
            <Button variant="link" className="text-white text-md">
              <Link to="/projects">Projects</Link>
            </Button>
          </li>
          <li>
            <Button variant="link" className="text-white text-md">
              <Link to="/contacts">Contacts</Link>
            </Button>
          </li>
        </ul>

        <div className="icon">
          <p>view</p>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
