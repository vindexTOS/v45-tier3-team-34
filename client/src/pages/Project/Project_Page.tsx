import { useParams } from 'react-router-dom'
import { dummy_project, dummy_project_publisher } from './dummy_project'
import { BiSolidShareAlt, BiSolidBookmark } from 'react-icons/bi'
import { tierCategoryType } from '../../common.types'
import { useEffect, useState } from 'react'
import TierDetails from '../../components/Project_detail/Tier_details'
import axios from 'axios'
const Project_Page = () => {
  const params = useParams()
  //may be changed with category id , or samething else
  const { project_id } = params
  // fetch projecct data (info) by it id here;
  //fetch publisher from publisher(company) id
  const project = dummy_project
  // ?? publisher (may be fetched to from db, or linked to the project (company _id))
  const publisher = dummy_project_publisher

  //tier ....??
  const [selectedTier, setSetselectedTier] = useState<tierCategoryType>('basic')

  const [SingleProjectData, setSingleProjectData] = useState<any>()
  const [companyDetales, setCompanyDetales] = useState<any>()
  const GetProjectInfo = async () => {
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_GLOBAL_URL
        }/companies/projects/single/${project_id}`,
      )
      console.log(res.data)
      setSingleProjectData(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  const GetCompanyDetales = async () => {
    try {
      if (SingleProjectData && SingleProjectData.user_id) {
        const res = await axios.get(
          `${import.meta.env.VITE_GLOBAL_URL}/user/${
            SingleProjectData.user_id
          }`,
        )

        setCompanyDetales(res.data.user)
      }
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    GetProjectInfo()
  }, [project_id])
  useEffect(() => {
    GetCompanyDetales()
  }, [SingleProjectData])
  if (
    SingleProjectData &&
    SingleProjectData._id &&
    companyDetales &&
    companyDetales._id
  ) {
    const {
      ContentUpload,
      DeliveryTime,
      DesignCustomization,
      Responsive,
      Revisions,
      StartDate,
      category,
      country,
      description,
      difficulty,
      image,
      isFinnished,
      price,
      skills,
      title,
      urgent,
    } = SingleProjectData

    const { avatar, userName } = companyDetales
    return (
      <div className="px-6 md:px-20 flex flex-col lg:flex-row gap-x-10 xl:gap-x-20">
        <article className="flex flex-col gap-x-6 gap-y-4">
          <h1 className="text-green-950 dark:text-green-600 text-4xl md:text-6xl lg:text-7xl font-semibold">
            {title}
          </h1>

          <div className="flex w-full flex-col sm:flex-row  gap-x-6 gap-y-2 sm:items-center">
            {/* publisher profile image */}
            <div className="flex items-center gap-3">
              <img
                className="w-10 sm:w-16 h-10 sm:h-16 rounded-full"
                src={avatar}
                alt="publisher-profile"
              />
              <h2 className="text-lg md:text-2xl font-semibold md:font-bold text-green-600 dark:text-white">
                {userName}
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex gap-6 font-medium text-green-900 dark:text-green-600 w-full sm:w-fit justify-between sm:justify-center ">
                <p>?? views</p>
                <p>?? applications</p>
              </div>
              {/* save & share actions */}
              <div className="flex gap-4  w-full sm:w-fit items-end sm:items-center justify-end sm:justify-center">
                <p className="flex items-center gap-1 text-green-900 dark:text-green-600">
                  <span className="text-xl">
                    <BiSolidBookmark />
                  </span>{' '}
                  <span className="hidden sm:block">Save</span>
                </p>
                <p className="flex items-center gap-1 text-green-900 dark:text-green-600">
                  <span className="text-xl">
                    <BiSolidShareAlt />
                  </span>{' '}
                  <span className="hidden sm:block">Share</span>
                </p>
              </div>
            </div>
          </div>

          {/* project image */}
          {/* <iframe src="https://firebasestorage.googleapis.com/v0/b/img-upload-7d368.appspot.com/o/connect-dev%2F47e5183c38502bd3bb48d0c551762176.jpg?alt=media&token=79520056-f2e9-4bba-99f6-fddc72b6849f"></iframe> */}
          <div className="w-full sm:max-w-2xl rounded-lg">
            <img
              className="rounded-lg shadow-md shadow-gray-950 dark:shadow-green-950"
              src={image}
              alt="project-img"
            />
          </div>
          {/* project decsription */}
          <div className="w-full md:max-w-md lg:max-w-lg">
            <h1 className="text-xl sm:text-2xl font-bold text-green-900 dark:text-green-600">
              Description
            </h1>
            <p className="text-gray-700 dark:text-white sm:font-thin text-lg sm:text-xl pl-4">
              {description}
            </p>
          </div>
          {/* more project infos */}
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-green-900 dark:text-green-600">
              More info{' '}
            </h1>

            <div className="flex flex-wrap sm:pl-8 gap-5 my-6">
              <p className="flex gap-4 text-center items-center px-4 py-2 pb-2 rounded-full border border-green-600 shadow-2xl shadow-gray-300 dark:shadow-green-900 text-lg dark:text-white">
                Budget: <span className="font-bold">${price}</span>
              </p>
              <p className="flex gap-2 text-center items-center px-4 py-2 pb-2 rounded-full border border-green-700 bg-green-600 text-white shadow-2xl shadow-green-900">
                Timeline:{' '}
                <span className="font-bold">
                  {urgent ? 'Urgent' : 'no-urgent'}
                </span>
              </p>
              <p className="flex gap-4 bg-green-800 text-center items-center px-4 py-2 pb-2 rounded-full border border-green-600 shadow-2xl shadow-green-900 text-white capitalize">
                difficulty: <span className="font-bold">{difficulty}</span>
              </p>
            </div>
          </div>
        </article>

        <article className="lg:flex-1">
          <div className=" border border-green-600 bg-green-100/20 rounded-md dark:bg-slate-900 dark:border-slate-600 text-green-800 dark:text-green-300 p-4 md:p-10">
            <section className="flex justify-between items-center flex-wrap gap-y-2 border-b border-b-green-600 dark:border-slate-600 pb-8">
              <h1 className="text-lg">Select Tier</h1>
              <div className="flex gap-4">
                {['basic', 'standard', 'premium'].map((tier) => (
                  <button
                    className={`text-white ${
                      selectedTier === tier ? 'bg-green-800' : 'bg-green-500'
                    } px-4 py-2 rounded-md shadow-lg capitalize`}
                    key={tier}
                    onClick={() => setSetselectedTier(tier as tierCategoryType)}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </section>
            <TierDetails tier={SingleProjectData} />
            <section></section>
          </div>

          <div>publisher ....</div>
        </article>
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default Project_Page
