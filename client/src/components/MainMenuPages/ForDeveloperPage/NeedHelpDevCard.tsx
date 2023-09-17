import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

const NeedHelpDevCard = ({
  title,
  sub_title,
  link,
}: {
  title: string;
  sub_title: string;
  link: string;
}) => {
  return (
    <div className="flex w-full min-w-full md:min-w-min md:max-w-sm flex-col gap-4 backdrop-blur-sm bg-white/50 hover:bg-white/70 dark:bg-gray-900/60 hover:dark:bg-gray-900 rounded-lg p-4 border border-white dark:border-slate-500  text-primary dark:text-primary cursor-pointer">
      <h1 className="text-xl font-semibold">
        {title}
      </h1>
      <Link
        to={link}
        className="flex items-center gap-1"
      >
        <p className="text-sm text-muted dark:text-muted">
          {sub_title}
        </p>
        <p className="text-center flex justify-center items-center">
          <HiArrowRight />
        </p>
      </Link>
    </div>
  );
};

export default NeedHelpDevCard;
