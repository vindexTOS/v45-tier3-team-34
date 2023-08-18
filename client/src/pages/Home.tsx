import HeroSection from "../components/Home/Hero/HeroSection";
import FindClient from "../components/Home/FindClient/FindClient";
import Categories from "../components/Home/CategoryBrowse/Categories";
import EnterpriseSuite from "../components/Home/Enterprise/EnterpriseSuite";

const Home = () => {
  return (
    <div className="">
      {/* NavBr */}

      {/* Hero */}
      <HeroSection />
      {/* brwose by category */}
      <Categories />
      {/* enterprise suite */}
      <EnterpriseSuite />
      {/* find client */}
      <FindClient />
    </div>
  );
};

export default Home;
