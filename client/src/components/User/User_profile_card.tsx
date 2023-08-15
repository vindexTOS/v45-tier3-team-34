import React, { FC, useReducer, useState } from 'react'
import { UserCardType, GeneralActionType } from '../../common.types'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import axios from 'axios'
import ImgUpload from '../Profile_photo_upload'
import { globalUrl } from '../../global-vars/Api-url'
import useStatusMessages from '../../hooks/Status_hook'
import { UseMainContext } from '../../context'
import Error from '../Status/Error'
import Succsess from '../Status/Success'
import Loading from '../Status/Loading'
type UpdateUserSateType = {
  UpdatedAvatar: string
  UpdatedDate: string
  UpdatedEmail: string
  UpdatedRole: string
  UpdatedUserName: string
}

type UpdateInputType = {
  title: string
  info: string
  state: string
  type: string
  userUpdateDispatch: React.Dispatch<GeneralActionType>
  userUpdateState: UpdateUserSateType
}

const UpdateInput: FC<UpdateInputType> = ({
  title,
  info,
  state,
  type,
  userUpdateDispatch,
  userUpdateState,
}) => {
  const { UserState } = UseMainContext()
  return (
    <div className="flex gap-2">
      <label htmlFor={title}>{title}:</label>
      {UserState.updateUser ? (
        <input
          type="text"
          id={title}
          className="w-[150px] text-green-400 outline-2 outline outline-green-300 p-1 rounded-[8px]"
          value={userUpdateState[state as keyof UpdateUserSateType]}
          onChange={(e) =>
            userUpdateDispatch({ type: type, payload: e.target.value })
          }
        />
      ) : (
        <h1 className="p-1">{info}</h1>
      )}
    </div>
  )
}

const User_profile_card = ({ data }: { data: UserCardType }): JSX.Element => {
  const { avatar, date, email, role, userName, _id } = data
  const { ImgState, UserState, UserDispatch } = UseMainContext()
  const style = {
    mainDiv: `flex flex-col w-[500px] items-center justify-around  gap-2 bg-white px-10 py-4 shadow-md rounded-[9px] text-gray-400 `,
    img: `  h-[200px] outline outline-2 p-2 rounded-[50%]`,
    plusIcon: `text-[#fd5564] hover:text-[#ef4a75] text-[2rem] absolute bottom-1 right-[7px] cursor-pointer `,
    infoDiv: `flex flex-col gap-3 w-[90%] `,
    btn: `bg-gray-700 hover:bg-gray-600 text-white p-2 rounded-[5px]`,
    btnWrapper: `flex gap-2`,
    cancelBtn: `p-2  bg-red-500 text-white rounded-[9px]`,
    saveBtn: `p-2 bg-green-400 text-white rounded-[9px]`,
  }

  const initialUserState: UpdateUserSateType = {
    UpdatedAvatar: avatar,
    UpdatedDate: date,
    UpdatedEmail: email,
    UpdatedRole: role,
    UpdatedUserName: userName,
  }
  const userUpdateReducer = (
    state: UpdateUserSateType,
    action: GeneralActionType,
  ): UpdateUserSateType => {
    switch (action.type) {
      case 'SET-NAME':
        return {
          ...state,
          UpdatedUserName: state.UpdatedUserName = action.payload,
        }
      case 'SET-EMAIL':
        return { ...state, UpdatedEmail: state.UpdatedEmail = action.payload }
      case 'SET-ROLE':
        return { ...state, UpdatedRole: state.UpdatedRole = action.payload }

      default:
        return state
    }
  }

  const [userUpdateState, userUpdateDispatch] = useReducer(
    userUpdateReducer,
    initialUserState,
  )

  const [updateProfilePhoto, setUpdateProfilePhoto] = useState(false)
  const [updateLoading, setUpdateLoading] = useState(false)
  const { statusState, setError, setSuccess } = useStatusMessages({
    error: '',
    success: '',
  })
  const UpdateUserProfile = async () => {
    let sendObj = {
      userName: userUpdateState.UpdatedUserName,
      avatar: ImgState.imgUrl ? ImgState.imgUrl : userUpdateState.UpdatedAvatar,
      email: userUpdateState.UpdatedEmail,
      role: userUpdateState.UpdatedRole,
    }
    setUpdateLoading(true)
    try {
      const response = await axios.patch(`${globalUrl}/crud/${_id}`, sendObj)
      const data = response.data
      setSuccess(data.msg)
      setUpdateLoading(false)
    } catch (error) {
      const err: any = error
      setError(err.message)
      setUpdateLoading(false)
    }
  }

  return (
    <div className={style.mainDiv}>
      <Error error={statusState.error} />
      <Succsess success={statusState.success} />
      <Loading loading={updateLoading} />
      <div className="relative">
        {updateProfilePhoto ? (
          <ImgUpload avatar={avatar} />
        ) : (
          <img src={avatar} className={style.img} />
        )}
        <BsFillPlusCircleFill
          onClick={() => {
            setUpdateProfilePhoto(!updateProfilePhoto),
              UserDispatch({
                type: 'user-update',
                payload: !UserState.updateUser,
              })
          }}
          className={style.plusIcon}
        />
      </div>
      <div className={style.infoDiv}>
        <UpdateInput
          title="User Name"
          info={userName}
          state="UpdatedUserName"
          type="SET-NAME"
          userUpdateDispatch={userUpdateDispatch}
          userUpdateState={userUpdateState}
        />
        <UpdateInput
          title="Email"
          info={email}
          state="UpdatedEmail"
          type="SET-EMAIL"
          userUpdateDispatch={userUpdateDispatch}
          userUpdateState={userUpdateState}
        />
        <UpdateInput
          title="Role"
          info={role}
          state="UpdatedRole"
          type="SET-ROLE"
          userUpdateDispatch={userUpdateDispatch}
          userUpdateState={userUpdateState}
        />

        <h1>
          <span>Registration Date:</span>
          {date.slice(0, 10)}
        </h1>
      </div>

      {UserState.updateUser ? (
        <div className={style.btnWrapper}>
          <button
            className={style.cancelBtn}
            onClick={() => {
              UserDispatch({ type: 'user-update', payload: false }),
                setUpdateProfilePhoto(!updateProfilePhoto)
            }}
          >
            Cancel
          </button>
          <button className={style.saveBtn} onClick={UpdateUserProfile}>
            Save Update
          </button>
        </div>
      ) : (
        <button
          onClick={() => {
            UserDispatch({
              type: 'user-update',
              payload: !UserState.updateUser,
            }),
              setUpdateProfilePhoto(!updateProfilePhoto)
          }}
          className={style.btn}
        >
          Edit Info
        </button>
      )}
    </div>
  )
}

export default User_profile_card
