import { Link } from "react-router-dom";

const HeroCTAButton = ({
  title,
  color,
}: {
  title: string;
  color: "green" | "white";
}) => {
  return (
    <Link
      to={"/register"}
      className={`px-6 py-3 ${
        color == "green"
          ? "hover:bg-light-green/90 text-white bg-light-green"
          : "text-light-primary bg-white/70 hover:bg-gray-100 dark:bg-gray-100 dark:hover:bg-gray-100/90"
      } shadow-lg hover:shadow-xl transition-shadow delay-100 rounded-md font-bold text-sm`}
    >
      {title}
    </Link>
  );
};

export default HeroCTAButton;
