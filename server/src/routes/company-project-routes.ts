import express from 'express'
import {
  getAllCompanies,
  createCompany,
  getCompany,
  updateCompany,
  deleteCompany,
} from '../controller/company-project-controller'
import { Check_user_id } from '../middleware/user-id-check'
import { check_user_token } from '../middleware/user-token-check'

import { errorHandler } from '../middleware/errorHandler'

const router = express.Router()

router
  .route('/:user_id')
  .post(Check_user_id, check_user_token, createCompany, errorHandler)
router.route('/').get(getAllCompanies)
router.route('/:id').get(getCompany).put(updateCompany).delete(deleteCompany)

export default router
