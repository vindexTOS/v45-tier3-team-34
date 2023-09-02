import React, { useState, useEffect } from 'react'
import { dummy_projects } from './dummy-data'
import ProjectCard from './ProjectCard'
import axios from 'axios'
import { ProjectCardType } from '../../../common.types'

const ProjectsContainer = ({
  id,
}: {
  id: string
  //projects?: any[]
}) => {
  //fetch here if id given,
  //if not (projects parsed ) , no need to fetch,use directly;

  //dummy data

  // may add same conditional stuff here if no pojects ???

  //if projects ??...

  const [projects, setProjects] = useState<any>()
  const GetAllProjects = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_GLOBAL_URL}/companies/projects`,
      )

      console.log(res.data)
      setProjects(res.data.projectsData)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    GetAllProjects()
  }, [])
  if (projects && projects.length > 0) {
    return (
      <div>
        <section className="my-6">
          <h1 className="text-2xl md:text-4xl font-semibold text-green-800 dark:text-green-500">
            Browse available projects
          </h1>
          <p className="text-green-950 dark:text-white font-thin">
            Currently{' '}
            <span className="text-green-600 dark:text-green-500">
              {projects.length} Projects
            </span>{' '}
            are open
          </p>
        </section>
        {/* projects listing */}
        <section
          onClick={() => console.log(projects)}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-6 "
        >
          {projects.map((project: ProjectCardType) => (
            <ProjectCard data={project} key={project.project._id} />
          ))}
        </section>
      </div>
    )
  } else {
    return <div>Loading</div>
  }
}

export default ProjectsContainer
