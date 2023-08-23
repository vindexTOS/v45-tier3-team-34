import React from 'react'
import { UseMainContext } from '../../context'
import { Link } from 'react-router-dom'
import { BsPlus } from 'react-icons/bs'
const User_portfolio = () => {
  const { PortfolioState } = UseMainContext()
  if (
    PortfolioState.userProjects.projects &&
    PortfolioState.userProjects.projects.length > 0
  ) {
    return (
      <div className="flex  gap-5 px-5 py-10 flex-col">
        <div className="flex items-center gap-3">
          <h1 className="text-[1.4rem]  ">
            Portfolio (
            <span>{PortfolioState.userProjects.projects.length}</span>)
          </h1>
          <div className="  text-green-600 text-[1.2rem] mt-1 cursor-pointer  p-1 rounded-[50%] outline outline-2 outline-gray-300  ">
            <BsPlus />
          </div>
        </div>
        {PortfolioState.userProjects.projects.slice(0, 3).map((val: any) => {
          return (
            <section className="flex flex-col gap-2 ">
              <img className="w-[250px] h-[200px]" src={val.photo} />
              <Link
                className="text-green-500 text-bold  text-[1.1rem] font-medium hover:text-green-400 hover:underline"
                to={val._id}
              >
                {val.title}
              </Link>
            </section>
          )
        })}
      </div>
    )
  } else {
    return (
      <div onClick={() => console.log(PortfolioState.userProjects)}>
        No projects
      </div>
    )
  }
}

export default User_portfolio

// {_id: '64e20327398d54b6da337463', user_id: '64d5f51ebd4cf4f2385d7c2e', title: 'fasf', description: 'https://www.youtube.com/watch?v=PsO6ZnUZI0g&list=RDGMEMHDXYb1_DDSgDsobPsOFxpAVMtQjsAJhsSw8&index=9', date: '2023-08-23T12:08:22.000Z', …}
// date
// :
// "2023-08-23T12:08:22.000Z"
// description
// :
// "https://www.youtube.com/watch?v=PsO6ZnUZI0g&list=RDGMEMHDXYb1_DDSgDsobPsOFxpAVMtQjsAJhsSw8&index=9"
// github
// :
// "saf"
// liveLink
// :
// "asf"
// photo
// :
// "https://firebasestorage.googleapis.com/v0/b/img-upload-7d368.appspot.com/o/connect-dev%2F0e4f601b62f7fe3b2eddddbcded5b772.jpg?alt=media&token=14099b08-394a-4cb1-9cb5-622ea242ac4c"
// skills_used
// :
// (4) ['HTML', 'CSS', 'JavaScript', 'Django']
// title
// :
// "fasf"
// user_id
// :
// "64d5f51ebd4cf4f2385d7c2e"
// videoLink
// :
// "saf"
// __v
// :
// 0
// _id
// :
// "64e20327398d54b6da337463"
