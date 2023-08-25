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


export type ProjectCardType = {
  id: string,
    title: string,
    reviews: number,
    price: number,
    description: string,
    stars: number,
    img: string,
}
