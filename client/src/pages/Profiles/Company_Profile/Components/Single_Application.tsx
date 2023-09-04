import React from 'react'

const Single_Application = ({ data }: { data: any }) => {
  const {
    userName,
    avatar,
    description,
    application_id,
    project_id,
    projectFinnished,
    projectFinnishSubmit,
    dev_id,
    company_id,
    bide,
    accepted,
    date,
    email,
    role,
  } = data
  return (
    <div className="absolute w-[500px] h-[500px] bg-white rounded-[20px] p-4 shadow-lg">
      <div className="flex items-center space-x-4">
        <img src={avatar} alt={userName} className="w-12 h-12 rounded-full" />
        <div>
          <h2 className="text-xl font-semibold">{userName}</h2>
          <p className="text-gray-600">{email}</p>
        </div>
      </div>
      <p className="mt-4">{description}</p>
      <div className="mt-4">
        <span
          className={`px-2 py-1 rounded ${
            accepted ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}
        >
          {accepted ? 'Accepted' : 'Not Accepted'}
        </span>
        <span className="ml-2">{role}</span>
      </div>
      <div className="mt-4">
        <span className="font-bold">Project ID:</span> {project_id}
      </div>
      <div className="mt-2">
        <span className="font-bold">Project Finished:</span>{' '}
        {projectFinnished ? 'Yes' : 'No'}
      </div>
      <div className="mt-2">
        <span className="font-bold">Project Finish Submission:</span>{' '}
        {projectFinnishSubmit}
      </div>
      <div className="mt-2">
        <span className="font-bold">Bide:</span> {bide}
      </div>

      <div className="mt-2">
        <span className="font-bold">Date:</span> {date}
      </div>
      <div className="mt-4 flex justify-between">
        <button
          className={`px-4 py-2 rounded ${
            accepted
              ? 'bg-green-500 text-white cursor-not-allowed'
              : 'bg-green-500 hover:bg-green-600 text-white'
          }`}
        >
          Accept
        </button>
        <button
          className={`px-4 py-2 rounded ${
            accepted
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-red-500 text-white cursor-not-allowed'
          }`}
        >
          Reject
        </button>
      </div>
    </div>
  )
}

export default Single_Application
