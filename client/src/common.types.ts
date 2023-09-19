export type RegisterFormType = {
  userName?: string
  email: string
  password: string
  confirmPassword?: string
  avatar?: string
  role?: string
}

export type UserCardType = {
  avatar: string
  date: string
  email: string
  role: string
  userName: string
  _id: string
}

export type GeneralActionType = {
  payload: string
  type: string
}

export type RatingTypes = {
  rater_id: string
  rating_score: number
  user_id: string
  rating_review: string
  user: UserCardType
}

export type ProjectMetaData = {
  _id: string
  title: string
  reviews: number
  price: number
  description: string
  stars: number
  image: string
  category: string
  country: string
  difficulty: string
  skills: string[]
  skills_required?: string[]
  urgent: boolean
}
export type ProjectCardType = {
  _id?: string
  project: ProjectMetaData
  ratings: RatingTypes[]
}

export type UserType = {
  avatar: string
  date: string
  email: string
  password: null
  role: string
  userName: string
  _id: string
  __v?: number
}

export type CompanyProjectType = {
  category: string

  country: string

  description: string

  difficulty: string

  image: string
  price: string

  skills: string[]

  title: string

  urgent: string

  user_id: string
}

//company project type (from db)
export type ProjectType = {
  _id: {
    $oid: string
  } //?? to be reviewed according to gotten data
  user_id: string
  title: string
  description: string
  photo: string
  github: string
  liveLink: string
  videoLink: string
  skills_used: string[]
  //_id:string,
  __v?: number
  date?: string
}

// tiers (offers types)
export type tierCategoryType = 'basic' | 'standard' | 'premium'

export type TiersType = {
  type: tierCategoryType
  budget: number
  delivery_time: number
  deal_start_date: string
  n_revisions: number
  design_customisation: boolean
  content_upload: boolean
  responsive_design: boolean
}

export type ApplicationType = {
  _id: string
  company_id: string
  dev_id: string
  project_id: string
  description: string
  bide: number
  accepted: boolean
  projectFinnishSubmit: boolean
  projectFinnished: boolean
  userInfo: UserCardType
  applicationProject: CompanyProjectType
}
