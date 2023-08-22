import user_model from '../../model/user_model'
import { Response, Request } from 'express'
import { tryCatch } from '../../middleware/tryCatch'
export const update_user_info = tryCatch(
  async (req: Request, res: Response) => {
    const { userName, avatar, email, role } = req.body
    let { user_id } = req.params
    user_id = user_id.replace('\n', '')

    const isUserExist = await user_model.findById(user_id)
    // console.log(isUserExist)
    if (!isUserExist) {
      res.status(402).json({ msg: 'User dose not exist' })
    }

    await user_model.findByIdAndUpdate(user_id, req.body, {
      new: true,
      runValidators: true,
    })

    res.status(202).json({ msg: 'User Has Been Updated' })
    return Promise.resolve()
  },
)

export const get_user_info = tryCatch(async (req: Request, res: any) => {
  const { user_id } = req.params

  let user = await user_model.findById(user_id)
  if (!user) {
    return res.status(403).json({ msg: 'User not found' })
  }
  user.password = null
  return res.status(200).json({ user })
})

export const get_all_users = tryCatch(async (req: Request, res: any) => {
  const allUsers = await user_model.find({}).select('-password')

  return res.status(200).json({ allUsers })
})
