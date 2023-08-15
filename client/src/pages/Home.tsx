import { Link } from "react-router-dom";
import HeroSection from "../components/Home/Hero/HeroSection";

const Home = () => {
  return (
    <div>
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
      {/* Contact */}
      <p className="p-2 text-4xl">Contact</p>
      {/* Footer */}
      <p className="p-2 text-4xl">Footer</p>
    </div>
  );
};

export default Home;
