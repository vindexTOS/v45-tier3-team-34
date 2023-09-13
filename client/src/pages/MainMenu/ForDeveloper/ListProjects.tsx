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
      <div className="text-xl text-center text-muted dark:text-muted">
        {companyProjectsData.map(
          (val: CompanyProjectType) => {
            return (
              <div>
                <h1>{val.title}</h1>
                <img src={val.image} />
              </div>
            );
          }
        )}

      </div>
    )
  } else {
    return <div>Loading..</div>
  }
}
