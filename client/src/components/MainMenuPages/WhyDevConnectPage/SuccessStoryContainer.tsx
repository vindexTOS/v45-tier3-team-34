import SuccessStoriesCard from "./SuccessStoriesCard";
import { SuccessStoryDummy } from "./SuccessStoryDummy";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SuccessStoriesContainer = ({
  id,
}: {
  id: string;
  //projects?: any[]
}) => {
  //fetch here if id given,
  //if not (projects parsed ) , no need to fetch,use directly;

  //dummy data
  const projects = SuccessStoryDummy;

  // may add same conditional stuff here if no pojects ???

  //if projects ??...
  return (
    <div>
      <section className="mb-10">
        <h1 className="text-2xl md:text-4xl font-semibold text-green-800 dark:text-green-500">
          Browse our Success Stories
        </h1>
        <p className="text-green-950 dark:text-white text-sm">
          Currently{" "}
          <span className="text-green-600 dark:text-green-500">
            {projects.length} Stories
          </span>{" "}
          to read
        </p>
      </section>
      {/* projects listing */}
      <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 w-[80%] mx-auto">
        {projects.map((project, i) => (
          <SuccessStoriesCard
            data={project}
            key={`${project.title}${i}`}
          />
        ))}
      </section>
    </div>
  );
};

export default SuccessStoriesContainer;
