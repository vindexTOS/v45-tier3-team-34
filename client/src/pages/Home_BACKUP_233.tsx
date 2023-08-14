<<<<<<< HEAD
import { Link } from 'react-router-dom'
import HeroSection from '../components/Hero/HeroSection'

const Home = () => {
  return (
    <div className="flex items-center flex-col  gap-10 justify-center py-10">
      <Link
        className="bg-red-500 text-white hover:bg-red-600 rounded-[5px] p-2"
        to="/login"
      >
        Login
      </Link>
      <h1 className="bg-blue-400 text-white font-bold px-10 py-2">
        HELLO WORLD
      </h1>
      {/* Hero section */}
      <HeroSection />
=======
import Hero from "../components/Home/Hero";

const Home = () => {
  return (
    <div>
      {/* NavBr */}
      <a href="/login">Login</a>
      {/* Hero */}
      <Hero />
      {/* About */}
      <p className="p-2 text-4xl">About</p>
      {/* Info */}
      <p className="p-2 text-4xl">More Info</p>
      {/* Contact */}
      <p className="p-2 text-4xl">Contact</p>
>>>>>>> 5b971a76bc03e15d3379519be98fefe9b213629d
    </div>
  );
};

export default Home;
