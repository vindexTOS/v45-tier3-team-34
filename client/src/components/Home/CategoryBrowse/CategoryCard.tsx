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
      className="bg-[#F7FAF7] backdrop-blur-sm  dark:bg-white/10 dark:text-gray-300 rounded-lg p-4 md:p-8 shadow-md hover:dark:bg-white/5 hover:bg-[#e7f3e7] transition-shadow delay-75 ease-in-out min-h-[120px] flex flex-col justify-between cursor-pointer"
    >
      <h1 className="text-[1.2rem] font-semibold mb-2">
        {title}
      </h1>
      <div className="flex justify-between text-slate-500 text-[0.9rem]">
        <p className="flex items-center gap-1 ">
          <span className="text-green-600">
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
