import Dev_Project_model from '../model/dev_project_model'
import { tryCatch } from '../middleware/tryCatch'
import { Request, Response, NextFunction } from 'express'

export const getAllProjects = tryCatch(async (req: Request, res: Response) => {
  const projects = await Dev_Project_model.find({})
  res.status(200).json({ projects })
})

export const createProject = tryCatch(async (req: Request, res: Response) => {
  const newProject = await Dev_Project_model.create(req.body)
  res.status(201).json({ msg: 'Project Added', project: newProject })
})

export const getProject = tryCatch(async (req: Request, res: any) => {
  const projectId = req.params.id
  const project = await Dev_Project_model.findById(projectId)
  if (!project) {
    return res.status(404).json({ message: 'Project not found' })
  }
  res.status(200).json({ project })
})

export const updateProject = tryCatch(async (req: Request, res: any) => {
  const projectId = req.params.id
  const updatedProject = await Dev_Project_model.findByIdAndUpdate(
    projectId,
    req.body,
    { new: true },
  )
  if (!updatedProject) {
    return res.status(404).json({ message: 'Project not found' })
  }
  res.status(200).json({ project: updatedProject })
})

export const deleteProject = tryCatch(async (req: Request, res: any) => {
  const projectId = req.params.id
  const deletedProject = await Dev_Project_model.findByIdAndDelete(projectId)
  if (!deletedProject) {
    return res.status(404).json({ message: 'Project not found' })
  }
  res.status(204).send()
})
