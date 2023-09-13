import { tryCatch } from '../../middleware/tryCatch'
import User from '../../model/User_models/user_model'
import chat_model from '../../model/chat_model'
import Chat from '../../model/chat_model'

import { Request } from 'express'

export const SendMessage = tryCatch(async (req: Request, res: any) => {
  const { senderId, receiverId, messageContent } = req.body

  const chatRoom = await Chat.findOne({
    participants: { $all: [senderId, receiverId] },
  })

  // await Chat.findByIdAndUpdate(chatRoom._id, {
  //   'userNotification.notification': true,
  //   'userNotification.receiverId': receiverId,
  // })
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
    receiverId: receiverId,
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
  return res.status(200).json({ messages, roomInfo: chatRoom })
})

export const GetUserChatRooms = tryCatch(async (req: Request, res: any) => {
  const { userId } = req.params
  const userChatRooms = await Chat.find({ participants: userId })

  // Extract relevant information from chat rooms and add userInfo for each room
  const chatRoomInfo = await Promise.all(
    userChatRooms.map(async (chatRoom) => {
      // Extract information you want to send to the client
      const participants = chatRoom.participants // List of participants
      const lastMessage = chatRoom.messages[chatRoom.messages.length - 1] // Get the last message in the chat room (if any)

      // Find the second user's information
      const secondUserId = participants.find(
        (participant) => String(participant) !== userId,
      )
      const secondUser = await User.findById(secondUserId)

      // Return relevant data including userInfo
      return {
        participants,
        lastMessage,
        userInfo: {
          id: secondUser._id,
          name: secondUser.userName,
          avatar: secondUser.avatar,
        },
      }
    }),
  )

  // Return the list of chat rooms with userInfo
  return res.status(200).json({ chatRooms: chatRoomInfo })
})

export const Notification = tryCatch(async (req: Request, res: any) => {
  const { receiverId } = req.params

  // Use Mongoose's find method to retrieve chats with the given receiverId
  const notifications = await Chat.find({
    'messages.receiverId': receiverId,
  })

  // Combine all messages into one array
  const allMessages = notifications.flatMap(
    (notification) => notification.messages,
  )

  // Filter the messages to include only those with isRead set to false
  const unreadMessages = allMessages.filter(
    (message) => !message.isRead && receiverId === String(message.receiverId),
  )

  return res.status(200).json(unreadMessages)
})

export const SeeNotifications = tryCatch(async (req: Request, res: any) => {
  const { receiverId } = req.body
 
  // Find all notifications with messages matching the receiverId
  const allNotifications = await Chat.find({
    'messages.receiverId': receiverId,
  })

  if (!allNotifications || allNotifications.length === 0) {
    return res.status(404).json({ error: 'Notifications not found' })
  }

  let messagesToUpdate = []

  for (const notification of allNotifications) {
    for (const message of notification.messages) {
      if (
        !message.isRead &&
        String(message.receiverId) === String(receiverId)
      ) {
        messagesToUpdate.push(message)
        message.isRead = true // Mark the message as read
      }
    }

    // Save the changes to the notification (including updated messages)
    await notification.save()
  }

  if (messagesToUpdate.length === 0) {
    return res.status(200).json({ message: 'No messages to update' })
  }

  return res.status(200).json({ msg: 'Notification seen' })
})
