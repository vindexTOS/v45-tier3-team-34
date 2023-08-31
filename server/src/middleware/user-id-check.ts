import { Request, Response, NextFunction } from 'express'
import user_model from '../model/user_model'
import jwt from 'jsonwebtoken'
export const Check_user_id = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { user_id } = req.params
  const token = req?.header('Authorization')?.replace('Bearer ', '')
  const decoded: any = jwt.verify(token, process.env.JWT_STRING)

  const user = await user_model.findById(user_id)
  if (!user) {
    return res.status(403).json({ msg: 'User Not Found' })
  }
  if (decoded.user._id.toString() !== user_id) {
    return res.status(401).json({ msg: 'Not Authorised' })
  }

  next()
}
