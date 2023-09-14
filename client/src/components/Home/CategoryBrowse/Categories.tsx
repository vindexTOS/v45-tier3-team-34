import { Link } from "react-router-dom";
import { categories_temp } from "../../../contants";
import CategoryCard from "./CategoryCard";
import { buttonVariants } from "../../../Shadcn/components/ui/button";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";

const Categories = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [5, 0],
    [1.2, 1]
  );

  const x = useTransform(
    scrollYProgress,
    [4, 2],
    ["-50%", "0"]
  );

  return (
    <motion.section
      style={{ x, scale }}
      ref={targetRef}
      className="bg-white/30 dark:bg-gray-900 border border-gray-50 dark:border-green-900 flex flex-col gap-y-4 sm:gap-y-12 p-4 md:p-10 rounded-lg h-[200vh] w-full"
    >
      <div className="sticky top-[20vh]">
        <article className="flex flex-col gap-y-0">
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
        <article className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-between mb-5">
          {categories_temp.map(
            ({ title, rating, skills }) => (
              <CategoryCard
                //have to be changed

                link={`/projects/${title}`}
                key={title}
                rating={rating}
                skills={skills}
                title={title}
              />
            )
          )}
        </article>
      </div>
    </motion.section>
  );
};

export default Categories;
