import React from 'react'
import { useParams } from 'react-router-dom'

const Project_Page = () => {
  const params = useParams()
  //may be changed with category id , or samething else
  const { project_id } = params
  // fetch projecct data (info) by it id here;

  return <div>Project_Page {project_id}</div>
}

export default Project_Page
