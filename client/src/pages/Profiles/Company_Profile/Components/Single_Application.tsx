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
    <div className="absolute w-full min-w-fit h-fit  bg-white/90 dark:bg-slate-900/95 backdrop-blur-xl z-20 rounded-md p-4 shadow-md ">
      <div className="flex items-center space-x-4">
        <img src={avatar} alt={userName} className="w-12 h-12 rounded-full" />
        <div>
          <h2 className="text-lg sm:text-xl font-semibold">{userName}</h2>
          <p className="text-muted text-sm font-thin pl-1">{email}</p>
        </div>
      </div>
      <p className="mt-4">{description}</p>
      <div className="mt-4 ">
        <span
          className={`px-2 py-1 rounded ${
            accepted ? 'bg-primary text-white' : 'bg-red-500 text-white'
          }`}
        >
          {accepted ? 'Accepted' : 'Not Accepted'}
        </span>
        <span className="ml-2">{role}</span>
      </div>
      <div className="mt-4">
        <span className="font-semibold  text-slate-800 dark:text-slate-200 pr-0.5 ">
          Project ID:
        </span>{' '}
        {project_id}
      </div>
      <div className="mt-2">
        <span className="font-semibold  text-slate-800 dark:text-slate-200 pr-0.5 ">
          Project Finished:
        </span>{' '}
        {projectFinnished ? 'Yes' : 'No'}
      </div>

      <div className="mt-2">
        <span className="font-semibold  text-slate-800 dark:text-slate-200 pr-0.5 ">
          Bide:
        </span>{' '}
        ${bide}
      </div>

      <div className="mt-2">
        <span className="font-semibold  text-slate-800 dark:text-slate-200 pr-0.5 ">
          Date:
        </span>{' '}
        {date}
      </div>
      <div className="mt-4 flex justify-between">
        {!accepted && (
          <button
            onClick={AccaptApplication}
            className={`px-4 py-2 rounded ${
              accepted
                ? 'bg-primary text-white cursor-not-allowed'
                : 'bg-primary hover:bg-primary text-white'
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
