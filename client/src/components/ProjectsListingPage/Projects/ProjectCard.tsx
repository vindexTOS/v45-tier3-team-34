import { useState } from "react";
import { ProjectCardType } from "../../../common.types";
import { Link } from "react-router-dom";
import RatesStars from "./RatesStars";
import { AiTwotoneHeart } from "react-icons/ai";

const ProjectCard = ({
  data,
}: {
  data: ProjectCardType;
}) => {
  const [isLinked, setIsLinked] = useState(false);

  const {
    category,
    country,
    description,
    difficulty,
    image,
    price,
    title,
    urgent,
    skills,
    _id,
  } = data.project;

  return (
    <article className="border bg-white border-gray-300 dark:border-green-900 dark:bg-slate-900 rounded-lg p-4 flex flex-col shadow-md hover:shadow-xl justify-between ">
      {/* ?? a try */}

      <Link to={"/company/projects/" + _id}>
        {/* ?? this image require more stylings  */}
        <div
          className={`w-full h-64 rounded-md p-0 m-0 bg-[url("${image}")] mb-5`}
        >
          <img
            className="w-full h-full rounded-lg object-cover"
            src={image}
            // alt={data.title.slice(0, 2)}
          />
        </div>
        {/* desc */}
        <div className="max-w-sm px-4 flex flex-col gap-3 mb-5">
          {/* reviews */}
          <RatesStars data={data.ratings} />
          {/* title */}
          <h1 className="text-[1.2rem] font-semibold text-light-primary dark:text-dark-primary">
            {title}
          </h1>
          {/* description */}
          <p className="text-gray-500 text-[0.8rem]">
            {description.slice(0, 96)}...
          </p>
          {/* price and linke */}
        </div>
      </Link>

      {/* price and like btn */}
      <div className=" dark:text-gray-200 flex justify-between p-4">
        {/* price */}
        <p className="flex items-center text-light-muted dark:text-dark-muted text-[.8rem]">
          <span className="text-[1rem] font-semibold text-light-primary dark:text-dark-primary mr-2">
            ${price}
          </span>
          project Budjet
        </p>
        {/* like btn add same features if needed */}
        <button
          //may (have to be chnged too)
          onClick={() =>
            setIsLinked((prev) => !prev)
          }
          className={`${
            isLinked
              ? "bg-green-200 dark:bg-green-800 text-green-600 dark:text-green-200 "
              : "bg-slate-300 dark:bg-slate-700 text-slate-500  "
          } text-lg p-2 rounded-md `}
        >
          <AiTwotoneHeart />
        </button>
      </div>
    </article>
  );
};

export default ProjectCard;
