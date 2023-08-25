import React from 'react'
import { dummy_projects } from './dummy-data'
import ProjectCard from './ProjectCard';

const ProjectsContainer = ({ id, }: {
  id: string,
  //projects?: any[]
}) => {
  //fetch here if id given,
  //if not (projects parsed ) , no need to fetch,use directly;

  //dummy data 
  const projects = dummy_projects;

  // may add same conditional stuff here if no pojects ???

  //if projects ??...
  return (
    <div>
      <section>
        <h1 className='text-2xl md:text-4xl font-semibold text-green-800 dark:text-green-500'>Browse available projects</h1>
        <p className='text-green-950 dark:text-white font-thin'>Currently <span className='text-green-600 dark:text-green-500'>{projects.length} Projects</span> are open</p>
      </section>
      {/* projects listing */}
      <section className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4  gap-6 '>
        {
          projects.map((project,i) => (
            <ProjectCard
              data={project}
              key={`${project.title}${i}`} />
          ))
        }
      </section>
    </div>
  )
}

export default ProjectsContainer