import user_model from '../../model/user_model'
import { Response, Request } from 'express'
import { tryCatch } from '../../middleware/tryCatch'
export const update_user_info = tryCatch(
  async (req: Request, res: Response) => {
    const { userName, avatar, email, role } = req.body
    let { userId } = req.params
    userId = userId.replace('\n', '')

    const isUserExist = await user_model.findById(userId)
    // console.log(isUserExist)
    if (!isUserExist) {
      res.status(402).json({ msg: 'User dose not exist' })
    }

    await user_model.findByIdAndUpdate(userId, req.body, {
      new: true,
      runValidators: true,
    })

    res.status(202).json({ msg: 'User Has Been Updated' })
    return Promise.resolve()
  },
)

export const get_user_info = tryCatch(async (req: Request, res: any) => {
  const { userId } = req.params

  let user = await user_model.findById(userId)
  if (!user) {
    return res.status(403).json({ msg: 'User not found' })
  }
  user.password = null
  return res.status(200).json({ user })
})
