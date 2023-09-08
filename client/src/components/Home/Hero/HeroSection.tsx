import { companies } from "../../../contants";
import HeroCompany from "./HeroCompany";
import Lottie from "lottie-react";
import animationData from "../../../../src/assets/lottie/animation_llpgw5p0.json";
import { buttonVariants } from "../../../@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="rounded-lg w-full flex flex-col sm:flex-row">
      <article className="flex-1 flex flex-col items-start justify-center gap-20 p-5 lg:px-20">
        <div className="flex flex-col gap-2 lg:gap-4">
          <h1 className="text-[2.7rem] font-bold text-primary dark:text-primary">
            DevConnect
          </h1>
          <p className="text-sm text-muted dark:text-muted leading-tight">
            We connect junior developers with{" "}
            <br />
            low-paid real-world projects
          </p>

          {/* Buttons */}
          <div className="flex gap-x-5 gap-y-2 sm:gap-5 w-full sm:w-max flex-wrap mt-5">
            <Link
              className={buttonVariants({
                variant: "default",
              })}
              to={"/register"}
            >
              Get Started
            </Link>
            <Link
              className={buttonVariants({
                variant: "secondary",
              })}
              to={"#"}
            >
              View Projects
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-sm text-muted dark:text-muted">
            Working with the best
          </h2>
          {/* socials */}
          <div className="flex gap-8 text-muted dark:text-muted">
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
      <article className="flex-1 flex items-center justify-center">
        <Lottie
          className="w-[80%] h-auto"
          animationData={animationData}
        />
      </article>
    </section>
  );
};

export default HeroSection;
