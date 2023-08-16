import { Link } from "react-router-dom";
import HeroSection from "../components/Home/Hero/HeroSection";
import Footer from "../components/Home/Footer";
import FindClient from "../components/Home/FindClient/FindClient";

const Home = () => {
  return (
    <div className="sm:px-1 md:px-8 md:py-2">
      {/* NavBr */}
      <Link
        className="bg-red-500 text-white hover:bg-red-600 rounded-[5px] p-2"
        to="/login"
      >
        Login
      </Link>
      {/* Hero */}
      <HeroSection />
      {/* About */}
      <p className="p-2 text-4xl">About</p>
      {/* Info */}
      <p className="p-2 text-4xl">More Info</p>
      {/* find client */}
      <FindClient/>
      {/* Contact */}
      <p className="p-2 text-4xl">Contact</p>
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default Home;
