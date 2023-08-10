import express from 'express'
import cors from 'cors'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import { config } from 'dotenv'
import connectDB from './db/connectDB'
import userRouter from './routes/user-routes'
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
