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
      className="bg-[#F7FAF7] backdrop-blur-sm  dark:bg-white/10 dark:text-gray-400 rounded-lg p-4 md:p-8 hover:shadow-md dark:shadow-gray-950 hover:bg-[#eff9ef] dark:hover:bg-white/5 min-h-[120px] flex flex-col justify-between cursor-pointer border border-[#e1e6e1]  text-slate-700 dark:border-green-900"
    >
      <h1 className="text-[1.2rem] font-semibold mb-2">
        {title}
      </h1>
      <div className="flex justify-between text-[0.9rem] text-green-900 dark:text-green-700">
        <p className="flex items-center gap-1 ">
          <span className="text-green-600 text-xl">
            <HiStar />
          </span>
          {rating}/5
        </p>
        <p>{skills} skills x</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
