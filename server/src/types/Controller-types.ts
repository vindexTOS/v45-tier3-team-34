export type RouteHandler = (req: Request, res: Response) => Promise<void>

export interface CompanyProject {
  user_id: string
  title: string
  description: string
  skills?: string[]
  category?: string
  image?: string
  country?: string
  urgent?: boolean
  price: string
  difficulty?: 'low' | 'medium' | 'high'
}
