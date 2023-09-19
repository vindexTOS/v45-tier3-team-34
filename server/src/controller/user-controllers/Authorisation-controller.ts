import bcrypt from 'bcryptjs'
import User_model from '../../model/User_models/user_model'
import jwt from 'jsonwebtoken'
import { tryCatch } from '../../middleware/tryCatch'
import { Request, Response, NextFunction } from 'express'
import user_info_model from '../../model/User_models/user_info_model'
import company_user_model from '../../model/Company_models/company_user_model'
import rating_model from '../../model/rating_model'

export const Register = tryCatch(async (req: Request, res: any) => {
  const { password, confirmPassword, email, userName, avatar, role } = req.body
  // console.log(req.body)
  let user = {}

  const userExist = await User_model.findOne({ email: email })
  if (userExist) {
    return res.status(409).json({ msg: 'User with this email already exists' })
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ msg: 'Password does not match' })
  }
  const hashedPassword = await bcrypt.hash(password, 10)
  user = { password: hashedPassword, email, userName, avatar, role }

  if (password && email && userName) {
    await User_model.create(user)
  } else {
    return res.status(201).json({ msg: 'Enter all requried values' })
  }

  const userFromDb = await User_model.findOne({ email: email })
  if (userFromDb.role === 'Company/Startup') {
    await company_user_model.create({ company_id: userFromDb._id })
    await rating_model.create({
      user_id: userFromDb._id,
      rater_id: userFromDb._id,
      rating_score: 0,
      user: { ...req.body },
    })
  } else if (userFromDb.role === 'Developer') {
    await user_info_model.create({ user_id: userFromDb._id })
    await rating_model.create({
      user_id: userFromDb._id,
      rater_id: userFromDb._id,
      rating_score: 0,
      user: { ...req.body },
    })
  }

  userFromDb.password = null
  // console.log(userFromDb)

  const token = jwt.sign({ user: userFromDb }, process.env.JWT_STRING, {
    expiresIn: '14d',
  })

  if (userFromDb) {
    return res.status(201).json({ token, msg: 'Registered successfully' })
  } else if (!userFromDb) {
    return res.status(201).send({ msg: 'Try To Sign In' })
  }
})

export const Login = tryCatch(async (req: Request, res: any) => {
  const { email, password } = req.body

  const user = await User_model.findOne({ email: email })
  if (!user) {
    return res.status(401).json({ msg: 'User not found' })
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password)

  if (!isPasswordCorrect) {
    return res.status(401).json({ msg: 'Password is not correct' })
  }

  user.password = null

  const token = jwt.sign({ user }, process.env.JWT_STRING, {
    expiresIn: '14d',
  })

  return res
    .status(200)
    .json({ token, msg: 'You have been signed in successfully' })
})
