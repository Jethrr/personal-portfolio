import HeroCircles from "./HeroCircles";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className=" p-3 flex items-center  justify-between mt-10">
      <HeroCircles />
      <ul className="flex gap-5">
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
  );
};

export default Navbar;
