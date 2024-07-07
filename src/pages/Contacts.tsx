import Navbar from "@/components/ui/Navbar";
import { Spotlight } from "@/components/ui/Spotlight";
const Contacts = () => {
  return (
    <div className="bg-black w-full h-screen text-[#B2B5AD] flex items-center justify-center ">
      <Spotlight />
      <div className="home-container h-full w-full shadow-xl  mx-60">
        <Navbar />
      </div>
    </div>
  );
};

export default Contacts;
