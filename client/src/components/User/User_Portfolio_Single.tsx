import React, { useRef } from 'react'
import useOutClick from '../../hooks/useOutClick'
import { useNavigate, useParams } from 'react-router-dom'
import { UseMainContext } from '../../context'

const User_Portfolio_Single = () => {
  const { PortfolioState } = UseMainContext()
  const { project_id } = useParams()
  const singleProject = PortfolioState.userProjects.projects.find(
    (val: any) => val._id === project_id,
  )
  const navigate = useNavigate()
  const ref = useRef<HTMLDivElement | null>(null)
  const navigateOut = () => {
    navigate(`/Developer/${singleProject.user_id}`)
  }
  useOutClick(ref, navigateOut)
  const {
    date,
    description,
    github,
    liveLink,
    photo,
    skills_used,
    title,
    videoLink,
  } = singleProject

  return (
    <div className="fixed z-50 inset-0 flex items-center justify-center backdrop-blur-md bg-gray-300/40">
      <div
        ref={ref}
        className="bg-white w-[800px]  rounded-lg p-6 shadow-xl overflow-hidden"
      >
        <h2 className="text-2xl font-semibold mb-4">{title}</h2>
        <div className="flex flex-col mb-4 py-10 items-center gap-10">
          <img
            src={photo}
            alt="Project"
            className=" w-[500px] h-[400px] object-cover mr-4 rounded transition-transform transform hover:scale-150 hover:z-50"
          />
          <div>
            <p className="mb-2 text-gray-600">Date: {date}</p>
            <p className="mb-2">{description}</p>
            <p className="mb-2 text-gray-600">
              Skills Used: {skills_used.join(', ')}
            </p>
            <p className="mb-2">
              <a href={github} className="text-blue-500 hover:underline">
                Github Repo
              </a>
            </p>
            {liveLink && (
              <p className="mb-2">
                <a href={liveLink} className="text-blue-500 hover:underline">
                  Live Link
                </a>
              </p>
            )}
          </div>
        </div>
        {videoLink && (
          <div className="text-gray-600">
            <h4 className="text-lg font-semibold mb-2">Video Demo</h4>
            <iframe
              title="Video Demo"
              width="100%"
              height="315"
              src={videoLink}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </div>
    </div>
  )
}

export default User_Portfolio_Single
