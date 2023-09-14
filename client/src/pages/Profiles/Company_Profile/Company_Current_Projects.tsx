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
      <div className="h-[900px] w-[100%] p-10 overflow-y-scroll  flex  flex-col gap-2 p-2 items-center justify-start  relative w-[1000px] laptop:w-[100%]  max_xl1500:w-[900px]  max_xl:w-[700px] max_lg:w-[100%]">
        {projects.map((val: any) => (
          <Current_Project_Card key={val._id} data={val} />
        ))}
      </div>
    )
  } else {
    return <div>NO applications</div>
  }
}

export default Current_Projects
