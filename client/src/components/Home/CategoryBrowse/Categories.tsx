import { Link } from "react-router-dom";
import { categories_temp } from "../../../contants";
import CategoryCard from "./CategoryCard";
import { buttonVariants } from "../../../Shadcn/components/ui/button";
import { useRef } from "react";
import CatFramer from "./CatFramer";
import { motion } from "framer-motion";

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
        {/* <article className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-between mb-5">
          {categories_temp.map(
            ({ title, rating, skills }) => (
              <CategoryCard
                //have to be changed

                key={title}
                rating={rating}
                skills={skills}
                title={title}
              />
            )
          )}
        </article> */}

        <CatFramer />
      </div>
    </section>
  );
};

export default Categories;
