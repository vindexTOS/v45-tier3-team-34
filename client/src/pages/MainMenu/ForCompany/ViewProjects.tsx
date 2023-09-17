// import React from "react";

import axios from 'axios'
import { useEffect } from 'react'
import { ProjectCardType } from '../../../common.types'
import ProjectCard from '../../../components/MainMenuPages/WhyDevConnectPage/SuccessStoriesCard'
import { UseMainContext } from '../../../context'
import NeedCard from './NeedCard'

export default function ViewProjects() {
  const { companyProjectsData, setCompanyProjectsData } = UseMainContext()

  const getAllProjects = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_GLOBAL_URL}/companies/projects`,
      )
      setCompanyProjectsData(res.data.projectsData)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllProjects()
  }, [])

  if (companyProjectsData && companyProjectsData.length > 0) {
    return (
      <div className="">
        <NeedCard />
        <p className="my-20 text-center before:text-xl text-muted dark:text-muted">
          View All Projects
        </p>
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 justify-between my-20">
          {companyProjectsData.map((val: ProjectCardType) => {
            return (
              <ProjectCard data={val} key={val._id} />
              // <p>Test</p>
            )
          })}
        </section>
      </div>
    )
  } else {
    return <div>Loading..</div>
  }
}
