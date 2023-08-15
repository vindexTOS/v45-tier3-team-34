import { useParams } from 'react-router-dom'
import { UseMainContext } from '../context'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'
import Succsess from '../components/Status/Success'
import User_profile_card from '../components/User/User_profile_card'
const Profile = () => {
  const cookies = new Cookies()

  const logOut = () => {
    cookies.remove('jwt_authorization')
    window.location.reload()
  }
  const { UserState, statusState } = UseMainContext()
  if (UserState.userData.user && UserState.userData.user.email) {
    //_id should not be accsasable on UI, _id will be used to create chat,update user infomration, post new projects etc
    return (
      <div className="flex  flex-col gap-2 p-2 items-center justify-center">
        <Succsess success={statusState.success} />

        <User_profile_card data={UserState.userData.user} />
        <button
          onClick={() => logOut()}
          className="bg-red-500 shadow-md text-white p-4  rounded-[6px]"
        >
          LOG OUT
        </button>
      </div>
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
