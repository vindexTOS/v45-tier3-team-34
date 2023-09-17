import React, { useEffect } from "react";
import { UseMainContext } from "../context";
import { TbPhotoX } from "react-icons/tb";
import userDefault from "../assets/photos/defaultPhoto.jpg";
import { MdCameraEnhance } from "react-icons/md";
import { storage } from "../firebase/firebase";
import {
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import Loading from "./Status/Loading";
const ImgUpload = ({
  avatar,
}: {
  avatar: string;
}) => {
  const { ImgState, ImgDispatch } =
    UseMainContext();
  const imgUpload = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (!ImgState.image) {
      let newImg = ImgState.image;
      let newHtmlImg = ImgState.htmlImg;
      if (e.target.files) {
        newImg = e.target.files[0];
        newHtmlImg = URL.createObjectURL(
          e.target.files[0]
        );
        ImgDispatch({
          type: "get-img",
          payload: newImg,
        });
        ImgDispatch({
          type: "get-html-img",
          payload: newHtmlImg,
        });
      }
    }
  };
  const imgUploadDrag = (
    e: React.DragEvent<HTMLLabelElement>
  ) => {
    e.preventDefault();
    let newImg = ImgState.image;
    let newHtmlImg = ImgState.htmlImg;
    newImg = e.dataTransfer.files[0];
    newHtmlImg = URL.createObjectURL(
      e.dataTransfer.files[0]
    );
    ImgDispatch({
      type: "get-img",
      payload: newImg,
    });
    ImgDispatch({
      type: "get-html-img",
      payload: newHtmlImg,
    });
  };

  const removeImgFromHtml = () => {
    ImgDispatch({
      type: "get-img",
      payload: null,
    });
    ImgDispatch({
      type: "get-html-img",
      payload: null,
    });
  };
  const uploadFileToFirebaseStorage =
    async () => {
      if (ImgState.image) {
        const storageRef = ref(
          storage,
          "connect-dev/" + ImgState.image.name
        );
        ImgDispatch({
          type: "set-img-loading",
          payload: true,
        });
        ImgDispatch({
          type: "set-img-error",
          payload: "",
        });
        try {
          const snapshot =
            await uploadBytesResumable(
              storageRef,
              ImgState.image
            );
          const downloadURL =
            await getDownloadURL(snapshot.ref);
          ImgDispatch({
            type: "set-img-url",
            payload: downloadURL,
          });
          ImgDispatch({
            type: "set-img-loading",
            payload: false,
          });

          console.log("succsess");
          console.log(downloadURL);
          removeImgFromHtml();
        } catch (error) {
          console.log(error);
          console.log("ერრორ");
        }
      } else {
        ImgDispatch({
          type: "set-img-error",
          payload: "Please Select The File!",
        });

        setTimeout(() => {
          ImgDispatch({
            type: "set-img-error",
            payload: "",
          });
        }, 5000);
      }
    };
  useEffect(() => {
    if (ImgState.image) {
      uploadFileToFirebaseStorage();
    }
  }, [ImgState.image]);
  const [hover, setHover] = React.useState(false);
  const handleDragOver = (e: any) => {
    e.preventDefault();
    setHover(true);
  };
  const handleDragLeave = (
    e: React.DragEvent<HTMLLabelElement>
  ) => {
    e.preventDefault();
    setHover(false);
  };
  const handleHoverOver = (
    e: React.MouseEvent<
      HTMLLabelElement,
      MouseEvent
    >
  ) => {
    e.preventDefault();
    setHover(true);
  };
  const handleHoverLeft = (
    e: React.MouseEvent<
      HTMLLabelElement,
      MouseEvent
    >
  ) => {
    e.preventDefault();
    setHover(false);
  };
  return (
    <div className="flex max_smm:w-[100%]   relative items-center justify-center max_md2:w-[40%]  rounded-[4px] cursor-pointer">
      <Loading loading={ImgState.imgLoading} />
      <label
        onDragLeave={(e) => handleDragLeave(e)}
        onDragOver={(e) => handleDragOver(e)}
        onDrop={(e) => imgUploadDrag(e)}
        onMouseOver={(e) => handleHoverOver(e)}
        onMouseLeave={(e) => handleHoverLeft(e)}
        className=" cursor-pointer "
        htmlFor="photo"
      >
        {hover && (
          <div className=" absolute  w-[130px] h-[130px] outline outline-1 outline-gray-300 p-2 rounded-[50%]  backdrop-blur-sm  bg-slate-100/40"></div>
        )}
        <div className="flex items-center justify-center">
          <img
            className={`  w-[130px]  h-[130px]  outline outline-1 outline-gray-300 p-2 rounded-[50%]  `}
            src={
              ImgState.imgUrl
                ? ImgState.imgUrl
                : avatar
                ? avatar
                : userDefault
            }
          />
          <MdCameraEnhance
            className={`text-[2.5rem] absolute     ${
              hover
                ? `text-green-800/70`
                : `text-green-700/40`
            }`}
          />
        </div>
        <input
          placeholder="Photo"
          onChange={(e) => imgUpload(e)}
          id="photo"
          className=" hidden  w-full text-sm  text-green-600  boxshaddow  border border-gray-300 rounded-lg cursor-pointer dark:text-gray-400 focus:outline-none bg-[#2e2d2d]   dark:border-gray-600 dark:placeholder-gray-400"
          type="file"
        />
      </label>
      {ImgState.htmlImg && (
        <TbPhotoX
          className="text-white text-[1.6rem] absolute right-80"
          onClick={() => removeImgFromHtml()}
        />
      )}
    </div>
  );
};

export default ImgUpload;
