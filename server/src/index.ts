import express from 'express'
import cors from 'cors'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import { config } from 'dotenv'
import connectDB from './db/connectDB'
import userRouter from './routes/user-routes'
import projectRouter from './routes/project-routes'
import companyProjectRouter from './routes/company-project-routes'
import companyRouter from './routes/company-router'
import RaitingRouter from './routes/raiting-routes'
config()
const app = express()

app.use(
  cors({
    credentials: true,
  }),
)
app.use(compression())
app.use(cookieParser())
app.use(express.json())
app.use('/', userRouter)
app.use('/projects', projectRouter)
app.use('/companies/projects', companyProjectRouter)
app.use('/company', companyRouter)
app.use('/rating', RaitingRouter)

// catch all

app.use((req, res) => {
  res.status(404).json({ msg: 'Page not found' })
})
const port = 8080 || process.env.ENV_PORT

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  } catch (error) {
    throw new Error(error)
  }
}

start()
