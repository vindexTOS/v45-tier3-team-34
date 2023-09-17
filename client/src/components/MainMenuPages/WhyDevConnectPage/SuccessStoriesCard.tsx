import { ProjectCardType } from "../../../common.types";
import { Link } from "react-router-dom";

const ProjectCard = ({ data }: { data: any }) => {
  return (
    <article className="flex flex-col">
      <Link to="#">
        <div
          className={`w-full relative h-48 rounded-md bg-[url("${data?.image}")]`}
        >
          <img
            className="w-full h-full rounded-lg object-cover"
            src={data?.image}
            alt={data?.title?.slice(0, 2)}
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-primary bg-fixed opacity-0  hover:opacity-70 rounded-lg"></div>
        </div>

        {/* desc */}
        <div className="max-w-sm px-4 flex flex-col gap-3">
          {/* title */}
          <h1 className="text-[1.1rem] font-semibold text-primary dark:text-primary capitalize pt-4">
            {data?.title}
          </h1>
          {/* description */}
          <p className="text-gray-700 dark:text-gray-200 text-sm">
            {data?.description?.slice(0, 96)}...
          </p>
          {/* price and linke */}
        </div>
      </Link>

      {/* price and like btn */}
      <div className=" text-primary flex justify-between p-4 text-xs">
        Tags go here
      </div>
    </article>
  );
};

export default ProjectCard;
