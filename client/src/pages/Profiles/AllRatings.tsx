import React from "react";
import { RatingTypes } from "../../common.types";
import { useNavigate } from "react-router-dom";
const AllRatings = ({
  data,
}: {
  data: RatingTypes[];
}) => {
  const navigate = useNavigate();

  return (
    <div className=" w-full   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {data.map((rating, index) => {
        const { avatar, userName } = rating.user;
        return (
          <div
            key={index}
            className="bg-white w-fit md:min-w-[300px] shadow-lg p-4 rounded-lg hover:shadow-xl transition duration-300 ease-in-out"
          >
            <p className="text-secondary">{`Review: ${rating.rating_review}`}</p>
            <div className="flex justify-between items-center mt-4">
              <div
                onClick={() =>
                  navigate(
                    `/company/page/${rating.rater_id}`
                  )
                }
                className="flex  items-center justify-center gap-2 cursor-pointer"
              >
                <img
                  src={avatar}
                  alt={`${userName}'s avatar`}
                  className="w-10 h-10 rounded-full"
                />
                <p className="text-muted">
                  {userName}
                </p>
              </div>
              <div className="flex items-center ">
                {new Array(rating.rating_score)
                  .fill("aha")
                  .map((star, i: number) => (
                    <span
                      key={i}
                      className={`cursor-pointer text-lg ${"text-yellow-400"}`}
                    >
                      ★
                    </span>
                  ))}
              </div>
              {/* Add any additional elements or actions here */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AllRatings;
