import { companies } from "../../../contants";
import HeroCTAButton from "../../Buttons/HeroCTAButton";
import HeroCompany from "./HeroCompany";

const HeroSection = () => {
  return (
    <section className="bg-gray-100 dark:bg-slate-900 rounded-lg w-full flex flex-col sm:flex-row  transition-all duration-500 delay-100 ease-in-out mt-24">
      <article className="flex-1 flex flex-col items-start justify-center gap-20 p-5 lg:px-20">
        <div className="flex flex-col gap-2 lg:gap-4">
          <h1 className="text-3xl lg:text-6xl capitalize font-bold text-slate-800 dark:text-slate-300">
            DevConnect
          </h1>
          <p className="text-base font-normal text-green-900 dark:text-slate-400">
            We connect junior developers with{" "}
            <br />
            low-paid real-world projects.
          </p>

          {/* actions */}
          <div className="flex gap-x-10 gap-y-2 sm:gap-14 w-full sm:w-max flex-wrap mt-5">
            <HeroCTAButton
              title="Hire developers"
              color="red"
            />
            <HeroCTAButton
              title="Explore services"
              color="white"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-base font-normal text-green-900 dark:text-slate-400">
            Working with the best
          </h2>
          {/* socials */}
          <div className="flex gap-8 text-green-900 dark:text-slate-400">
            {companies.map(({ name, icon }) => (
              <HeroCompany
                key={name}
                title={name}
                icon={icon}
              />
            ))}
          </div>
        </div>
      </article>
      {/* Image section */}
      <article className="flex-1">
        <img
          className=""
          src="assets/img/hero-image.svg"
          alt="hero"
        />
      </article>
    </section>
  );
};

export default HeroSection;
