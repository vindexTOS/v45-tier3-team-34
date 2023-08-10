import { Request, Response, NextFunction } from 'express'
import { RouteHandler } from '../types/Controller-types'
export const tryCatch = (
  controller: (req: Request, res: Response) => Promise<void>,
) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    await controller(req, res)
  } catch (error) {
    return next(error)
  }
}
