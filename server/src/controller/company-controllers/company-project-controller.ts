import Company_Project_model from '../../model/Company_models/company_project_model'
import { tryCatch } from '../../middleware/tryCatch'
import { Request, Response, NextFunction } from 'express'
import { CompanyProject } from '../../types/Controller-types'
import rating_model from '../../model/rating_model'
import project_application_model from '../../model/project_application_model'
import user_model from '../../model/User_models/user_model'
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

  const newProject = await Company_Project_model.create({
    ...req.body,
    user_id,
  })

  const project = await Company_Project_model.findById(newProject._id)
  return res.status(201).json({ msg: 'Project Added', id: project._id })
})

export const GetSingleProject = tryCatch(async (req: Request, res: any) => {
  const { project_id } = req.params

  const project = await Company_Project_model.findOne({ _id: project_id })

  if (!project) {
    return res.status(404).json({ msg: 'Project Not Found' })
  }

  return res.status(200).json(project)
})

export const getAllCompaniesProjects = tryCatch(
  async (req: Request, res: any) => {
    const { user_id } = req.params
    const data = []

    let companySpecificProjects = await Company_Project_model.find({
      isFinnished: false,
    })

    for (let i = 0; i < companySpecificProjects.length; i++) {
      if (companySpecificProjects[i].user_id === user_id) {
        // Find related applications for the current project
        const relatedApplications = await project_application_model.find({
          project_id: companySpecificProjects[i]._id,
        })

        // Create an array to store user information for related developers
        const usersInfo = []

        // Iterate through relatedApplications and fetch user information for each dev_id
        for (let j = 0; j < relatedApplications.length; j++) {
          const dev_id = relatedApplications[j].dev_id

          // Fetch user information for the dev_id from user_model
          const user = await user_model
            .findOne({ _id: dev_id })
            .select('-password')

          // If a user is found, add it to the usersInfo array
          if (user) {
            usersInfo.push(user.toObject())
          }
        }

        // Add the related applications with user information to the project object
        const projectWithApplications = {
          ...companySpecificProjects[i].toObject(),
          relatedApplications: { relatedApplications, usersInfo },
        }

        data.push(projectWithApplications)
      }
    }

    return res.status(200).json({ data })
  },
)

// export const getCompany = tryCatch(async (req: Request, res: any) => {
//   const projectId = req.params.id
//   const company = await Company_Project_model.findById(projectId)
//   if (!company) {
//     return res.status(404).json({ message: 'Company not found' })
//   }
//   res.status(200).json({ company })
// })

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
