import express from 'express'
import {
  getAllProjects,
  createProject,
  getProject,
  updateProject,
  deleteProject,
} from '../controller/user-controllers/project-controller'
import { Check_user_id } from '../middleware/user-id-check'
import { check_user_token } from '../middleware/user-token-check'
import { errorHandler } from '../middleware/errorHandler'
const projectRouter = express.Router()

projectRouter
  .route('/:user_id')
  .get(getAllProjects, errorHandler)
  .post(Check_user_id, check_user_token, createProject, errorHandler)

projectRouter
  .route('/:user_id')
  .get(getProject, errorHandler)
  .patch(updateProject, errorHandler)
  .delete(deleteProject, errorHandler)

export default projectRouter
