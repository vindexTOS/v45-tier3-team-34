import { Link } from "react-router-dom";
import HeroSection from "../components/Home/Hero/HeroSection";
import Footer from "../components/Home/Footer";
import FindClient from "../components/Home/FindClient/FindClient";
import Categories from "../components/Home/CategoryBrowse/Categories";
import EnterpriseSuite from "../components/Home/Enterprise/EnterpriseSuite";
import ThemeToggle from "../components/Buttons/ThemeTogglerBtn";

const Home = () => {
  return (
    <div className="">
      {/* NavBr */}
      <Link
        className="bg-red-500 text-white hover:bg-red-600 rounded-[5px] p-2"
        to="/login"
      >
        Login
      </Link>
      <ThemeToggle />
      {/* Hero */}
      <HeroSection />
      {/* brwose by category */}
      <Categories />
      {/* About */}

      <p className="p-2 text-4xl">About</p>
      {/* Info */}
      <p className="p-2 text-4xl">More Info</p>
      {/* enterprise suite */}
      <EnterpriseSuite />
      {/* find client */}
      <FindClient />
      {/* Contact */}
      <p className="p-2 text-4xl">Contact</p>
    </div>
  );
};

export default Home;
