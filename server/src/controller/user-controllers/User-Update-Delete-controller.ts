import user_model from '../../model/user_model'
import { Response, Request } from 'express'
import { tryCatch } from '../../middleware/tryCatch'

export const update_user_info = tryCatch(async (req: any, res: any) => {
  const { userName, avatar, email, role } = req.body
  let { userId } = req.params
  userId = userId.replace('\n', '')

  const isUserExist = await user_model.findById(userId)
  // console.log(isUserExist)
  if (!isUserExist) {
    return res.status(402).json({ msg: 'User dose not exist' })
  }

  await user_model.findByIdAndUpdate(userId, req.body, {
    new: true,
    runValidators: true,
  })

  return res.status(202).json({ msg: 'User Has Been Updated' })
})
