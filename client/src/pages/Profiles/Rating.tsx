import React, { useState } from "react";
import { UseMainContext } from "../../context";
import axios from "axios";
import { RatingTypes } from "../../common.types";
import LoadingComponent from "../../components/Status/Loading";
import Succsess from "../../components/Status/Success";
import Error from "../../components/Status/Error";
import NotLogged from "../../components/NotLogged";
export default function Rating({
  data,
  dev_id,
}: {
  data: RatingTypes[];
  dev_id: string;
}) {
  const {
    UserState,
    isUserLoggedIn,
    statusState,
    setError,
    setSuccess,
  } = UseMainContext();

  const RateUser = async (user_id: string) => {
    if (
      UserState.userData.user &&
      UserState.userData.user._id
    ) {
      try {
        if (!message) {
          setError("Please enter your message");
        } else if (rating <= 0) {
          setError("Rating must be more then 0");
        } else {
          const res = await axios.post(
            `${
              import.meta.env.VITE_GLOBAL_URL
            }/rating/${user_id}`,
            {
              rater_id:
                UserState.userData.user._id,
              rating_score: rating,
              rating_review: message,
            }
          );
          setSuccess(res.data.msg);
          setMessage("");
        }
      } catch (error) {
        const err: any = error;
        setError(err.message);
      }
    }
  };
  const handleRate = (newRating: number) => {
    setRating(newRating);
  };
  const UserRating = () => {
    if (isUserLoggedIn && data) {
      return data.find(
        (val: RatingTypes) =>
          val.rater_id ===
          UserState.userData.user._id
      );
    } else {
      return {};
    }
  };
  const userRating = UserRating();
  const [rating, setRating] = useState<number>(0);
  const [message, setMessage] =
    useState<string>("");
  if (
    userRating &&
    userRating.rating_review &&
    userRating.rating_score
  ) {
    const { rating_review, rating_score } =
      userRating;
    return (
      <div className="border border-gray-600/20 dark:border-gray-600/50 w-full  p-1 sm:p-2 rounded-md shadow-sm  bg-white/20 dark:bg-slate-800 text-gray-800 dark:text-gray-300">
        <h1 className="text-2xl font-semibold mb-4">
          Your review
        </h1>
        <div
          className="w-full p-2 border rounded-md mb-4"
          placeholder="Write your review..."
        >
          {rating_review}
        </div>
        <div className="flex items-center mb-4">
          {new Array(rating_score)
            .fill("aha")
            .map((star, i: number) => (
              <span
                key={i}
                className={`cursor-pointer text-xl ${"text-yellow-400"}`}
              >
                ★
              </span>
            ))}
        </div>
      </div>
    );
  } else if (
    isUserLoggedIn &&
    UserState.userData.user &&
    UserState.userData.user.role &&
    UserState.userData.user.role ===
      "Company/Startup"
  ) {
    return (
      <div className="border border-gray-600/20 dark:border-gray-600/50 w-full  p-1 sm:p-2 rounded-md shadow-sm  bg-white/20 dark:bg-slate-800 text-gray-800 dark:text-gray-300">
        <h1 className="text-2xl font-semibold mb-4">
          Your rating
        </h1>
        <textarea
          className="w-full p-2 border rounded-md mb-4 text-muted dark:text-primary"
          placeholder="Write your review..."
          value={message}
          onChange={(e) =>
            setMessage(e.target.value)
          }
        ></textarea>
        <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => handleRate(star)}
              className={`cursor-pointer text-xl ${
                star <= rating
                  ? "text-yellow-400"
                  : "text-gray-300"
              }`}
            >
              ★
            </span>
          ))}
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          onClick={() => RateUser(dev_id)}
        >
          Submit Rating
        </button>
        <Error error={statusState.error} />
        <Succsess success={statusState.success} />
      </div>
    );
  } else if (
    UserState.userData.user &&
    UserState.userData.user.role &&
    UserState.userData.user.role === "Developer"
  ) {
    return (
      <div className="text-destrutive text-xs px-2">
        Developers cannot rate other developers{" "}
      </div>
    );
  } else {
    return (
      <NotLogged text="Please login or register to rate this user" />
    );
  }
}
