import React from "react";
import { UseMainContext } from "../../context";
import { DiGithubAlt } from "react-icons/di";
import { AiOutlineLinkedin } from "react-icons/ai";
import { SiWebmoney } from "react-icons/si";
const User_Side = ({
  userInfo,
  isUser,
}: {
  userInfo: any;
  isUser?: boolean;
}) => {
  const { UserState } = UseMainContext();

  const style = {
    mainDiv: `w-full md:w-fit px-8 md:border-r-[1px] border-gray-300 dark:border-slate-600  flex items-center justify-center md:justify-start py-10 flex-col gap-2 `,
    aTeg: `flex items-center justify-center py-2 w-full md:w-fit min-w-[120px] border-2 border-green-900/40 dark:border-gray-600 rounded-3xl bg-primary dark:bg-gray-300/10 dark:hover:bg-gray-400/40  gap-2 hover:bg-green-700/50  hover:shadow-sm dark:shadow-gray-100/50 text-secondary hover:text-slate-200 dark:text-green-600 hover:dark:text-gray-300 hover:scale-x-105`,
  };
  if (userInfo && userInfo.user_info) {
    const { website, linkedin, github } =
      userInfo.user_info;

    return (
      <div className={style.mainDiv}>
        {github && (
          <a
            href={github}
            target="_blank"
            className={style.aTeg}
          >
            <DiGithubAlt className="text-[1.2rem]" />

            <h1 className=" text-sm ">GitHub</h1>
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            className={style.aTeg}
          >
            <AiOutlineLinkedin className="text-[1.2rem]" />

            <h1 className=" text-sm">Linkedin</h1>
          </a>
        )}
        {website && (
          <a
            href={website}
            target="_blank"
            className={style.aTeg}
          >
            <SiWebmoney className="text-lg " />

            <h1 className=" text-sm"> Website</h1>
          </a>
        )}
      </div>
    );
  } else {
    return (
      <div className={style.mainDiv}>
        Loading...
      </div>
    );
  }
};

export default User_Side;
