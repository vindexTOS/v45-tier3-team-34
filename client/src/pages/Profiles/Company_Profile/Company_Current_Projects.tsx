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
      <div className="h-[500px] p-4 md:p-10 overflow-y-auto ">
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
