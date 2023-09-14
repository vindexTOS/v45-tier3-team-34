import { tryCatch } from '../../middleware/tryCatch'
import { Request, Response } from 'express'
import project_application_model from '../../model/project_application_model'
import company_project_model from '../../model/Company_models/company_project_model'
import user_model from '../../model/User_models/user_model'
export const MakeCompanyApplication = tryCatch(
  async (req: Request, res: any) => {
    const { project_id } = req.params
    const { dev_id, description, bide } = req.body
    const userIsDev = await user_model.findById({ _id: dev_id })

    if (userIsDev.role !== 'Developer') {
      return res
        .status(401)
        .json({ msg: 'Create Developer account if you want to make a bide' })
    }
    const isProjectExist = await company_project_model.findById(project_id)

    if (!isProjectExist) {
      return res.status(406).json({ msg: 'Project Does Not Exist' })
    }
    const company_id = isProjectExist.user_id

    if (company_id === dev_id) {
      return res
        .status(403)
        .json({ msg: 'You cannot apply to your own project' })
    }
    const didUserMadeApplication = await project_application_model.findOne({
      dev_id,
    })

    if (didUserMadeApplication.project_id === project_id) {
      return res.status(406).json({ msg: 'You already made bide' })
    }

    await project_application_model.create({
      company_id,
      dev_id,
      project_id,
      description,
      bide,
    })

    return res.status(200).json({ msg: 'Your application has been submited' })
  },
)

export const GetSingleProjectApplication = tryCatch(
  async (req: Request, res: any) => {
    const { project_id } = req.params

    const findProject = await project_application_model.find({
      project_id,
    })

    if (!findProject) {
      return res.status(404).json({ msg: 'Does not exist' })
    }

    return res.status(200).json({ data: findProject })
  },
)

export const GetCompanyApplications = tryCatch(
  async (req: Request, res: any) => {
    const { company_id } = req.params

    const companyProjects = await project_application_model.find({ company_id })

    if (!companyProjects) {
      return res.status(404).json({ msg: 'Company has no projects' })
    }

    return res.status(200).json({ companyProjects })
  },
)

export const RejectCandidat = tryCatch(async (req: Request, res: any) => {
  const { dev_id } = req.params
  const { company_id, project_id } = req.body
  const application = await project_application_model.findOne({ dev_id })

  if (
    application.company_id !== company_id &&
    project_id !== application.project_id
  ) {
    return res.status(403).json({ msg: 'Not authorized' })
  }

  await project_application_model.findByIdAndDelete(application._id)

  return res.status(200).json({ msg: 'application has been deleted' })
})

export const AccaptCandidat = tryCatch(async (req: Request, res: any) => {
  const { application_id } = req.params
  const { dev_id } = req.body

  const findProject = await project_application_model.findOne({
    _id: application_id,
  })

  if (!findProject) {
    return res.status(400).json({ msg: 'Project does not exist' })
  }

  if (findProject.dev_id !== dev_id) {
    return res.status(403).json({ msg: 'not authorized' })
  }

  await project_application_model.findByIdAndUpdate(application_id, {
    accepted: true,
  })
  return res.status(200).json({ msg: 'Application Accapted' })
})
export const devFinnishedProject = tryCatch(async (req: Request, res: any) => {
  const { application_id } = req.params
  const { dev_id } = req.body

  const findProject = await project_application_model.findOne({
    _id: application_id,
  })

  if (!findProject) {
    return res.status(400).json({ msg: 'Project does not exist' })
  }

  if (findProject.dev_id !== dev_id) {
    return res.status(403).json({ msg: 'not authorized' })
  }

  await project_application_model.findByIdAndUpdate(application_id, {
    projectFinnishSubmit: true,
  })

  return res.status(200).json({ msg: 'Finnished submited' })
})

export const devFinnishedRejected = tryCatch(async (req: Request, res: any) => {
  const { application_id } = req.params
  const { dev_id } = req.body

  const findProject = await project_application_model.findOne({
    _id: application_id,
  })

  if (!findProject) {
    return res.status(400).json({ msg: 'Project does not exist' })
  }

  if (findProject.dev_id !== dev_id) {
    return res.status(403).json({ msg: 'not authorized' })
  }

  await project_application_model.findByIdAndUpdate(application_id, {
    projectFinnishSubmit: false,
  })

  return res.status(200).json({ msg: 'Finnished submited' })
})

export const projectFinnished = tryCatch(async (req: Request, res: any) => {
  const { application_id } = req.params
  const { dev_id } = req.body

  const findProject = await project_application_model.findOne({
    _id: application_id,
  })

  if (!findProject) {
    return res.status(400).json({ msg: 'Project does not exist' })
  }

  if (findProject.dev_id !== dev_id) {
    return res.status(403).json({ msg: 'not authorized' })
  }

  await project_application_model.findByIdAndUpdate(application_id, {
    projectFinnished: true,
  })

  return res.status(200).json({ msg: 'Project has been finnished' })
})

export const InProgress = tryCatch(async (req: Request, res: any) => {
  const { company_id } = req.params

  // Find projects with the specified criteria
  const findAllCompanyProjects = await project_application_model.find({
    company_id: company_id,
    accepted: true,
    projectFinnished: false,
    projectFinnishSubmit: false,
  })

  if (!findAllCompanyProjects) {
    return res.status(400).json({ msg: 'Application does not exist' })
  }

  const data = []

  // Iterate through the found projects and fetch related information
  for (let i = 0; i < findAllCompanyProjects.length; i++) {
    const project = findAllCompanyProjects[i]

    // Fetch user information for the dev_id from user_model
    const user = await user_model
      .findOne({ _id: project.dev_id })
      .select('-password')
    const applicationProject = await company_project_model.findById(
      project.project_id,
    )
    // Create an object combining project and user information
    const combinedProject = {
      ...project.toObject(),
      applicationProject,
      userInfo: user ? user.toObject() : null,
    }

    data.push(combinedProject)
  }

  return res.status(200).json(data)
})

export const InProgressDev = tryCatch(async (req: Request, res: any) => {
  const { dev_id } = req.params

  // Find projects with the specified criteria
  const findAllCompanyProjects = await project_application_model.find({
    dev_id: dev_id,
    accepted: true,
    projectFinnished: false,
    projectFinnishSubmit: false,
  })

  if (!findAllCompanyProjects) {
    return res.status(400).json({ msg: 'Application does not exist' })
  }

  const data = []

  // Iterate through the found projects and fetch related information
  for (let i = 0; i < findAllCompanyProjects.length; i++) {
    const project = findAllCompanyProjects[i]

    // Fetch user information for the dev_id from user_model
    const user = await user_model
      .findOne({ _id: project.dev_id })
      .select('-password')
    const applicationProject = await company_project_model.findById(
      project.project_id,
    )
    // Create an object combining project and user information
    const combinedProject = {
      ...project.toObject(),
      applicationProject,
      userInfo: user ? user.toObject() : null,
    }

    data.push(combinedProject)
  }

  return res.status(200).json(data)
})

export const GetArchivedProjects = tryCatch(async (req: Request, res: any) => {
  const { company_id } = req.params

  const archivedProjects = await project_application_model.find({
    company_id,
    projectFinnished: true, // Add this condition
  })
  if (!archivedProjects) {
    return res.status(406).json({ msg: 'Your archive is empity' })
  }

  return res.status(200).json(archivedProjects)
})
export const GetArchivedProjectsDev = tryCatch(
  async (req: Request, res: any) => {
    const { dev_id } = req.params

    const archivedProjects = await project_application_model.find({
      dev_id,
    })
    if (!archivedProjects) {
      return res.status(406).json({ msg: 'Your archive is empity' })
    }

    return res.status(200).json({ data: archivedProjects })
  },
)
