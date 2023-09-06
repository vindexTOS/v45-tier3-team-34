import express from 'express'

const ChatRouter = express.Router()
import {
  SendMessage,
  GetMessages,
  GetUserChatRooms,
} from '../controller/chat-controllers/chat-controller'
//  prefix /chat
ChatRouter.route('/send-message').post(SendMessage)
ChatRouter.route('/get-message').get(GetMessages)
ChatRouter.route('/get-user-chats/:userId').get(GetUserChatRooms)

export default ChatRouter
