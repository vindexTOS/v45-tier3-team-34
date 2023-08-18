import express from 'express';
import {
  getAllProjects,
  createProject,
  getProject,
  updateProject,
  deleteProject,
} from '../controller/project-controller';

const projectRouter = express.Router();

projectRouter.route('/').get(getAllProjects).post(createProject);
projectRouter
  .route('/:id')
  .get(getProject)
  .put(updateProject)
  .delete(deleteProject);

export default projectRouter;
