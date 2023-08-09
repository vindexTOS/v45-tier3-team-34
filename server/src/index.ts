import express from 'express'
import cors from 'cors'
import compression from 'compression'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import { config } from 'dotenv'
import connectDB from './db/connectDB'

config()
const app = express()

app.use(
  cors({
    credentials: true,
  }),
)
app.use(compression())
app.use(cookieParser())
app.use(bodyParser.json())
app.get('/', (req, res) => {
  return res.json({ msg: 'hi' })
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
