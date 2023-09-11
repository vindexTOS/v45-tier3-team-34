import React, { useRef, useState, useEffect } from 'react'
import Error from '../../components/Status/Error'
import LoadingComponent from '../../components/Status/Loading'
import Succsess from '../../components/Status/Success'
import { useNavigate, useParams } from 'react-router-dom'
import useOutClick from '../../hooks/useOutClick'
import axios from 'axios'
import useStatusMessages from '../../hooks/Status_hook'
import { UseMainContext } from '../../context'
export default function Application_form() {
  const { UserState, isUserLoggedIn } = UseMainContext()
  const [loading, setLoading] = useState(false)
  const { statusState, setError, setSuccess } = useStatusMessages({
    error: '',
    success: '',
  })

  const { project_id, company_id } = useParams()
  const navigate = useNavigate()
  const ref = useRef<HTMLDivElement | null>(null)

  const navigateOut = () => {
    navigate(`/company/projects/${project_id}`)
  }

  useOutClick(ref, navigateOut)
  const [description, setDescription] = useState('')
  const [bide, setBid] = useState('')

  const MakeApplication = async () => {
    try {
      if (UserState.userData.user && UserState.userData.user._id) {
        setLoading(true)
        const res = await axios.post(
          `${import.meta.env.VITE_GLOBAL_URL}/application/${project_id}`,
          { dev_id: UserState.userData.user._id, bide, description },
        )

        setSuccess(res.data.msg)
        setLoading(false)
        navigate(`/company/projects/${project_id}`)
      }
    } catch (error) {
      const err: any = error
      console.log(err)
      setError(err.response.data.msg)
      setLoading(false)
    }
  }

  const SendMessage = async () => {
    try {
      if (isUserLoggedIn) {
        const messageContent = `Hello, ${UserState.userData.user.userName} just made an application, please check your applications on dashboard`

        const res = await axios.post(
          `${import.meta.env.VITE_GLOBAL_URL}/chat/send-message`,
          {
            messageContent,
            senderId: UserState.userData.user._id,
            receiverId: company_id,
          },
        )
        console.log(res)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    SendMessage()
  }, [statusState.success])
  if (UserState.userData.user && UserState.userData.user._id) {
    return (
      <div className="flex items-center registrationBg     justify-center h-[900px] ">
        <div
          ref={ref}
          className=" w-[500px] mx-auto p-6 bg-white rounded-lg shadow-md wz"
        >
          <textarea
            className="w-full h-32 p-2 mb-4 border rounded-md resize-none"
            placeholder="Enter your proposal..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <div className="flex items-center mb-4">
            <input
              type="number"
              className="w-2/3 p-2 border rounded-l-md"
              placeholder="Enter your bid... EX. $50"
              value={bide}
              onChange={(e) => setBid(e.target.value)}
            />
            <button
              onClick={MakeApplication}
              className="w-1/3 bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600 transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </div>
        </div>

        <Error error={statusState.error} />
        <Succsess success={statusState.success} />
        <LoadingComponent loading={loading} />
      </div>
    )
  } else {
    return <div onClick={() => navigate('/register')}>Sign in or Sign Up</div>
  }
}
