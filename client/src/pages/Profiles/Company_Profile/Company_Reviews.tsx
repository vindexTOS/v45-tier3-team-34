import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { UseMainContext } from '../../../context'
import AllRatings from '../AllRatings'
import { RatingTypes } from '../../../common.types'

const Reviews = () => {
  const { UserState, isUserLoggedIn } = UseMainContext()
  const [reviewsData, setReviewsData] = useState<RatingTypes[]>([])
  const GetReviews = async () => {
    if (isUserLoggedIn) {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_GLOBAL_URL}/rating/${
            UserState.userData.user._id
          }`,
        )
        setReviewsData(res.data.rating)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    GetReviews()
  }, [])

  if (isUserLoggedIn && reviewsData && reviewsData.length > 0) {
    return (
      <div>
        <h1>This are your ratings</h1>
        <AllRatings data={reviewsData} />
      </div>
    )
  } else {
    return (
      <div className="flex flex-col items-center justify-center  text-gray-500 w-[1000px] h-[500px]">
        <svg
          className="w-16 h-16 mb-4 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m0-16s-8 0-8 8h16c0-8-8-8-8-8z"
          />
        </svg>
        <div className="text-lg font-semibold">You have no reviews</div>
      </div>
    )
  }
}

export default Reviews
