import Company_Project_model from '../model/company_project_model'
import { tryCatch } from '../middleware/tryCatch'
import { Request, Response, NextFunction } from 'express'
import { CompanyProject } from '../types/Controller-types'
import rating_model from '../model/rating_model'
export const getAllCompanies = tryCatch(async (req: Request, res: any) => {
  const projects = await Company_Project_model.find({})
  const projectsData = []

  for (const project of projects) {
    const ratings = await rating_model.find({ user_id: project.user_id })
    const combinedData = {
      project,
      ratings,
    }
    projectsData.push(combinedData)
  }

  return res.status(200).json({ projectsData })
})

export const createCompany = tryCatch(async (req: Request, res: any) => {
  const { user_id } = req.params
  await Company_Project_model.create({
    ...req.body,
    user_id,
  })
  return res.status(201).json({ msg: 'Project Added' })
})

export const getAllCompaniesProjects = tryCatch(
  async (req: Request, res: any) => {
    const { user_id } = req.params
    const data = []
    let companySpecificProjects: CompanyProject[] = await Company_Project_model.find()

    for (let i = 0; i < companySpecificProjects.length; i++) {
      if (companySpecificProjects[i].user_id === user_id) {
        data.push(companySpecificProjects[i])
      }
    }

    return res.status(200).json({ data })
  },
)

export const getCompany = tryCatch(async (req: Request, res: any) => {
  const projectId = req.params.id
  const company = await Company_Project_model.findById(projectId)
  if (!company) {
    return res.status(404).json({ message: 'Company not found' })
  }
  res.status(200).json({ company })
})

export const updateCompany = tryCatch(async (req: Request, res: any) => {
  const projectId = req.params.id
  const updatedCompany = await Company_Project_model.findByIdAndUpdate(
    projectId,
    req.body,
    { new: true },
  )
  if (!updatedCompany) {
    return res.status(404).json({ message: 'Company not found' })
  }
  res.status(200).json({ company: updatedCompany })
})

export const deleteCompany = tryCatch(async (req: Request, res: any) => {
  const projectId = req.params.id
  const deletedCompany = await Company_Project_model.findByIdAndDelete(
    projectId,
  )
  if (!deletedCompany) {
    return res.status(404).json({ message: 'Company not found' })
  }
  res.status(204).send()
})
