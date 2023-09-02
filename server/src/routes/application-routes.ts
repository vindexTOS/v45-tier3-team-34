import express from 'express'
import {
  MakeCompanyApplication,
  GetSingleProjectApplication,
  GetCompanyApplications,
} from '../controller/company-controllers/Company-application-controller'
import { check_user_token } from '../middleware/user-token-check'
import { errorHandler } from '../middleware/errorHandler'
const applicationRouter = express.Router()

// prefix /application
applicationRouter
  .route('/:project_id')
  .post(MakeCompanyApplication, errorHandler)
  .get(GetSingleProjectApplication, errorHandler)
applicationRouter
  .route('/company/:company_id')
  .get(GetCompanyApplications, errorHandler)

export default applicationRouter
