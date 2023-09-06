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
const socketIo = require('socket.io')
import http from 'http'
import applicationRouter from './routes/application-routes'
import ChatRouter from './routes/chat-router'
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
app.use('/application', applicationRouter)
app.use('/chat', ChatRouter)
// catch all

app.use((req, res) => {
  res.status(404).json({ msg: 'Page not found' })
})

const server = http.createServer(app)

const io = socketIo(server, {
  pingTimeout: 60000,
  cors: {
    origin: '*',
  },
})

const port = 8080 || process.env.ENV_PORT

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL)

    io.on('connection', (socket: any) => {
      console.log('A user connected to socket.io')
      socket.on('message', (data: any) => {
        console.log('Received message:', data)

        // Send the message back to the client
        socket.emit('message', `Server: ${data}`)
      })

      // socket.on('setup', (userData: any) => {
      //   socket.join(userData._id)
      //   socket.emit('connected')
      // })

      socket.on('join chat', (room: any) => {
        socket.join(room)
        console.log('user joined room ' + room)
      })

      socket.on('message', async (newMessageReceived: any) => {
        console.log(newMessageReceived)

        const messages = {
          sender: newMessageReceived.senderId,
          content: newMessageReceived.messageContent,
        }

        io.emit('new message', messages)
      })
    })

    server.listen(port, () => {
      console.log(`Server is running on port ${port}`)
    })
  } catch (error) {
    throw new Error(error)
  }
}

start()
