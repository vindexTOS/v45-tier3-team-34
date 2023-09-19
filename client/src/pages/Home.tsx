import HeroSection from "../components/Home/Hero/HeroSection";
import FindClient from "../components/Home/FindClient/FindClient";
import Categories from "../components/Home/CategoryBrowse/Categories";
import EnterpriseSuite from "../components/Home/Enterprise/EnterpriseSuite";
import WhyUs from "../components/Home/WhyUs/WhyUs";
import FindTalent from "../components/Home/FindTalent/FindTalent";
import ParallaxText from "../components/Home/FramerMotion/ParallaxText";
import Team from "../components/MainMenuPages/WhyDevConnectPage/Team";

const Home = () => {
  return (
    <div className="transition-colors delay-100 space-y-24 my-10">
      <ParallaxText />
      {/* Hero */}
      <HeroSection />
      {/* browse by category */}
      <Categories />
      {/* enterprise suite */}
      <EnterpriseSuite />
      {/* find client */}
      <FindClient />
      {/* why us */}
      <WhyUs />
      {/* find talent */}
      <FindTalent />
      <Team />
    </div>
  );
};

export default Home;
