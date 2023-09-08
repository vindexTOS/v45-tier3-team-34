import user_model from '../../model/User_models/user_model'
import { Response, Request } from 'express'
import { tryCatch } from '../../middleware/tryCatch'
import user_info_model from '../../model/User_models/user_info_model'
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

    // Company/Startup
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

export const get_all_devs = tryCatch(async (req: Request, res: any) => {
  try {
    const { search } = req.query

    const devs = await user_model
      .find({ role: 'Developer' })
      .select('-password')

    // Create an array to store the combined results
    const combinedResults = []

    // Loop through the developers and fetch corresponding user_info
    for (let dev of devs) {
      const dev_info = await user_info_model.findOne({
        user_id: dev._id.toString(),
      })
      console.log(dev_info)
      // Combine user and user_info details
      const combinedData = {
        user: dev,
        user_info: dev_info,
      }

      combinedResults.push(combinedData)
    }

    return res.status(200).json({ devs: combinedResults })
  } catch (error) {
    // Handle the error appropriately
    return res.status(500).json({ error: 'An error occurred' })
  }
})
