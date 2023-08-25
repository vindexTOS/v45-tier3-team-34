import { UseMainContext } from '../context'
import { Link, useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'
import Succsess from '../components/Status/Success'
import User_profile_card from '../components/User/User_profile_card'
import User_Side from '../components/User/User_Side'
import User_main from '../components/User/User_main'
import { useEffect, useState } from 'react'
import axios from 'axios'
import { globalUrl } from '../global-vars/Api-url'
import User_layout from '../components/User/User_layout'
import User_Top from '../components/User/User_Top'
const Profile = () => {
  const { UserState, statusState, UserDispatch } = UseMainContext()
  const navigate = useNavigate()
  const cookies = new Cookies()

  const logOut = () => {
    cookies.remove('jwt_authorization')
    window.location.reload()
  }
  const [project, setProject] = useState()
  const getAllDevProjects = async () => {
    if (UserState.userData && UserState.userData.user) {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_GLOBAL_URL}/projects/${
            UserState.userData.user._id
          }`,
        )
        const data = res.data
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    getAllDevProjects()
  }, [UserState.userData])

  if (UserState.userData.user && UserState.userData.user.email) {
    //_id should not be accsasable on UI, _id will be used to create chat,update user infomration, post new projects etc

    return (
      <User_layout>
        <div className="flex  flex-col gap-2 p-2 items-center justify-center ">
          <User_Top
            userData={UserState.userData}
            userInfo={UserState.full_user_info.user_info}
          />
          <section className="flex w-[100%]">
            <User_Side userInfo={UserState.full_user_info} />
            <User_main
              userData={UserState.userData}
              userInfo={UserState.full_user_info.user_info}
            />
          </section>
          <Succsess success={statusState.success} />
        </div>
      </User_layout>
    )
  } else {
    return (
      <div>
        please <Link to="/login">log in </Link>or
        <Link to="/register">register </Link>
      </div>
    )
  }
}

export default Profile
