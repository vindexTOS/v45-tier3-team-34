import { Link } from "react-router-dom";

import { buttonVariants } from "../../../Shadcn/components/ui/button";
import { useRef } from "react";
import CatFramer from "./CatFramer";

const Categories = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={targetRef}
      className="bg-white/30 dark:bg-gray-900 border border-gray-50 dark:border-green-900 gap-y-2 p-10 rounded-lg h-[80vh]"
    >
      <div className="sticky top-[20vh]">
        <article className="flex flex-col gap-y-2 mb-5">
          <h1 className="text-[1.5rem] font-semibold text-primary dark:text-primary font-title">
            Browse projects by category
          </h1>
          <p className="text-[1rem] font-light text-muted dark:text-muted">
            Looking for work?{" "}
            {/* links to jobs */}
            <Link
              className={buttonVariants({
                variant: "link",
              })}
              to={"#"}
            >
              browse projects
            </Link>
          </p>
        </article>
        {/* categories */}
        <CatFramer />
      </div>
    </section>
  );
};

export default Categories;
