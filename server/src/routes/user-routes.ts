import express from 'express'

import {
  Register,
  Login,
} from '../controller/user-controllers/Authorisation-controller'
import { errorHandler } from '../middleware/errorHandler'
const userRouter = express.Router()

userRouter.route('/register').post(Register, errorHandler)
userRouter.route('/login').post(Login, errorHandler)

export default userRouter
