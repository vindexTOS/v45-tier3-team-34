export const errorHandler = (error: any, req: any, res: any, next: any) => {
  return res
    .status(500)
    .json({ msg: 'Internal server error', error: error.message })
}
