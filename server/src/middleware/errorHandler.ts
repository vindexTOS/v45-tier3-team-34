import { Request, Response, NextFunction } from 'express'

export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  return res
    .status(500)
    .json({ msg: 'Internal server error', error: error.message })
}
