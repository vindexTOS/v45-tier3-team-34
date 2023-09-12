import express from 'express'

const ChatRouter = express.Router()
import {
  SendMessage,
  GetMessages,
  GetUserChatRooms,
  SeeNotifications,
  Notification,
} from '../controller/chat-controllers/chat-controller'
//  prefix /chat
ChatRouter.route('/send-message').post(SendMessage)
ChatRouter.route('/get-message').get(GetMessages)
ChatRouter.route('/get-user-chats/:userId').get(GetUserChatRooms)
ChatRouter.route('/see-notifications').post(SeeNotifications)
ChatRouter.route('/get-notifications/:receiverId').get(Notification)

export default ChatRouter
