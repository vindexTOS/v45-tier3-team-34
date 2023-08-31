import express from 'express'
import { check_user_token } from '../middleware/user-token-check'
import { Check_user_id } from '../middleware/user-id-check'
import { errorHandler } from '../middleware/errorHandler'
import {
  CreateRaiting,
  GetUserSingleUserRating,
} from '../controller/Rating-controllers/Raiting-controller'
const route = express.Router()

route
  .route('/:user_id')
  .get(GetUserSingleUserRating)

  .post(check_user_token, CreateRaiting, errorHandler)

export default route
