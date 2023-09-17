// import React from 'react'
import { CgProfile } from "react-icons/cg";

import { AiOutlineProject } from "react-icons/ai";
import { GoArchive } from "react-icons/go";
import { TiMessages } from "react-icons/ti";
import { MdOutlineReviews } from "react-icons/md";
import {
  useNavigate,
  useLocation,
} from "react-router-dom";
const Profile_Dashboard = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const NavigationLinks = [
    {
      title: "Profile",
      Icon: CgProfile,
      link: "",
    },
    {
      title: "Current Projects",
      Icon: AiOutlineProject,
      link: "applications",
    },
    {
      title: "Archived Projects",
      Icon: GoArchive,
      link: "archived_project",
    },
    {
      title: "Messages",
      Icon: TiMessages,
      link: "messages",
    },
    {
      title: "Reviews",
      Icon: MdOutlineReviews,
      link: "reviews",
    },
  ];
  const style = {
    mainDiv: `flex flex-col py-10 gap-5 relative w-[30%]`,
  };
  return (
    <div className={style.mainDiv}>
      <div className="absolute top-8 -left-36">
        {NavigationLinks.map((val: any) => (
          // ?? profile link wont change ??

          <div
            className={`z-10 group items-center flex gap-2 hover:text-primary dark:hover:text-primary cursor-pointer text-[3rem] font-extrabold leading-none whitespace-nowrap ${
              location.pathname ===
              `/profile/${val.link}`
                ? "text-primary dark:text-primary"
                : "hover:text-muted text-[#d8d9dc] dark:text-[#404255]"
            }  `}
            key={`${val.link}`}
            onClick={() => navigate(val.link)}
          >
            <val.Icon className={`text-[3rem]`} />
            <h1 className="hidden md:block">
              {val.title}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile_Dashboard;
