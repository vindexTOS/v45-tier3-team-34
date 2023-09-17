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
      className={`px-4 py-2 ${
        color == "green"
          ? "hover:bg-primary-hover text-white dark:text-tersiary bg-primary"
          : "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary-hover"
      } shadow-lg hover:shadow-xl transition-shadow delay-100 rounded-md font-semibold text-sm`}
    >
      {title}
    </Link>
  );
};

export default HeroCTAButton;
