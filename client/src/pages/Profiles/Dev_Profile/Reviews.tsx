 import React, { useEffect, useState } from 'react'
import { UseMainContext } from '../../../context'
import axios from 'axios'
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
    return <div>You have no reviews</div>
  }
}


 
export default Reviews;
