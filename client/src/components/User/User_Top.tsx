import { useState } from "react";
import { DateTime } from "luxon";
import { FaMapMarkerAlt } from "react-icons/fa";
import Edit_Profile_Photo from "../Dev_Portfolio/Edit_Profile_Photo";
import { MdModeEdit } from "react-icons/md";
// Assuming you have retrieved user data including their timezone from the database

const User_Top = ({
  userData,
  userInfo,
  isUser,
}: {
  userData: any;
  userInfo: any;
  isUser: boolean;
}) => {
  const [editName, setEditName] = useState(false);
  const style = {
    section: `flex items-center justify-start  px-1 md:px-2 py-5 border-b border-gray-300 w-full`,
    img: `h-12 w-12 md:h-20 md:w-20   lg:h-24 lg:w-24  rounded-full lg:object-cover border`,
    imgDiv: `flex gap-1 items-center justify-around`,
    nameHeader: `text-green-800 dark:text-green-500 text-lg md:text-2xl font-semibold`,
    timeZone: ` flex flex-col gap-2  text-xs sm:text-sm md:text-lg font-thin`,
  };
  function getUserTimezone(time: string) {
    // const userTimeZoneString = Intl.DateTimeFormat().resolvedOptions().timeZone
    //   console.log("User's timezone:", userTimeZone)

    // Get the user's current time based on their timezone
    const userCurrentTime =
      DateTime.now().setZone(time);

    const currentTime = `${userCurrentTime.toFormat(
      "yyyy-MM-dd HH:mm:ss"
    )}`;

    return currentTime;
  }
  if (userData && userData.user && userInfo) {
    const {
      avatar,
      date,
      email,
      role,
      userName,
    } = userData.user;
    const { firstName, lastName, userTimeZone } =
      userInfo;

    const currentTime =
      getUserTimezone(userTimeZone);

    const userNameUpdate = async () => {};

    return (
      <section
        onClick={() => console.log(userData.user)}
        className={style.section}
      >
        <div className={style.imgDiv}>
          <div className="relative">
            <div
              className={` ${
                isUser && "hidden"
              } absolute text-green-600 text-[1.2rem] bg-white p-1 rounded-[50%] outline outline-2 outline-gray-300 top-[-5px] left-[-5px]`}
            >
              <MdModeEdit />
            </div>
            <img
              onClick={() =>
                getUserTimezone(userTimeZone)
              }
              src={`${avatar}`}
              className={style.img}
            />
          </div>
          <div className={style.timeZone}>
            {!editName ? (
              <h1 className={style.nameHeader}>
                {firstName && lastName
                  ? `${firstName} ${lastName.slice(
                      0,
                      1
                    )}.`
                  : userName}
              </h1>
            ) : (
              <input />
            )}
            <div className="flex flex-col sm:flex-row gap-1 text-green-800 dark:text-white items-center justify-center">
              <div className="flex gap-1 items-center">
                <FaMapMarkerAlt />
                <p>{userTimeZone}</p>
              </div>
              <p className="text-sm">
                {currentTime.slice(10, 16)} local
                time
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } else {
    return <div>Login </div>;
  }
};

export default User_Top;
