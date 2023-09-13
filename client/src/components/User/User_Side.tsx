import React from 'react'
import { UseMainContext } from '../../context'
import { DiGithubAlt } from 'react-icons/di'
import { AiOutlineLinkedin } from 'react-icons/ai'
import { SiWebmoney } from 'react-icons/si'
const User_Side = ({
  userInfo,
  isUser,
}: {
  userInfo: any
  isUser?: boolean
}) => {
  const { UserState } = UseMainContext()

  const style = {
    mainDiv: `w-[25%] laptop:w-[300px] z-40 border-r-[1px] border-gray-300  flex items-center justify-start py-10 flex-col gap-2   max_xml:flex-row      max_xml:outline-none   max_xml:border-none   max_xml:w-[100%]   max_xml:justify-center max_md:flex-col  `,
    aTeg: ` laptop:w-[10rem]   flex items-center justify-center py-2  dark:bg-green-500  w-[15rem] border-2 border-orange-900/40 rounded-[39px] bg-yellow-600/10  gap-2 hover:bg-green-600/10`,
  }
  if (userInfo && userInfo.user_info) {
    const { website, linkedin, github } = userInfo.user_info

    return (
      <div className={style.mainDiv}>
        {github && (
          <a href={github} target="_blank" className={style.aTeg}>
            <DiGithubAlt className="text-[1.2rem] text-yellow-900   dark:text-white " />

            <h1 className="text-yellow-900 text-[1rem] dark:text-white">
              GitHub
            </h1>
          </a>
        )}
        {linkedin && (
          <a href={linkedin} target="_blank" className={style.aTeg}>
            <AiOutlineLinkedin className="text-[1.2rem] text-yellow-900 dark:text-white " />

            <h1 className="text-yellow-900 text-[1rem] dark:text-white">
              Linkedin
            </h1>
          </a>
        )}
        {website && (
          <a href={website} target="_blank" className={style.aTeg}>
            <SiWebmoney className="text-[1.2rem] text-yellow-900 dark:text-white" />

            <h1 className="text-yellow-900 text-[1rem] dark:text-white">
              Personal Website
            </h1>
          </a>
        )}
      </div>
    )
  } else {
    return <div>Login</div>
  }
}

export default User_Side
