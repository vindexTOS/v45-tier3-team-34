import { Link } from "react-router-dom";
import { categories_temp } from "../../../contants";
import CategoryCard from "./CategoryCard";
import { buttonVariants } from "../../../Shadcn/components/ui/button";

const Categories = () => {
  return (
    <section className="bg-white/30 dark:bg-gray-900 border border-gray-50 dark:border-green-900 flex flex-col gap-y-4 sm:gap-y-12 p-4 md:p-10 rounded-lg">
      <article className="flex flex-col gap-y-0">
        <h1 className="text-[1.5rem] font-semibold text-primary dark:text-primary">
          Browse projects by category
        </h1>
        <p className="text-[1rem] font-light text-muted dark:text-muted">
          Looking for work? {/* links to jobs */}
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
    </section>
  );
};

export default Categories;
