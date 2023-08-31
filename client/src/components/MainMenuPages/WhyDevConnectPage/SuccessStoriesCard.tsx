import { ProjectCardType } from "../../../common.types";
import { Link } from "react-router-dom";

const ProjectCard = ({
  data,
}: {
  data: ProjectCardType;
}) => {
  return (
    <article className="flex flex-col">
      {/* ?? a try */}
      <Link to="#">
        {/* ?? this image require more stylings  */}
        <div
          className={`w-full relative h-48 rounded-md bg-[url("${data.img}")]`}
        >
          <img
            className="w-full h-full rounded-lg object-cover"
            src={data.img}
            alt={data.title.slice(0, 2)}
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-green-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-70 rounded-lg"></div>
        </div>

        {/* desc */}
        <div className="max-w-sm px-4 flex flex-col gap-3">
          {/* title */}
          <h1 className="text-[1.1rem] font-semibold text-light-text dark:text-dark-text capitalize pt-4">
            {data.title}
          </h1>
          {/* description */}
          <p className="text-gray-700 dark:text-gray-200 text-sm">
            {data.description.slice(0, 96)}...
          </p>
          {/* price and linke */}
        </div>
      </Link>

      {/* price and like btn */}
      <div className=" text-green-700 flex justify-between p-4 text-xs">
        Tags go here
      </div>
    </article>
  );
};

export default ProjectCard;
