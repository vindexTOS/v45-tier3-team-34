import express from 'express'
import {
  getAllCompanies,
  createCompany,
  updateCompany,
  deleteCompany,
  getAllCompaniesProjects,
  GetSingleProject,
} from '../controller/company-controllers/company-project-controller'
import { Check_user_id } from '../middleware/user-id-check'
import { check_user_token } from '../middleware/user-token-check'

import { errorHandler } from '../middleware/errorHandler'

const router = express.Router()
//pre fix  /companies/projects
router
  .route('/:user_id')
  .post(Check_user_id, check_user_token, createCompany, errorHandler)

router.route('/each/:user_id').get(getAllCompaniesProjects)
router.route('/').get(getAllCompanies)
router.route('/:id').put(updateCompany).delete(deleteCompany)
router.route('/single/:project_id').get(GetSingleProject)

export default router
