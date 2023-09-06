import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { UseMainContext } from '../../context'
import io, { Socket } from 'socket.io-client'
import { DefaultEventsMap } from '@socket.io/component-emitter'
const ENDPOINT = import.meta.env.VITE_GLOBAL_URL
var socket: Socket<DefaultEventsMap, DefaultEventsMap>
var selectedChatCompere
const Chat = () => {
  const { userId } = useParams()
  const { UserState, isUserLoggedIn } = UseMainContext()
  const [userInfo, setUserInfo] = useState<any>()
  const [messages, setMessages] = useState<any>([])
  const [messageContent, setMessagesContent] = useState('')
  const [socketConnected, setSocketConnected] = useState(false)
  const socket: Socket<DefaultEventsMap, DefaultEventsMap> = io(ENDPOINT)

  const SendMessage = async () => {
    try {
      if (isUserLoggedIn && userId) {
        const res = await axios.post(
          `${import.meta.env.VITE_GLOBAL_URL}/chat/send-message`,
          {
            messageContent,
            senderId: UserState.userData.user._id,
            receiverId: userId,
          },
        )
        console.log(res)

        socket.emit('message', {
          messageContent,
          senderId: UserState.userData.user._id,
          receiverId: userId,
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  const GetMessages = async () => {
    try {
      if (isUserLoggedIn && userId) {
        const res = await axios.get(
          `${import.meta.env.VITE_GLOBAL_URL}/chat/get-message?senderId=${
            UserState.userData.user._id
          }&receiverId=${userId}`,
        )

        const data = res.data.messages
        setMessages(data)
        console.log(res)
        socket.emit('join chat', userId)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const GetSingleDev = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_GLOBAL_URL}/user/info/${userId}`,
      )
      setUserInfo(res.data)

      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    GetSingleDev()
  }, [userId])
  useEffect(() => {
    GetMessages()
    selectedChatCompere = messages
  }, [UserState])
  useEffect(() => {
    // Initialize and connect to the Socket.IO server
    if (isUserLoggedIn) {
      socket.on('connection', () => {
        console.log('Connected to socket.io')
        console.log('User ID:', UserState.userData.user._id)
        setSocketConnected(true)
      })

      // Debugging: Add a listener for 'disconnect' event
    }
  }, [isUserLoggedIn, socket])
  useEffect(() => {
    socket.on('new message', (data: any) => {
      console.log(data)
      setMessages((prevMessages: any) => [...prevMessages, data])
    })
  }, [])

  if (userInfo && userInfo.user && userInfo.user.userName) {
    return (
      <div
        onClick={() => console.log(messages)}
        style={{
          backgroundColor: 'white',
          height: '600px',
          width: '500px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
        }}
      >
        <div onClick={GetMessages} style={{ color: 'red' }}>
          you are talking to{userInfo.user.userName}
        </div>
        <div style={{ color: 'black' }}>
          {messages &&
            messages.length > 0 &&
            messages.map((val: any) => {
              const { sender, content } = val
              return (
                <div
                  key={val._id}
                  style={{
                    backgroundColor:
                      sender === UserState.userData.user._id ? 'green' : 'blue',
                  }}
                >
                  {content}
                </div>
              )
            })}
        </div>

        <div>
          <input
            onChange={(e) => setMessagesContent(e.target.value)}
            placeholder="send"
          />
          <button onClick={SendMessage}> Send</button>
        </div>
      </div>
    )
  } else {
    return <div>NO </div>
  }
}

export default Chat
