import { tryCatch } from '../../middleware/tryCatch'
import rating_model from '../../model/rating_model'

import { Request } from 'express'

export const CreateRaiting = tryCatch(async (req: Request, res: any) => {
  const { user_id } = req.params
  const { rater_id, rating_score, rating_review } = req.body
  if (rater_id === user_id) {
    return res.status(400).json({ msg: 'you cant rate yourself' })
  }
  if (rating_score > 5 || rating_score < 0) {
    return res.status(400).json({ msg: 'you can only rate to 1 to 5 range' })
  }
  await rating_model.create({ ...req.body, user_id })

  return res.status(200).json({ msg: 'rating has been added' })
})

export const GetUserSingleUserRating = tryCatch(
  async (req: Request, res: any) => {
    const { user_id } = req.params

    const findRatings = await rating_model.find({ user_id })

    let totalRating = 0

    for (const rating of findRatings) {
      totalRating += rating.rating_score
    }

    const numberOfRatings = findRatings.length
    const averageRating = totalRating / numberOfRatings

    // Ensure the average rating is between 0 and 5
    const clampedAverageRating = Math.max(0, Math.min(5, averageRating))

    return res
      .status(200)
      .json({ averageRating: clampedAverageRating, numberOfRatings })
  },
)
