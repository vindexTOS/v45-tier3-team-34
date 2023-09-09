import { Link } from "react-router-dom";
import { buttonVariants } from "../../../Shadcn/components/ui/button";

const FindTalent = () => {
  return (
    <section className="flex ">
      <article className="bg-[url('/assets/img/find_client.png')] flex-1 bg-no-repeat bg-cover bg-center rounded-l-xl"></article>
      {/* right section */}
      <article className="bg-accent dark:bg-accent sm:rounded-r-lg  text-white p-4 sm:p-8 flex flex-col justify-between gap-12 sm:gap-24 min-h-[550px]">
        <div className="flex flex-col gap-4">
          <h3 className="text-[1rem] font-light">
            For Company
          </h3>
          <h1 className="text-[2rem] sm:text-[3rem] font-bold">
            Find a great developer
          </h1>
          <p className="text-[1.2rem] max-w-md">
            Meet clients you’re excited to work
            with and take your career or business
            to new heights.
          </p>
        </div>
        {/* second section */}
        <div>
          {/* list */}
          <div className="flex justify-between flex-wrap gap-4 border-t-2 border-t-blue-500 py-8 h-auto text-sm">
            <p className="max-w-xs">
              Find opportunities for every stage
              of your freelance career
            </p>
            <p className="max-w-xs">
              Control when, where, and how you
              work
            </p>
            <p className="max-w-xs">
              Explore different ways to earn
            </p>
          </div>
          {/* opportunity btn link */}

          <Link
            className={buttonVariants({
              variant: "accent",
            })}
            to={"#"}
          >
            Find Opportunities
          </Link>
        </div>
      </article>
    </section>
  );
};

export default FindTalent;
