// import React from "react";

import axios from 'axios'
import { UseMainContext } from '../../../context'
import { useEffect } from 'react'
import { ProjectCardType } from '../../../common.types'
import ProjectCard from '../../../components/ProjectsListingPage/Projects/ProjectCard'
export default function ListProjects() {
  const { companyProjectsData, setCompanyProjectsData } = UseMainContext()

  const getAllProjects = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_GLOBAL_URL}/companies/projects`,
      )
      setCompanyProjectsData(res.data.projectsData)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllProjects()
  }, [])

  if (companyProjectsData && companyProjectsData.length > 0) {
    return (
      <div className="text-xl text-center text-light-muted dark:text-dark-muted transition-all duration-500 delay-100 ease-in-out">
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-between">
          {companyProjectsData.map((val: ProjectCardType) => {
            return <ProjectCard data={val} key={val._id} />
          })}
        </section>
      </div>
    )
  } else {
    return <div>Loading..</div>
  }
}
