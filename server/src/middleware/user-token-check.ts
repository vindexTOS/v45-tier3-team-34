import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../functions/verifyToken'
import user_model from '../model/user_model'
// checking if user who is trying to change information is same user, or if user is even registered or loged in

export const check_user_token = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  //checking if token even exists
  try {
    const token = req?.header('Authorization')?.replace('Bearer ', '')

    if (!token) {
      return res.status(401).json({ msg: 'No token, authorization denied' })
    }

    const user = await verifyToken(token)
    if (!user) {
      return res.status(401).json({ msg: 'Ivnalid token' })
    }
    next()
  } catch (error) {
    return res.status(500).json({ msg: error.message })
  }
}
