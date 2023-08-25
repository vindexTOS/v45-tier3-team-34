import Dev_Project_model from '../model/dev_project_model'
import { tryCatch } from '../middleware/tryCatch'
import { Request, Response, NextFunction } from 'express'
import user_model from '../model/user_model'

export const getAllProjects = tryCatch(async (req: Request, res: Response) => {
  const projects = await Dev_Project_model.find({})
  res.status(200).json({ projects })
})

export const createProject = tryCatch(async (req: Request, res: any) => {
  const { user_id } = req.params

  const isUserExist = user_model.findById(user_id)

  if (!req.body.photo) {
    return res.status(400).json({ msg: 'Project photo is required' })
  }

  if (!isUserExist) {
    return res.status(403).json({ msg: 'user does not exst' })
  }

  const newProject = await Dev_Project_model.create({ ...req.body, user_id })
  return res.status(201).json({ msg: 'Project Added', project: newProject })
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
