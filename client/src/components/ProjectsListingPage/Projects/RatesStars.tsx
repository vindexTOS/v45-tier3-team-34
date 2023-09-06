import { HiStar } from "react-icons/hi";
import { RatingTypes } from "../../../common.types";
const RatesStars = ({
  data,
}: {
  data: RatingTypes[];
}) => {
  const AverageStars = (): number => {
    let returnNum = 0;

    for (let i = 0; i < data.length; i++) {
      returnNum += data[i].rating_score;
    }

    return returnNum / data.length;
  };
  const num = AverageStars();
  const stars = new Array(5).fill("num");
  return (
    <div className="flex justify-between max-w-fit items-center gap-3">
      <div className="flex gap-0">
        {stars.map((st, i) => (
          <p
            className={`${
              i < num
                ? "text-green-600"
                : "text-slate-500"
            } text-xl`}
            key={i}
          >
            <HiStar />
          </p>
        ))}
      </div>
      <div className="text-green-900 dark:text-green-100">
        {data.length} reviews
      </div>
    </div>
  );
};

export default RatesStars;
