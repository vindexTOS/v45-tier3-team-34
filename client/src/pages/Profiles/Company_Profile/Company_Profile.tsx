import React, {
  useState,
  useEffect,
  useRef,
} from "react";
import User_layout from "../../../components/User/User_layout";
import { MdModeEdit } from "react-icons/md";
import { DateTime } from "luxon";
import { UseMainContext } from "../../../context";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { SiWebmoney } from "react-icons/si";
import { IoIosAddCircleOutline } from "react-icons/io";
import Succsess from "../../../components/Status/Success";
import LoadingComponent from "../../../components/Status/Loading";
import User_info_update_input from "../../../components/User/User_Info_Update_Input";
import { useNavigate } from "react-router-dom";
import Edit_Profile_Photo from "../../../components/Dev_Portfolio/Edit_Profile_Photo";
import axios from "axios";
import useOutClick from "../../../hooks/useOutClick";
import User_Top from "../../../components/User/User_Top";
import User_Side from "../../../components/User/User_Side";
import User_main from "../../../components/User/User_main";
const Company_Profile = () => {
  const {
    UserState,
    statusState,
    UserStateUpdate,
  } = UseMainContext();
  const style = {
    section: `flex items-center justify-between w-[100%] i px-4 py-5 border-b-[1px] border-gray-300 `,
    img: `h-[80px] w-[80px] rounded-[50%]`,
    imgDiv: `flex gap-1 items-start justify-around `,
    nameHeader: `text-gray-800 text-[1.6rem] font-bold`,
    timeZone: ` flex flex-col gap-2`,
    mainDiv: `w-[25%] border-r-[1px] border-gray-300  flex items-center justify-start py-10 flex-col gap-2 `,
    aTeg: `flex items-center justify-center py-2  w-[15rem] border-2 border-orange-900/40 rounded-[39px] bg-yellow-600/10  gap-2 hover:bg-primary-hover`,
    main: `w-[75%] h-[1000px]`,
    // headerDiv: `flex  justify-around text-gray-700 text-[1.3rem] font-bold py-3`,
    // topSection: ` border-b-[2px] px-4 py-6 flex flex-col  gap-5`,
    headerDiv: `w-full flex flex-wrap sm:flex-nowrap justify-between sm:justify-start gap-x-10 gap-y-4  items-start md:item-center text-green-800 dark:text-white text-[1.3rem] `,
    topSection: `w-full  px-4 py-6 flex flex-col  gap-5 `,
  };
  const navigate = useNavigate();
  const [editName, setEditName] = useState(false);
  function getUserTimezone() {
    // const userTimeZoneString = Intl.DateTimeFormat().resolvedOptions().timeZone
    //   console.log("User's timezone:", userTimeZone)

    // Get the user's current time based on their timezone
    const userCurrentTime =
      DateTime.now().setZone(
        UserState.full_user_info.userTimeZone
      );

    const currentTime = `${userCurrentTime.toFormat(
      "yyyy-MM-dd HH:mm:ss"
    )}`;

    return currentTime;
  }
  const currentTime = getUserTimezone();
  const [PhotoEdit, setPhotoEdit] =
    useState<boolean>(false);
  const photEditRef = useRef(null);
  const PhotoEditFun = () => {
    setPhotoEdit(false);
  };
  useOutClick(photEditRef, PhotoEditFun);

  if (
    UserState.userData &&
    UserState.full_user_info.user_info
  ) {
    const {
      companyName,
      company_id,
      hrPay,
      linkedin,
      summary,
      userTimeZone,
      website,
      title,
    } = UserState.full_user_info.user_info;
    const {
      avatar,
      date,
      email,
      role,
      userName,
    } = UserState.full_user_info.user;
    console.log(
      "role: ",
      UserState.full_user_info.user
    );
    return (
      // <div
      //   ref={photEditRef}
      //   // onClick={() => console.log(UserStateUpdate)}
      //   className="flex  flex-col gap-2 p-2 items-center justify-center relative "
      // >
      //   {PhotoEdit && <Edit_Profile_Photo setPhotoEdit={setPhotoEdit} />}
      //   <section
      //     //   onClick={() => console.log(UserState.full_user_info.user_info)}
      //     className={style.section}
      //   >
      //     <div className={style.imgDiv}>
      //       <div className="relative">
      //         <div
      //           onClick={() => setPhotoEdit(!PhotoEdit)}
      //           className={`  absolute text-green-600 text-[1.2rem] bg-white p-1 rounded-[50%] outline outline-2 outline-gray-300 top-[-5px] left-[-5px]`}
      //         >
      //           <MdModeEdit />
      //         </div>
      //         <img src={`${avatar}`} className={style.img} />
      //       </div>
      //       <div className={style.timeZone}>
      //         {!editName ? (
      //           <h1 className={style.nameHeader}>
      //             {companyName ? `${companyName.slice(0, 1)}.` : userName}
      //           </h1>
      //         ) : (
      //           <input />
      //         )}
      //         <div className="flex gap-1 text-gray-500 items-center justify-center">
      //           <FaMapMarkerAlt />
      //           <p>{userTimeZone}</p>-
      //           <p>{currentTime.slice(10, 16)} local time</p>
      //         </div>
      //       </div>
      //     </div>
      //     <div
      //       onClick={() => navigate('/company_project')}
      //       className="flex items-center justify-center gap-3 h-[100%] cursor-pointer "
      //     >
      //       <h1 className="text-[1.2rem] text-gray-500 font-bold">
      //         Create Project Listing
      //       </h1>
      //       <IoIosAddCircleOutline className="text-[2rem] text-green-400 hover:text-green-300" />
      //     </div>
      //   </section>
      //   <section className="flex w-[100%]">
      //     {/* side */}
      //     <div className={style.mainDiv}>
      //       {linkedin && (
      //         <a href={linkedin} target="_blank" className={style.aTeg}>
      //           <AiOutlineLinkedin className="text-[1.2rem] text-yellow-900 cursor-pointer" />

      //           <h1 className="text-yellow-900 text-[1rem]">Linkedin</h1>
      //         </a>
      //       )}
      //       {website && (
      //         <a href={website} target="_blank" className={style.aTeg}>
      //           <SiWebmoney className="text-[1.2rem] text-yellow-900" />

      //           <h1 className="text-yellow-900 text-[1rem]">
      //             Personal Website
      //           </h1>
      //         </a>
      //       )}
      //     </div>
      //     {/* side */}
      //     {/* main */}
      //     <div className={style.main}>
      //       <LoadingComponent loading={UserStateUpdate.loading} />
      //       <section className={style.topSection}>
      //         <div className={style.headerDiv}>
      //           <User_info_update_input
      //             isUser={false}
      //             initialValue={companyName}
      //             type="companyName"
      //             obj={{ companyName: UserStateUpdate.companyName }}
      //             newValue={UserStateUpdate.companyName}
      //             link="company"
      //           />
      //           <User_info_update_input
      //             isUser={false}
      //             initialValue={`$${hrPay}.00/hr`}
      //             type="hrPay"
      //             obj={{ hrPay: UserStateUpdate.hrPay }}
      //             newValue={UserStateUpdate.hrPay}
      //             style="w-[4rem]"
      //             link="company"
      //           />
      //         </div>
      //         <div>
      //           <User_info_update_input
      //             isUser={false}
      //             initialValue={summary}
      //             type="summary"
      //             obj={{ summary: UserStateUpdate.summary }}
      //             newValue={UserStateUpdate.summary}
      //             textArea={true}
      //             style=" w-[600px] h-[300px]"
      //             link="company"
      //           />
      //         </div>
      //       </section>
      //     </div>
      //     {/* main */}
      //   </section>

      //   <Succsess success={statusState.success} />
      // </div>
      <div className="flex p-5 flex-col gap-2 items-center justify-center  relative ">
        <button
          onClick={() =>
            navigate(`/company_project`)
          }
          className="bg-primary hover:bg-primary-hover text-white font-semibold py-2 px-4 rounded-lg flex items-center absolute top-4 right-3 "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          Add project
        </button>
        <User_Top
          isUser={false}
          userData={UserState.userData}
          userInfo={
            UserState.full_user_info.user_info
          }
        />
        <section className="flex flex-col md:flex-row w-full ">
          <User_Side
            userInfo={UserState.full_user_info}
          />
          <LoadingComponent
            loading={UserStateUpdate.loading}
          />
          <section className={style.topSection}>
            <div className={style.headerDiv}>
              <User_info_update_input
                isUser={false}
                initialValue={companyName}
                type="title"
                obj={{
                  companyName:
                    UserStateUpdate.title,
                }}
                newValue={UserStateUpdate.title}
              />
              <User_info_update_input
                isUser={false}
                initialValue={`$${
                  hrPay ?? "NAN"
                }.00/hr`}
                type="hrPay"
                obj={{
                  hrPay: UserStateUpdate.hrPay,
                }}
                newValue={UserStateUpdate.hrPay}
                style="w-[4rem]"
              />
            </div>
            <div>
              <User_info_update_input
                isUser={false}
                initialValue={summary}
                type="summary"
                obj={{
                  summary:
                    UserStateUpdate.summary,
                }}
                newValue={UserStateUpdate.summary}
                textArea={true}
                style=" w-[600px] h-[300px]"
              />
            </div>
          </section>
        </section>
      </div>
    );
  } else {
    return <div>Loadin..</div>;
  }
};

export default Company_Profile;
function UpdateUserInfo(obj: any, arg1: any) {
  throw new Error("Function not implemented.");
}
