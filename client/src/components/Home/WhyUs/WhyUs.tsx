import { MdStars } from "react-icons/md";
import { HiStar } from "react-icons/hi";
import { BsFillAwardFill } from "react-icons/bs";
import { why_us } from "../../../contants";

const WhyUs = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-between gap-x-3 sm:mt-8 sm:mb-4">
      <article className="p-8 rounded-b-none lg:rounded-b-lg rounded-lg flex gap-2 flex-col ">
        <h1 className="text-[3rem] leading-tight font-bold text-tersiary dark:text-primary font-header">
          Why businesses turn to DevConnect
        </h1>
        <div className="flex flex-col gap-y-2 text-muted dark:text-muted ">
          {why_us.map(
            ({ title, description }) => (
              <div key={title}>
                <h1 className="text-[1.4rem] font-semibold flex gap-2 items-center text-primary dark:text-primary">
                  <span className="text-xl">
                    <MdStars />
                  </span>

                  {title}
                </h1>
                <p className="ml-7 md:max-w-md lg:max-w-lg text-[1rem] font-light">
                  {description}
                </p>
              </div>
            )
          )}
        </div>
      </article>

      <article className="flex items-end p-8 text-white bg-tersiary rounded-xl">
        <div className="space-y-3">
          <h1 className="text-3xl font-semibold font-header">
            We’re the world’s work marketplace
          </h1>
          {/* others features */}
          <div className="">
            <h2 className="flex items-center text-xl font-normal gap-2">
              <span className="text-4xl">
                <HiStar />
              </span>
              4.4/5
            </h2>
            <p className="font-thin ml-12">
              Company rate and reviews
            </p>
          </div>
          <div className="">
            <h2 className="flex items-center text-xl font-normal gap-2">
              <span className="text-3xl">
                <BsFillAwardFill />
              </span>
              Award winner
            </h2>
            <p className="font-thin ml-12">
              Chingu Voyage 45 - August 2023
            </p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default WhyUs;
