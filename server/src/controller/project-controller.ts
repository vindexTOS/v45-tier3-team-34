import Project_model from '../model/user_project_model';
import { tryCatch } from '../middleware/tryCatch';
import { Request, Response, NextFunction } from 'express';

export const getAllProjects = tryCatch(async (req: Request, res: Response) => {
  const projects = await Project_model.find({});
  res.status(200).json({ projects });
});

export const createProject = tryCatch(async (req: Request, res: Response) => {
  const newProject = await Project_model.create(req.body);
  res.status(201).json({ project: newProject });
});
