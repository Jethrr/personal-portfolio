import HeroCircles from "./HeroCircles";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" p-3 flex items-center border-b border-opacity-5 justify-between">
      <HeroCircles />
      <ul className="flex gap-5">
        <li>
          <Button variant="link" className="text-[#B2B5AD]">
            <Link to="/home">Home</Link>
          </Button>
        </li>

        <li>
          <Button variant="link" className="text-[#B2B5AD]">
            <Link to="/projects">Projects</Link>
          </Button>
        </li>
        <li>
          <Button variant="link" className="text-[#B2B5AD]">
            <Link to="/contacts">Contacts</Link>
          </Button>
        </li>
      </ul>
      <div className="icon">
        <p>view</p>
      </div>
    </nav>
  );
};

export default Navbar;
