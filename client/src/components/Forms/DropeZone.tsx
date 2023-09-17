import React, { useEffect } from 'react'
import { UseMainContext } from '../../context'
import { storage } from '../../firebase/firebase'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import LoadingComponent from '../Status/Loading'
const DropeZone = () => {
  const { ImgState, ImgDispatch } = UseMainContext()

  const imgUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!ImgState.image) {
      let newImg = ImgState.image
      let newHtmlImg = ImgState.htmlImg
      if (e.target.files) {
        newImg = e.target.files[0]
        newHtmlImg = URL.createObjectURL(e.target.files[0])
        ImgDispatch({ type: 'get-img', payload: newImg })
        ImgDispatch({ type: 'get-html-img', payload: newHtmlImg })
      }
    }
  }
  const imgUploadDrag = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    let newImg = ImgState.image
    let newHtmlImg = ImgState.htmlImg
    newImg = e.dataTransfer.files[0]
    newHtmlImg = URL.createObjectURL(e.dataTransfer.files[0])
    ImgDispatch({ type: 'get-img', payload: newImg })
    ImgDispatch({ type: 'get-html-img', payload: newHtmlImg })
  }

  const removeImgFromHtml = () => {
    ImgDispatch({ type: 'get-img', payload: null })
    ImgDispatch({ type: 'get-html-img', payload: null })
  }
  const uploadFileToFirebaseStorage = async () => {
    if (ImgState.image) {
      const storageRef = ref(storage, 'connect-dev/' + ImgState.image.name)
      ImgDispatch({ type: 'set-img-loading', payload: true })
      ImgDispatch({ type: 'set-img-error', payload: '' })
      try {
        const snapshot = await uploadBytesResumable(storageRef, ImgState.image)
        const downloadURL = await getDownloadURL(snapshot.ref)
        ImgDispatch({ type: 'set-img-url', payload: downloadURL })
        ImgDispatch({ type: 'set-img-loading', payload: false })

        removeImgFromHtml()
      } catch (error) {
        console.log(error)
      }
    } else {
      ImgDispatch({ type: 'set-img-error', payload: 'Please Select The File!' })

      setTimeout(() => {
        ImgDispatch({ type: 'set-img-error', payload: '' })
      }, 5000)
    }
  }
  useEffect(() => {
    if (ImgState.image) {
      uploadFileToFirebaseStorage()
    }
  }, [ImgState.image])
  const [hover, setHover] = React.useState(false)
  const handleDragOver = (e: any) => {
    e.preventDefault()
    setHover(true)
  }
  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault()
    setHover(false)
  }
  const handleHoverOver = (
    e: React.MouseEvent<HTMLLabelElement, MouseEvent>,
  ) => {
    e.preventDefault()
    setHover(true)
  }
  const handleHoverLeft = (
    e: React.MouseEvent<HTMLLabelElement, MouseEvent>,
  ) => {
    e.preventDefault()
    setHover(false)
  }

  return (
    <div
      onClick={() => console.log(ImgState)}
      className="flex items-center  bg-gray justify-center w-[100%]"
    >
      <LoadingComponent loading={ImgState.imgLoading} />
      <label
        onDragLeave={(e) => handleDragLeave(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => imgUploadDrag(e)}
        onMouseOver={(e) => handleHoverOver(e)}
        onMouseLeave={(e) => handleHoverLeft(e)}
        htmlFor="dropzone-file"
        className={`flex flex-col items-center justify-center ${
          ImgState.imgUrl ? 'w-[95%] h-[500px]' : ' w-[95%] h-[150px]'
        } border-2 border-green-300 border-dashed rounded-lg cursor-pointer bg-white   hover:bg-gray-100  `}
      >
        <div className="flex flex-col w-[100%] h-[500px] items-center justify-center pt-5 pb-6">
          {ImgState.imgUrl ? (
            <img
              className="w-[100%] h-[100%] rounded-[9px] object-contain"
              src={ImgState.imgUrl}
            />
          ) : (
            <svg
              className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
          )}
          <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
            <span className="font-semibold">Click to upload</span> or drag and
            drop
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            SVG, PNG, JPG or GIF (MAX. 800x400px)
          </p>
        </div>
        <input
          onChange={(e) => imgUpload(e)}
          id="dropzone-file"
          type="file"
          className="hidden"
        />
      </label>
    </div>
  )
}

export default DropeZone
