import React, { useState } from 'react'
import { UseMainContext } from '../../context'
import axios from 'axios'

export default function Rating() {
  const { UserState, isUserLoggedIn } = UseMainContext()
  const RateUser = async (user_id: string) => {
    if (UserState.userData.user && UserState.userData.user._id) {
      try {
        const res = await axios.post(
          `${import.meta.env.VITE_GLOBAL_URL}/rating/${user_id}`,
          {
            rater_id: UserState.userData.user._id,
            rating_score: rating,
            rating_review: message,
          },
        )
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  }
  const handleRate = (newRating: number) => {
    setRating(newRating)
  }
  const [rating, setRating] = useState<number>(0)
  const [message, setMessage] = useState<string>('')
  if (isUserLoggedIn && UserState.userData.user.role === 'Company/Startup') {
    return (
      <div className="bg-white w-[100%] p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-4">Rate this user</h1>
        <textarea
          className="w-full p-2 border rounded-md mb-4"
          placeholder="Write your review..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              onClick={() => handleRate(star)}
              className={`cursor-pointer text-3xl ${
                star <= rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
            >
              ★
            </span>
          ))}
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors duration-300"
          onClick={() => RateUser('user_id_to_rate')}
        >
          Submit Rating
        </button>
      </div>
    )
  } else if (UserState.userData.user.role === 'Developer') {
    return <div>Developers cannot rate other developers </div>
  } else {
    return <div>Login or register to rate this user </div>
  }
}
