import express from 'express';
import {
  getAllProjects,
  createProject,
} from '../controller/project-controller';

const projectRouter = express.Router();

projectRouter.route('/').get(getAllProjects).post(createProject);

export default projectRouter;
