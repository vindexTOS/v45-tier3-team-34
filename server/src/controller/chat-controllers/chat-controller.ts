import { tryCatch } from '../../middleware/tryCatch'
import User from '../../model/User_models/user_model'
import Chat from '../../model/chat_model'

import { Request } from 'express'

export const SendMessage = tryCatch(async (req: Request, res: any) => {
  const { senderId, receiverId, messageContent } = req.body

  const chatRoom = await Chat.findOne({
    participants: { $all: [senderId, receiverId] },
  })
  if (!chatRoom) {
    const newChatRoom = new Chat({
      participants: [senderId, receiverId],
      messages: [],
    })

    await newChatRoom.save()
  }
  const newMessage = {
    sender: senderId,
    content: messageContent,
    timestamp: new Date(),
  }
  await Chat.updateOne(
    { participants: { $all: [senderId, receiverId] } },
    { $push: { messages: newMessage } },
  )
  return res.status(201).json({ message: 'Message sent successfully' })
})

export const GetMessages = tryCatch(async (req: Request, res: any) => {
  const senderId = req.query.senderId
  const receiverId = req.query.receiverId
  const chatRoom = await Chat.findOne({
    participants: { $all: [senderId, receiverId] },
  })

  if (!chatRoom) {
    return res.status(404).json({ message: 'Chat room not found' })
  }
  const messages = chatRoom.messages

  return res.status(200).json({ messages })
})
