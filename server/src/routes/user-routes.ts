import express from 'express'

import {
  Register,
  Login,
} from '../controller/user-controllers/Authorisation-controller'
import { errorHandler } from '../middleware/errorHandler'
import { update_user_info } from '../controller/user-controllers/User-Update-Delete-controller'
import { check_user_token } from '../middleware/user-token-check'
import { Check_user_id } from '../middleware/user-id-check'
const userRouter = express.Router()

userRouter.route('/register').post(Register, errorHandler)
userRouter.route('/login').post(Login, errorHandler)
userRouter
  .route('/crud/:userId')
  .patch(check_user_token, Check_user_id, update_user_info)
export default userRouter
