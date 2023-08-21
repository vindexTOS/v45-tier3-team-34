import user_info_model from '../../model/user_info_model'
import { tryCatch } from '../../middleware/tryCatch'
import { Request, Response } from 'express'

export const update_user_detail_info = tryCatch(
  async (req: Request, res: any) => {
    const { user_id } = req.params
    const userExists = await user_info_model.findOne({ user_id })
    if (!userExists) {
      return res.status(403).json({ msg: 'User Does not have info' })
    }
    console.log(userExists)
    await user_info_model.findByIdAndUpdate(userExists._id, req.body, {
      new: true,
      runValidators: true,
    })

    return res.status(200).json({ msg: 'info has been updated' })
  },
)

export const get_user_detail_info = tryCatch(async (req: Request, res: any) => {
  const { user_id } = req.params

  const user_info = await user_info_model.findById(user_id)

  return res.status(200).json({ user_info })
})
