import express from 'express'
import {
  MakeCompanyApplication,
  GetSingleProjectApplication,
  GetCompanyApplications,
  RejectCandidat,
  AccaptCandidat,
  devFinnishedProject,
  devFinnishedRejected,
  projectFinnished,
  InProgress,
  GetArchivedProjects,
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

applicationRouter.route('/reject/:dev_id').patch(RejectCandidat)
applicationRouter.route('/accapt/:application_id').patch(AccaptCandidat)
applicationRouter
  .route('/dev-finnish/:application_id')
  .patch(devFinnishedProject)
applicationRouter
  .route('/dev-reject-finnish/:application_id')
  .patch(devFinnishedRejected)
applicationRouter
  .route('/project-finnish/:application_id')
  .patch(projectFinnished)
applicationRouter.route('/inprogress/:company_id').get(InProgress, errorHandler)
applicationRouter.route('/archived/:company_id').get(GetArchivedProjects)

export default applicationRouter
