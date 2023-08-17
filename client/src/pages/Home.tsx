import HeroSection from "../components/Home/Hero/HeroSection";
import FindClient from "../components/Home/FindClient/FindClient";
import Categories from "../components/Home/CategoryBrowse/Categories";
import EnterpriseSuite from "../components/Home/Enterprise/EnterpriseSuite";

const Home = () => {
  return (
    <div className="sm:px-1 md:px-8 md:py-2 bg-gray-100 dark:bg-gray-900">
      {/* NavBr */}

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
