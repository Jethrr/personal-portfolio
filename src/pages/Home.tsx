import Navbar from "@/components/ui/Navbar";
import Profile from "../assets/images/Profile.jpg";
const Home = () => {
  return (
    <div className="bg-[#262626] w-full h-screen text-[#B2B5AD] flex items-center justify-center ">
      <div className="home-container rounded-xl h-5/6 w-9/12 shadow-xl bg-black">
        <Navbar />
        <div className="home-containts">
          <div className="header-nav flex items-center justify-center">
            <img src={Profile} className="w-[100px] " />
            <h1 className="font-bold text-3xl">Jether Omictin</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
