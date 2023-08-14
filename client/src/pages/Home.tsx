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
    </div>
  );
};

export default Home;
