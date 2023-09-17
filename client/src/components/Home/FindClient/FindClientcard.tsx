import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

const FindClientcard = ({
  title,
  sub_title,
  link,
}: {
  title: string;
  sub_title: string;
  link: string;
}) => {
  return (
    <div className="flex w-full min-w-full md:min-w-min md:max-w-sm flex-col gap-6 backdrop-blur-md bg-white/20 hover:bg-white/40 dark:bg-gray-900/60 dark:hover:text-primary hover:text-light-inverted rounded-lg p-4 cursor-pointer">
      <h1 className="text-[1.8rem] leading-tight font-semibold">
        {title}
      </h1>
      <Link
        to={link}
        className="flex items-center gap-1"
      >
        <p className="text-center align-middle hover:underline p-0">
          {sub_title}&trade;
        </p>
        {/* must be replaced with custom icons */}

        <p className="text-center flex justify-center items-center">
          <HiArrowRight />
        </p>
      </Link>
    </div>
  );
};

export default FindClientcard;
