import { Response } from 'express'
import jwt from 'jsonwebtoken'
import user_model from '../model/user_model'
export const verifyToken = async (token: string) => {
  try {
    // Verify the token
    const decoded: any = jwt.verify(token, process.env.JWT_STRING)

    // Extract the user ID from the decoded token
    const userId = decoded
    // Find the user in the database
    const user = await user_model.findById(userId.user._id)

    // Check if the user exists

    return user
  } catch (error) {
    throw new Error(error)
  }
}
