import axios from 'axios'
import { useState, useEffect, useRef } from 'react'
import { ProjectCardType, ProjectMetaData } from '../../common.types'
import { useNavigate } from 'react-router-dom'
import useOutClick from '../../hooks/useOutClick'
export default function Search() {
  const getAllProjectsBySearch = async () => {
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_GLOBAL_URL
        }/companies/projects?search=${search}`,
      )
      const data = res.data.projectsData

      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  const [data, setData] = useState<ProjectCardType[]>([])

  const [search, setSearch] = useState<string>('')

  const [dropDown, setDropDown] = useState<boolean>(false)

  const dropRef = useRef(null)
  const DropDownSet = () => {
    setDropDown(false)
  }
  useOutClick(dropRef, DropDownSet)
  useEffect(() => {
    if (search) {
      getAllProjectsBySearch()
    }
    if (!search) {
      setData([])
    }
  }, [search])

  const navigate = useNavigate()
  return (
    <div>
      <div className="flex lg:order-2">
        <button
          type="button"
          data-collapse-toggle="navbar-search"
          aria-controls="navbar-search"
          aria-expanded="false"
          className="lg:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 mr-1"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
          <span className="sr-only">Search</span>
        </button>
        <div className="relative hidden lg:block">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span className="sr-only">Search icon</span>
          </div>
          <input
            onClick={() => setDropDown(!dropDown)}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            id="search-navbar"
            className="block w-80 p-2 pl-10 text-sm text-gray-900 border border-border rounded-lg bg-gray-50 focus:ring-ring focus:border-border dark:bg-gray-700 dark:border-border dark:placeholder-gray-400 dark:text-white dark:focus:ring-ring dark:focus:border-border"
            placeholder="Search..."
          />
        </div>
      </div>
      <div
        className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1"
        id="navbar-search"
      >
        <div className="relative mt-3 lg:hidden">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-ring focus:border-border dark:bg-gray-700 dark:border-border dark:placeholder-gray-400 dark:text-white dark:focus:ring-ring dark:focus:border-ring"
            placeholder="Search..."
          />
        </div>
      </div>
      {dropDown && (
        <div
          ref={dropRef}
          className=" w-[320px] bg-[#f2f2f2] dark:bg-slate-900 max-h-[900px] absolute top-[4rem] rounded-[12px]"
        >
          {data && data.length > 0 ? (
            <div>
              {data.map((val: ProjectCardType) => {
                const { title, description, image, _id } = val.project

                return (
                  <div
                    onClick={() => navigate(`/company/projects/${_id}`)}
                    key={_id}
                    className="m-5 p-2 border shadow flex gap-3 items-center  rounded-xl cursor-pointer bg-white hover:bg-[#F3F4F6] dark:bg-slate-950"
                  >
                    <img
                      src={image} // Assuming 'image' is the URL to the project image
                      alt={title}
                      className=" w-[60px] h-[60px] rounded-xl"
                    />
                    <div>
                      <h2 className="text-md font-semibold text-primary dark:text-primary">
                        {title}
                      </h2>
                      <p className="text-sm text-muted dark:text-muted">
                        {description.slice(0, 20)}
                        ...
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          ) : (
            <div className="text-muted p-4">No results</div>
          )}
        </div>
      )}
    </div>
  )
}
