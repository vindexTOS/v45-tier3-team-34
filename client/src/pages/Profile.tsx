import { useParams } from 'react-router-dom'
import { UseMainContext } from '../context'
import { Link } from 'react-router-dom'
import Cookies from 'universal-cookie'
const Profile = () => {
  const cookies = new Cookies()

  const logOut = () => {
    cookies.remove('jwt_authorization')
    window.location.reload()
  }
  const { UserState } = UseMainContext()
  if (UserState.userData.user && UserState.userData.user.email) {
    const { avatar, date, email, role, userName, _id } = UserState.userData.user

    //_id should not be accsasable on UI, _id will be used to create chat,update user infomration, post new projects etc
    return (
      <div className="flex  flex-col gap-2 p-2 items-center justify-center">
        <h1>{userName}</h1>
        <h1>{email}</h1>
        <h1>{role}</h1>
        <h1>{date}</h1>
        <img src={avatar} className="w-[100px] h-[100px] " />
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
