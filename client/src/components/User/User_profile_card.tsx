import React, { FC, useReducer, useState } from 'react'
import { UserCardType, GeneralActionType } from '../../common.types'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import ImgUpload from '../Profile_photo_upload'
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
}

const User_profile_card = ({ data }: { data: UserCardType }): JSX.Element => {
  const { avatar, date, email, role, userName, _id } = data
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

  const [updateUser, setUpdateUser] = useState(false)

  const UpdateInput: FC<UpdateInputType> = ({ title, info, state, type }) => {
    return (
      <div className="flex gap-2">
        <label htmlFor={title}>{title}:</label>
        {updateUser ? (
          <input
            id={title}
            className="w-[150px] text-green-400 outline-2 outline outline-green-300 p-1 rounded-[8px]"
            value={state}
          />
        ) : (
          <h1 className="p-1">{info}</h1>
        )}
      </div>
    )
  }

  const [updateProfilePhoto, setUpdateProfilePhoto] = useState(false)
  return (
    <div className={style.mainDiv}>
      <div className="relative">
        {updateProfilePhoto ? (
          <ImgUpload avatar={avatar} />
        ) : (
          <img src={avatar} className={style.img} />
        )}
        <BsFillPlusCircleFill
          onClick={() => {
            setUpdateProfilePhoto(!updateProfilePhoto),
              setUpdateUser(!updateUser)
          }}
          className={style.plusIcon}
        />
      </div>
      <div className={style.infoDiv}>
        <UpdateInput
          title="User Name"
          info={userName}
          state={userUpdateState.UpdatedUserName}
          type="SET-NAME"
        />
        <UpdateInput
          title="Email"
          info={email}
          state={userUpdateState.UpdatedEmail}
          type="SET-EMAIL"
        />
        <UpdateInput
          title="Role"
          info={role}
          state={userUpdateState.UpdatedRole}
          type="SET-ROLE"
        />

        <h1>
          <span>Registration Date:</span>
          {date.slice(0, 10)}
        </h1>
      </div>

      {updateUser ? (
        <div className={style.btnWrapper}>
          <button
            className={style.cancelBtn}
            onClick={() => {
              setUpdateUser(false), setUpdateProfilePhoto(!updateProfilePhoto)
            }}
          >
            Cancel
          </button>
          <button className={style.saveBtn}>Save Update</button>
        </div>
      ) : (
        <button
          onClick={() => {
            setUpdateUser(!updateUser),
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
