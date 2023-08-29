import { Link } from "react-router-dom";
import { HiStar } from "react-icons/hi";
const CategoryCard = ({
  title,
  rating,
  skills,
  link,
}: {
  title: string;
  rating: number;
  skills: number;
  link: string;
}) => {
  return (
    <Link
      to={link}
      className="bg-gray-200 backdrop-blur-sm  dark:bg-white/10 dark:text-gray-300 rounded-lg p-4 md:p-8 shadow-md dark:shadow-gray-950 hover:shadow-2xl transition-shadow delay-75 sm:min-h-[120px] flex flex-col justify-between cursor-pointer"
    >
      <h1 className="text-md md:text-lg 2xl:text-xl font-semibold mb-2">
        {title}
      </h1>
      <div className="flex justify-between text-slate-500 text-sm">
        <p className="flex items-center gap-1 ">
          <span className="text-green-600 text-lg">
            <HiStar />
          </span>
          {rating}/5
        </p>
        <p>{skills} skills</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
