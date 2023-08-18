import { Link } from "react-router-dom";

const HeroCTAButton = ({
  title,
  color,
}: {
  title: string;
  color: "red" | "white";
}) => {
  return (
    <Link
      to={"/"}
      className={`px-6 py-3 ${
        color == "red"
          ? "bg-green-600 hover:bg-green-700 text-white"
          : "text-black hover:bg-gray-200 dark:bg-gray-200 dark:hover:bg-gray-500"
      } shadow-lg hover:shadow-xl transition-shadow delay-100 rounded-md font-bold text-sm`}
    >
      {title}
    </Link>
  );
};

export default HeroCTAButton;
