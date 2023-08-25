import React from 'react'
import { UseMainContext } from '../../context'
import Cookies from 'universal-cookie'
import { CiLogout } from 'react-icons/ci'
import { AiOutlineUser } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export default function User_drop_down() {
  const { UserState } = UseMainContext()
  const cookies = new Cookies()
  const style = {
    mainDiv: ` flex flex-col items-center justify-center w-[200px] h-[200px] bg-white shadow-md rounded-[20px] absolute right-[-5rem] top-[5rem]`,
    imgWrapper: `flex flex-col gap-2 items-center `,
    img: `w-[60px] h-[60px] rounded-[50%]`,
    btnWrapper: `flex flex-col  pt-2   items-start w-[100%] `,
    btn: `flex items-center justify-start text-[1.1rem] gap-2  w-[100%] px-4  py-1 hover:bg-green-100/40`,
  }
  const navigate = useNavigate()
  const logOut = () => {
    cookies.remove('jwt_authorization')
    window.location.reload()
  }

  if (UserState.userData && UserState.userData.user) {
    const { avatar, userName } = UserState.userData.user
    return (
      <div className={style.mainDiv}>
        <div className={style.imgWrapper}>
          <img className={style.img} src={avatar} />
          <h1>{userName}</h1>
        </div>
        <div className={style.btnWrapper}>
          <button onClick={() => navigate('/profile')} className={style.btn}>
            <AiOutlineUser />
            Profile
          </button>
          <button className={style.btn} onClick={logOut}>
            <CiLogout /> Log out
          </button>
        </div>
      </div>
    )
  } else {
    return <div>Nothing</div>
  }
}
