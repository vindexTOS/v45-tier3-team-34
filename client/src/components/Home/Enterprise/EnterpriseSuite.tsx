import { Link } from "react-router-dom";
import {
  LiaPencilRulerSolid,
  LiaToolboxSolid,
  LiaHeadsetSolid,
} from "react-icons/lia";
import { buttonVariants } from "../../../Shadcn/components/ui/button";
const EnterpriseSuite = () => {
  return (
    <section className="flex  text-custom dark:text-primary sm:rounded-lg my-0 sm:my-6 ">
      <article className="flex-1 p-2 sm:p-8 rounded-lg sm:rounded-none  sm:rounded-l-lg">
        <h2 className="font-thin text-muted mb-10 dark:text-primary">
          Real-World Projects
        </h2>
        <h1 className="text-[4rem] text-muted font-bold leading-tight">
          This is How{" "}
          <span className="text-primary dark:text-primary">
            Good Companies Find Good Company.
          </span>
        </h1>
        <p className="text-[1.2rem] mt-4 text-muted">
          Access the top 1% of talent on Upwork,
          and a full suite of hybrid workforce
          management tools. This is how innovation
          works now.
        </p>
        {/* company features */}
        <div className="flex flex-col gap-2 my-4 text-primary dark:text-primary pb-4">
          <p className="flex items-center gap-1 text-medium">
            <span className="text-[1.5rem] pr-2">
              <LiaPencilRulerSolid />
            </span>
            {"  "}
            Access expert talent to fill your
            skill gaps
          </p>
          <p className="flex items-center gap-1 text-medium">
            <span className="text-[1.5rem] pr-2">
              <LiaToolboxSolid />
            </span>
            {"  "}
            Control your workflow: hire, classify
            and pay your talent
          </p>
          <p className="flex items-center gap-1 text-medium">
            <span className="text-[1.5rem] pr-2">
              <LiaHeadsetSolid />
            </span>
            {"  "}
            Partner with Upwork for end-to-end
            support
          </p>
        </div>

        {/* link to more, must be changed (and style too) */}

        <Link
          className={buttonVariants({
            variant: "default",
          })}
          to={"/WhyDevConnect/AboutUs"}
        >
          Learn more
        </Link>
      </article>
      <article className="hidden lg:block bg-[url('/assets/img/enteprise-img.png')] bg-gray-800 min-w-[500px] bg-no-repeat bg-cover rounded-xl"></article>
    </section>
  );
};

export default EnterpriseSuite;
