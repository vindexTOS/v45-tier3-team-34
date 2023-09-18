import React, {
  useEffect,
  useState,
} from "react";
import { UseMainContext } from "../../../context";
import axios from "axios";
import AllRatings from "../AllRatings";

import { RatingTypes } from "../../../common.types";
const Reviews = () => {
  const { UserState, isUserLoggedIn } =
    UseMainContext();
  const [reviewsData, setReviewsData] = useState<
    RatingTypes[]
  >([]);
  const GetReviews = async () => {
    if (isUserLoggedIn) {
      try {
        const res = await axios.get(
          `${
            import.meta.env.VITE_GLOBAL_URL
          }/rating/${UserState.userData.user._id}`
        );
        setReviewsData(res.data.rating);
      } catch (error) {
        console.log(error);
      }
    }
  };

  useEffect(() => {
    GetReviews();
  }, []);

  if (
    isUserLoggedIn &&
    reviewsData &&
    reviewsData.length > 0
  ) {
    return (
      <div className="p-4 md:p-10">
        <h1 className="text-muted dark:text-muted">
          These are your ratings:
        </h1>
        <AllRatings data={reviewsData} />
      </div>
    );
  } else {
    return (
      <div className="p-10 h-[300px]">
        You have no reviews
      </div>
    );
  }
};

export default Reviews;
