import express from 'express'

const ChatRouter = express.Router()
import {
  SendMessage,
  GetMessages,
} from '../controller/chat-controllers/chat-controller'
//  prefix /chat
ChatRouter.route('/send-message').post(SendMessage)
ChatRouter.route('/get-message').get(GetMessages)

export default ChatRouter
