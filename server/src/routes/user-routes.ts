import express from 'express'

import {
  Register,
  Login,
} from '../controller/user-controllers/Authorisation-controller'
import { errorHandler } from '../middleware/errorHandler'
import {
  update_user_info,
  get_user_info,
  get_all_users,
  get_all_devs,
} from '../controller/user-controllers/User-CRUD-controller'
import {
  get_user_detail_info,
  update_user_detail_info,
} from '../controller/user-controllers/User-details-controller'
import { check_user_token } from '../middleware/user-token-check'
import { Check_user_id } from '../middleware/user-id-check'

const userRouter = express.Router()

userRouter.route('/register').post(Register)
userRouter.route('/login').post(Login, errorHandler)
userRouter
  .route('/crud/:user_id')
  .patch(check_user_token, Check_user_id, update_user_info, errorHandler)

userRouter.route('/user/:user_id').get(get_user_info, errorHandler)
userRouter
  .route('/user/info/:user_id')
  .get(get_user_detail_info)
  .patch(check_user_token, Check_user_id, update_user_detail_info, errorHandler)
userRouter.route('/all_devs').get(get_all_devs)
export default userRouter
