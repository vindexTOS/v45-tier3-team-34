import React from "react";
import { UseMainContext } from "../../context";
import {
  Link,
  useNavigate,
} from "react-router-dom";
import { BsPlus } from "react-icons/bs";

const User_portfolio = ({
  isUser,
}: {
  isUser: boolean;
}) => {
  const navigate = useNavigate();
  const { PortfolioState } = UseMainContext();
  if (
    PortfolioState.userProjects.projects &&
    PortfolioState.userProjects.projects.length >
      0
  ) {
    return (
      <div className="flex  gap-5 px-5 py-2 flex-col border-t border-gray-600/20 dark:border-gray-600/50">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-semibold text-green-800 dark:text-green-500  ">
            Portfolio (
            <span>
              {
                PortfolioState.userProjects
                  .projects.length
              }
            </span>
            )
          </h1>
          <div
            onClick={() =>
              navigate(`/dev_project_add/title`)
            }
            className={`${

              isUser && "hidden"
            }  text-green-600 text-[1.2rem] mt-1 cursor-pointer  p-1 rounded-[50%] outline outline-2 outline-gray-300  `}

          >
            <BsPlus />
          </div>
        </div>

        {/* portfolio projects ?? */}
        <div className="flex flex-wrap gap-x-6 gap-y-3 ">
          {PortfolioState.userProjects.projects
            .slice(0, 3)
            .map((val: any) => {
              return (
                <section
                key={val._id} className="pb-2 bg-white/40 dark:bg-slate-800 shadow-md hover:bg-green-500/10 hover:shadow-red-400 hover:dark:bg-slate-700/50 rounded-md cursor-pointer flex flex-col justify-between gap-2  w-fit max-w-md min-h-full border border-gray-600/20 dark:border-gray-600/50">
                <img className="w-52 h-25 object-contain rounded-t-md hover:rounded-b-md  mb-4 hover:shadow-xl" src={val.photo} />
                <div
                  className="text-gray-700 dark:text-gray-400 px-2 text-bold  text-[1.1rem] font-medium hover:text-gray-800 hover:underline cursor-pointer capitalize"
                   onClick={() => navigate(`user/project/${val._id}`)}
                >
                  {val.title}
                </div>
              </section>

              );
            })}
        </div>

      </div>
    );
  } else {
    return (
      <div
        onClick={() =>
          console.log(PortfolioState.userProjects)
        }
      >
        No projects
      </div>
    );
  }
};

export default User_portfolio;

// {_id: '64e20327398d54b6da337463', user_id: '64d5f51ebd4cf4f2385d7c2e', title: 'fasf', description: 'https://www.youtube.com/watch?v=PsO6ZnUZI0g&list=RDGMEMHDXYb1_DDSgDsobPsOFxpAVMtQjsAJhsSw8&global=9', date: '2023-08-23T12:08:22.000Z', …}
// date
// :
// "2023-08-23T12:08:22.000Z"
// description
// :
// "https://www.youtube.com/watch?v=PsO6ZnUZI0g&list=RDGMEMHDXYb1_DDSgDsobPsOFxpAVMtQjsAJhsSw8&global=9"
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
