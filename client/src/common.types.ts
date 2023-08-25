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
