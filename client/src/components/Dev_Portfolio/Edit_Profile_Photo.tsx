import axios from 'axios'
import { UseMainContext } from '../../context'
import ImgUpload from '../Profile_photo_upload'
import { useState } from 'react'
import LoadingComponent from '../Status/Loading'
export default function Edit_Profile_Photo({
  setPhotoEdit,
}: {
  setPhotoEdit: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const {
    UserState,
    isUserLoggedIn,
    ImgState,

    setError,
    setSuccess,
  } = UseMainContext()

  const [loading, setLoading] = useState<boolean>(false)

  const updateUserAvatar = async () => {
    try {
      if (isUserLoggedIn) {
        setLoading(true)
        const res = await axios.patch(
          `${import.meta.env.VITE_GLOBAL_URL}/crud/${
            UserState.userData.user._id
          }`,
          { avatar: ImgState.imgUrl },
        )

        const data = res.data.msg

        setSuccess(data)
        setPhotoEdit(false)
        setLoading(false)
      }
    } catch (error) {
      const err: any = error
      setError(err.message)
      setLoading(false)
    }
  }

  if (isUserLoggedIn) {
    return (
      <div className="w-[100%] h-[100%] rounded-[20px] absolute flex items-center justify-center  backdrop-blur-md  bg-gray-300/10  ">
        <div className="w-[500px] h-[400px] bg-white  rounded-[20px] shaddow-md flex items-center justify-center flex-col gap-2">
          <h1 className="text-[2rem]">Change user photo</h1>
          <ImgUpload avatar={UserState.userData.user.avatar} />
          <button
            onClick={updateUserAvatar}
            className="bg-green-400 text-white text-[2rem] px-4 py-1 rounded-[12px] hover:bg-green-300 "
          >
            Change
          </button>
        </div>
        <LoadingComponent loading={loading} />
      </div>
    )
  } else {
    return <div>Login register </div>
  }
}
