import express from 'express'

import {
  Register,
  Login,
} from '../controller/user-controllers/Authorisation-controller'

const userRouter = express.Router()

userRouter.route('/register').post(Register)
userRouter.route('/login').post(Login)

export default userRouter
