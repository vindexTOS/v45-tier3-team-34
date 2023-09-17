// import React from "react";
import { UseMainContext } from "../../context";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import { TbLogout2 } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";

export default function User_drop_down() {
  const { UserState } = UseMainContext();
  const cookies = new Cookies();
  const style = {
    mainDiv: `flex flex-col items-center justify-between py-8 w-[225px] bg-[#F3F4F6] dark:bg-slate-900 shadow-md rounded-[10px] absolute right-0 top-[3.5rem]`,
    imgWrapper: `flex flex-col items-center w-[100%]`,
    img: `w-[70px] h-[70px] rounded-[50%]`,
    btnWrapper: `flex flex-col pt-2 items-start w-[100%]`,
    btn: `flex items-center justify-start text-[1rem] gap-4 w-[90%] mx-auto px-4 py-1 hover:bg-white dark:hover:bg-gray-950 hover:text-primary dark:text-muted dark:hover:text-primary hover:font-semibold`,
  };
  const navigate = useNavigate();
  const logOut = () => {
    cookies.remove("jwt_authorization");
    window.location.reload();
  };
  const navigateToProfile = () => {
    if (
      UserState.userData &&
      UserState.userData.user
    ) {
      if (
        UserState.userData.user.role ===
        "Company/Startup"
      ) {
        navigate("/company_profile");
      } else if (
        UserState.userData.user.role ===
        "Developer"
      ) {
        navigate("/profile");
      }
    }
  };
  if (
    UserState.userData &&
    UserState.userData.user
  ) {
    const { avatar, userName, role } =
      UserState.userData.user;
    return (
      <div
        onClick={() =>
          console.log(UserState.userData)
        }
        className={style.mainDiv}
      >
        <div className={style.imgWrapper}>
          <img
            className={style.img}
            src={avatar}
          />
          <h1 className="font-semibold mt-3">
            {userName}
          </h1>
          <p className="text-xs text-primary">
            {role}
          </p>
        </div>
        <div className="border border-t-primary my-4 w-[90%]"></div>
        <div className={style.btnWrapper}>
          <button
            onClick={navigateToProfile}
            className={style.btn}
          >
            <CgProfile />
            Profile
          </button>
          <button
            className={style.btn}
            onClick={logOut}
          >
            <TbLogout2 /> Log out
          </button>
        </div>
      </div>
    );
  } else {
    return <div>Nothing</div>;
  }
}
