import { UseMainContext } from '../../../context'
import Succsess from '../../../components/Status/Success'
import User_Side from '../../../components/User/User_Side'
import User_main from '../../../components/User/User_main'
import { useEffect } from 'react'
import axios from 'axios'
import User_layout from '../../../components/User/User_layout'
import User_Top from '../../../components/User/User_Top'
import LoginRegButton from '../../../components/Buttons/LoginRegButton'

const Profile = () => {
  const { UserState, statusState } = UseMainContext()

  const getAllDevProjects = async () => {
    if (UserState.userData && UserState.userData.user) {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_GLOBAL_URL}/projects/${
            UserState.userData.user._id
          }`,
        )
        const data = res.data
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
      <div className="flex flex-col gap-2 items-center justify-center  ">
        <User_Top
          isUser={false}
          userData={UserState.userData}
          userInfo={UserState.full_user_info.user_info}
        />
        <section className="flex flex-col md:flex-row w-full">
          <User_Side userInfo={UserState.full_user_info} />
          <User_main
            isUser={false}
            userData={UserState.userData}
            userInfo={UserState.full_user_info.user_info}
          />
        </section>

        <Succsess success={statusState.success} />
      </div>
    )
  } else {
    return (
      <div>
        <LoginRegButton />
      </div>
    )
  }
}

export default Profile
