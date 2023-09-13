import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { UseMainContext } from '../../../../context'
import LoadingComponent from '../../../../components/Status/Loading'
const Single_Application = ({ data }: { data: any }) => {
  const {
    statusState,
    setError,
    setSuccess,
    isUserLoggedIn,
    UserState,
  } = UseMainContext()
  const [loading, setLoading] = useState(false)
  const {
    userName,
    avatar,
    description,
    application_id,
    project_id,
    projectFinnished,
    projectFinnishSubmit,
    dev_id,
    company_id,
    bide,
    accepted,
    date,
    email,
    role,
  } = data
  const [isSend, setIsSend] = useState(false)
  const AccaptApplication = async () => {
    try {
      setLoading(true)
      const res = await axios.patch(
        `${
          import.meta.env.VITE_GLOBAL_URL
        }/application/accapt/${application_id}`,
        {
          dev_id,
        },
      )

      setSuccess(res.data.msg)
      setLoading(false)
      setIsSend(true)
    } catch (error) {
      const err: any = error
      setLoading(false)
      setError(err.response.data.msg)
      console.log(err)
    }
  }

  const SendMessage = async () => {
    try {
      if (isUserLoggedIn) {
        const messageContent = `Hello, ${userName} You have been accapted for my project `

        const res = await axios.post(
          `${import.meta.env.VITE_GLOBAL_URL}/chat/send-message`,
          {
            messageContent,
            senderId: UserState.userData.user._id,
            receiverId: dev_id,
          },
        )
      }
    } catch (error) {
      console.log(error)
    }
  }

  const RejectApplication = async () => {
    try {
      setLoading(true)
      const res = await axios.patch(
        `${import.meta.env.VITE_GLOBAL_URL}/application/reject/${dev_id}`,
        {
          company_id,
          project_id,
        },
      )

      setSuccess(res.data.msg)
      setLoading(false)
    } catch (error) {
      const err: any = error
      setLoading(false)
      setError(err.response.data.msg)
      console.log(err)
    }
  }

  useEffect(() => {
    if (isSend) {
      SendMessage()
    }
  }, [isSend])

  return (
    <div className="absolute w-[500px] h-[500px] bg-white rounded-[20px] p-4 shadow-lg">
      <div className="flex items-center space-x-4">
        <img src={avatar} alt={userName} className="w-12 h-12 rounded-full" />
        <div>
          <h2 className="text-xl font-semibold">{userName}</h2>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
      <p className="mt-4">{description}</p>
      <div className="mt-4">
        <span
          className={`px-2 py-1 rounded ${
            accepted ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}
        >
          {accepted ? 'Accepted' : 'Not Accepted'}
        </span>
        <span className="ml-2">{role}</span>
      </div>
      <div className="mt-4">
        <span className="font-bold">Project ID:</span> {project_id}
      </div>
      <div className="mt-2">
        <span className="font-bold">Project Finished:</span>{' '}
        {projectFinnished ? 'Yes' : 'No'}
      </div>

      <div className="mt-2">
        <span className="font-bold">Bide:</span> ${bide}
      </div>

      <div className="mt-2">
        <span className="font-bold">Date:</span> {date}
      </div>
      <div className="mt-4 flex justify-between">
        {!accepted && (
          <button
            onClick={AccaptApplication}
            className={`px-4 py-2 rounded ${
              accepted
                ? 'bg-green-500 text-white cursor-not-allowed'
                : 'bg-green-500 hover:bg-green-600 text-white'
            }`}
          >
            Accept
          </button>
        )}
        <button
          onClick={RejectApplication}
          className={`px-4 py-2 rounded   bg-red-500 hover:bg-red-600 text-white bg-red-500 text-white cursor-pointer  `}
        >
          Reject
        </button>
      </div>
      <LoadingComponent loading={loading} />
    </div>
  )
}

export default Single_Application
