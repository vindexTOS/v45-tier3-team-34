import { tryCatch } from '../../middleware/tryCatch'
import company_user_model from '../../model/company_user_model'
import { Request } from 'express'

export const update_company_detail_info = tryCatch(
  async (req: Request, res: any) => {
    const { user_id } = req.params
    let company_id = user_id

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
