import { companies } from "../../../contants";
import HeroCTAButton from "../../Buttons/HeroCTAButton";
import HeroCompany from "./HeroCompany";

const HeroSection = () => {
  return (
    <section className="bg-gray-100 dark:bg-slate-800 dark:text-gray-400 rounded-lg w-full flex flex-col sm:flex-row transition-colors delay-150 ease-in">
      <article className="flex-1 flex flex-col gap-20 p-5 md:px-20">
        <div className="flex flex-col gap-2 md:gap-4">
          <h1 className="text-4xl md:text-8xl capitalize font-bold">
            DevConnect
          </h1>
          <p className="text-base font-normal text-green-900">
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
          <h2 className="text-gray-500 font-medium text-lg">
            Working with the best
          </h2>
          {/* socials */}
          <div className="flex gap-8">
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
