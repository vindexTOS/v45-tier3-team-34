import user_model from '../../model/User_models/user_model'
import { tryCatch } from '../../middleware/tryCatch'
import company_user_model from '../../model/Company_models/company_user_model'
import { Request } from 'express'

export const update_company_detail_info = tryCatch(
  async (req: Request, res: any) => {
    const { user_id } = req.params
    let company_id = user_id
    console.log(req.body)
    const userExists = await company_user_model.findOne({ company_id })
    console.log(userExists)
    if (!userExists) {
      return res.status(403).json({ msg: 'User Does not have info' })
    }

    await company_user_model.findByIdAndUpdate(userExists._id, req.body, {
      new: true,
      runValidators: true,
    })

    return res.status(200).json({ msg: 'info has been updated' })
  },
)

export const get_company_detail_info = tryCatch(
  async (req: Request, res: any) => {
    const { user_id } = req.params
    let company_id = user_id

    const user = await user_model.find({ _id: user_id }).select('-password')
    if (!user) {
      return res.status(400).json({ msg: 'User Dose not exist' })
    }
    const user_info = await company_user_model.findOne({ company_id })
    const user_data = { user_info, user: user[0] }
    return res.status(200).json(user_data)
  },
)
