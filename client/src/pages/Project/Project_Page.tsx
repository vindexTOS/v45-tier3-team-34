import { Link, useParams } from 'react-router-dom'
import { dummy_project, dummy_project_publisher } from './dummy_project'
import { BiSolidShareAlt, BiSolidBookmark } from 'react-icons/bi'
import { tierCategoryType } from '../../common.types'
import { useEffect, useState } from 'react'
import TierDetails from '../../components/Project_detail/Tier_details'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UseMainContext } from '../../context'
import { AiFillPlusCircle, } from "react-icons/ai";
import { FaBellSlash } from "react-icons/fa";

const Project_Page = () => {
  const { UserState } = UseMainContext()
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
  const navigate = useNavigate()
  const [SingleProjectData, setSingleProjectData] = useState<any>()
  const [companyDetales, setCompanyDetales] = useState<any>()
  const [application, setApplication] = useState<any>()

  //??  company is followed , temporary (saved onn db)
  const [isFollowed, setIsFollowed] = useState(false);
  //?? follow company (can be implemented in backend ) ??
  const follow = () => {
    //?? if followed , unfollow, else follow -->
    setIsFollowed(followed => !followed);
    
  }

  const GetProjectInfo = async () => {
    try {
      const res = await axios.get(
        `${
          import.meta.env.VITE_GLOBAL_URL
        }/companies/projects/single/${project_id}`,
      )

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

  const GetCompanyApplications = async () => {
    try {
      if (SingleProjectData && SingleProjectData._id) {
        const res = await axios.get(
          `${import.meta.env.VITE_GLOBAL_URL}/application/${
            SingleProjectData._id
          }`,
        )

        const data = res.data
        console.log(data.data)
        setApplication(data.data)
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
    GetCompanyApplications()
  }, [SingleProjectData])

  const FindIfUserMadeAlreadyApplication = (): boolean => {
    let isAplication = true
    if (
      application &&
      application.length > 0 &&
      UserState.userData.user &&
      UserState.userData.user._id
    ) {
      isAplication = application.find(
        (val: any) => val.dev_id === UserState?.userData?.user?._id,
      )
    }
    return isAplication ===undefined ? false:true;
  }

  const isUserApplication = FindIfUserMadeAlreadyApplication();
  console.log('applied ? :', isUserApplication);
  
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
      _id,
      user_id,
    } = SingleProjectData

    // console.log(companyDetales);
    const { avatar, userName } = companyDetales;
    
    return (
      <div className="px-6 md:px-20 flex flex-col lg:flex-row gap-x-10 xl:gap-x-20">
        <article className="flex flex-col gap-x-6 gap-y-4">
          <h1 className="text-green-950 dark:text-green-600 text-3xl md:text-6xl lg:text-7xl font-semibold capitalize">
            {title}
          </h1>

          <div className="flex w-full flex-col sm:flex-row  gap-x-6 gap-y-2 sm:items-center">
            {/* publisher profile image */}
            <div
              onClick={() => navigate(`/company/page/${user_id}`)}
              className="flex items-center gap-3 cursor-pointer"
            >
              <img
                onClick={() => navigate(`/company/page/${user_id}`)}
                className="w-10 sm:w-16 h-10 sm:h-16 rounded-full cursor-pointer"
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
                <p>
                  {application && application.length >= 0
                    ? application.length
                    : 0}{' '}
                  applications
                </p>
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

        <article className="lg:flex-1 flex flex-col gap-4">
          <div className=" border border-green-600 bg-green-100/20 rounded-md dark:bg-slate-900 dark:border-slate-600 text-green-800 dark:text-green-300 p-4 md:p-10">
            <section className="flex justify-between items-center flex-wrap gap-y-2 border-b border-b-green-600 dark:border-slate-600 pb-8">
              <h1 className="text-lg">Select Tier</h1>
              <div className="flex gap-4">
                {['basic', 'standard', 'premium'].map((tier) => (
                  <button
                    className={`text-white ${
                      selectedTier === tier ? 'bg-green-800' : 'bg-green-500'
                    } px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-lg rounded-md shadow-lg capitalize`}
                    key={tier}
                    onClick={() => setSetselectedTier(tier as tierCategoryType)}
                  >
                    {tier}
                  </button>
                ))}
              </div>
            </section>
            <TierDetails tier={SingleProjectData} />
            <section className='flex flex-col gap-2 py-6 items-center'>
              {/* apply */}
              <button
                    disabled={isUserApplication}
                    onClick={() => navigate(`/company/project/application/${_id}`)}
                    className="bg-green-500 disabled:bg-red-300  text-white p-2 text-center min-w-fit w-3/4 rounded-full shadow-md hover:bg-green-600"
                  >
                {!isUserApplication ? 'Apply' : 'You have already applied for this job'}
                
                  </button>
                
              {/* message the company or publisher */}
              <Link
                className='border-2 border-green-500  text-green-500 p-2 text-center min-w-fit w-3/4 rounded-full shadow-md hover:bg-slate-200 dark:hover:bg-slate-800'
                to={`/chat/${user_id}`}>
                Message {publisher.name.split(' ')[0]}
              </Link>
            </section>
          </div>
          {/* publisher details card */}
          <div className='p-2 md:p-4 flex gap-6 justify-between 2xl:max-w-fit shadow-md border dark:bg-slate-900 dark:text-green-400 dark:border-slate-500 rounded-lg'>
            {/* publisher image */}
            <section className=' w-36 h-auto'>
              <img className='w-full h-full object-contain rounded-lg' src={avatar} alt="publisher profile" />
            </section>
            {/* publisher details */}
            <section className='flex flex-col gap-4'>
              <article className='flex-1 flex justify-between items-center font-semibold'>
                <h1 className='capitalize text-xl md:text-2xl'
                >{userName}</h1>
                <div className='uppercase text-sm md:text-md font-light'>{publisher.country.split('').splice(0,3).join('')}</div>
              </article>

              <p className='font-thin dark:text-green-100'>
                {publisher.description.split('').slice(0,200)}{" "}...
              </p>

              <article
                className={`flex items-center gap-1 p-1 pr-2 py-2 shadow  rounded-lg hover:shadow-md hover:bg-slate-200 dark:hover:bg-slate-800  max-w-fit cursor-pointer ${isFollowed?'':''}` }
                onClick={follow}>
                <p className={`text-2xl  ${!isFollowed ? 'text-green-500 md:text-2xl':'text-red-500 text-2xl'} `}>
                  {!isFollowed && <AiFillPlusCircle />}
                  {isFollowed && <FaBellSlash />}
                </p>
                
                
                <p className={`text-md md:text-lg ${!isFollowed ?'text-green-700/40  dark:text-green-500':'text-red-500'} `}>
                  {!isFollowed ? 'Follow':"Unsubscribe"}
                </p>
              </article>
            </section>
          </div>
          {/* testing application button */}
          
        </article>
      </div>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default Project_Page
