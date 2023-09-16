import React, { useEffect, useState } from 'react'
import { UseMainContext } from '../../../context'
import axios from 'axios'
import Current_Project_Card from './Components/Current_Project_Card'

const Current_Projects = () => {
  const { UserState, isUserLoggedIn, statusState } = UseMainContext()

  const [projects, setProjects] = useState<any>()

  const GetAllCurrentProject = async () => {
    try {
      if (isUserLoggedIn) {
        const res = await axios.get(
          `${import.meta.env.VITE_GLOBAL_URL}/companies/projects/each/${
            UserState.userData.user._id
          }`,
        )

        const data = res.data
        setProjects(data.data)
      }
    } catch (error) {
      const err: any = error
      console.log(err.message)
    }
  }

  useEffect(() => {
    GetAllCurrentProject()
  }, [statusState.success])

  if (isUserLoggedIn && projects && projects.length > 0) {
    return (

      <div className="h-fit min-h-[500px]   overflow-auto  flex  flex-wrap gap-2 p-2  justify-start  relative w-full laptop:w-[100%]  max_xl1500:w-[900px]  max_xl:w-[700px] max_lg:w-[100%]">
        {projects.map((val: any) => (
          <Current_Project_Card key={val._id} data={val} />
        ))}
      </div>
    )
  } else {
    return   <div className="flex flex-col items-center justify-center  text-gray-500 w-[1000px] h-[500px]">
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
  }
}

export default Current_Projects
