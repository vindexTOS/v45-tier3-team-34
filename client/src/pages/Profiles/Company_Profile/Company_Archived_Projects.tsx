import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { UseMainContext } from '../../../context'
import { ApplicationType } from '../../../common.types'

const Archived_Projects = () => {
  const { UserState, isUserLoggedIn } = UseMainContext()
  const [progressProject, setProjectProgress] = useState<ApplicationType[]>()

  const GetInProgress = async () => {
    try {
      if (isUserLoggedIn) {
        const res = await axios.get(
          `${import.meta.env.VITE_GLOBAL_URL}/application/inprogress/${
            UserState.userData.user._id
          }`,
        )

        const data = res.data
        setProjectProgress(data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    GetInProgress()
  }, [])

  if (progressProject && progressProject.length > 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-2 sm:p-4">
        {progressProject.map((val: ApplicationType) => (
          <div
            key={val._id}
            className="min-w-fit border border-gray-300 dark:border-slate-600 bg-white/80 dark:bg-slate-900/60 rounded-lg p-4 shadow-md"
          >
            <h2 className="text-lg sm:text-xl font-semibold">
              {val.applicationProject.title}
            </h2>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-slate-400">
              Company ID: {val.company_id}
            </p>
            <p className="text-xs sm:text-sm text-gray-700 dark:text-slate-400">
              Developer ID: {val.dev_id}
            </p>
            {val.applicationProject.image && (
              <img
                src={val.applicationProject.image}
                alt={val.applicationProject.title}
                className="mt-2 rounded object-cover"
              />
            )}
            <div className="mt-4 flex flex-wrap items-center">
              {val.userInfo && (
                <div className="flex items-center space-x-2">
                  <img
                    src={val.userInfo.avatar}
                    alt={val.userInfo.userName}
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="text-xs sm:text-sm">{val.userInfo.userName}</p>
                </div>
              )}
              {val.projectFinnished ? (
                <span className="ml-auto px-2 py-1 bg-primary text-white rounded-full text-xs">
                  Finished
                </span>
              ) : (
                <span className="ml-auto px-2 py-1  bg-red-500 text-white rounded-full text-xs">
                  Not Finished
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  } else {
    return (
      <div className="flex flex-col items-center justify-center  text-gray-500 w-[1000px] h-[500px]">
        <svg
          className="w-16 h-16 mb-4 text-gray-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m0-16s-8 0-8 8h16c0-8-8-8-8-8z"
          />
        </svg>
        <div className="text-lg font-semibold">
          You have no current projects
        </div>
      </div>
    )
  }
}

export default Archived_Projects
