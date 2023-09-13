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
      <div className="flex  flex-col gap-2 p-2 items-center justify-center relative w-[1000px] laptop:w-[100%]  max_xl1500:w-[900px]  max_xl:w-[700px] max_lg:w-[100%]">
        {progressProject.map((val: ApplicationType) => (
          <div
            key={val._id}
            className="border border-gray-300 rounded p-4 shadow-md"
          >
            <h2 className="text-xl font-semibold">
              {val.applicationProject.title}
            </h2>
            <p className="text-sm text-gray-500">
              Company ID: {val.company_id}
            </p>
            <p className="text-sm text-gray-500">Developer ID: {val.dev_id}</p>
            {val.applicationProject.image && (
              <img
                src={val.applicationProject.image}
                alt={val.applicationProject.title}
                className="mt-2 rounded"
              />
            )}
            <div className="mt-4 flex items-center">
              {val.userInfo && (
                <div className="flex items-center space-x-2">
                  <img
                    src={val.userInfo.avatar}
                    alt={val.userInfo.userName}
                    className="w-8 h-8 rounded-full"
                  />
                  <p className="text-sm">{val.userInfo.userName}</p>
                </div>
              )}
              {val.projectFinnished ? (
                <span className="ml-auto px-2 py-1 bg-green-500 text-white rounded-full text-xs">
                  Finished
                </span>
              ) : (
                <span className="ml-auto px-2 py-1 bg-red-500 text-white rounded-full text-xs">
                  Not Finished
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Archived_Projects
