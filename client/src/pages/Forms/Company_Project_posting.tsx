import React, { useEffect, useReducer } from 'react'
import FormField from '../../components/Company/Company_form_input'
import axios from 'axios'
import { UseMainContext } from '../../context'
import DropeZone from '../../components/Forms/DropeZone'
import SkillSelection from '../../components/Forms/SkillSelection'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import useStatusMessages from '../../hooks/Status_hook'
import Succsess from '../../components/Status/Success'
import Error from '../../components/Status/Error'
import { useNavigate } from 'react-router-dom'

type CompanyProjectState = {
  title: string
  description: string
  skills: string[]
  category: string
  image: string
  country: string
  urgent: boolean
  price: number
  difficulty: 'low' | 'medium' | 'high'
  DeliveryTime: string
  StartDate: string
  Revisions: string
  DesignCustomization: boolean
  ContentUpload: boolean
  Responsive: boolean

  loading: boolean
}

// Define types for actions
export type CompanyProjectAction = {
  type: string | any
  payload: string | boolean | any
}

const CompanyProjectForm = () => {
  const { statusState, setError, setSuccess } = useStatusMessages({
    error: '',
    success: '',
  })
  const navigate = useNavigate()
  const { UserState, ImgState, PortfolioState } = UseMainContext()
  // Initial state for the Company Project
  const initialCompanyProjectState: CompanyProjectState = {
    title: '',
    description: '',
    skills: [],
    category: '',
    image: '',
    country: '',
    urgent: false,
    price: 0,
    difficulty: 'low',
    DeliveryTime: '',
    StartDate: '',
    Revisions: '',
    DesignCustomization: false,
    ContentUpload: false,
    Responsive: false,
    loading: false,
  }

  // Reducer function for Company Project state
  const companyProjectReducer = (
    state: CompanyProjectState,
    action: CompanyProjectAction,
  ): CompanyProjectState => {
    switch (action.type) {
      case 'title':
        return { ...state, title: action.payload }
      case 'description':
        return { ...state, description: action.payload }
      case 'skills':
        return { ...state, skills: action.payload }
      case 'category':
        return { ...state, category: action.payload }
      case 'image':
        return { ...state, image: action.payload }
      case 'country':
        return { ...state, country: action.payload }
      case 'urgent':
        return { ...state, urgent: action.payload }
      case 'price':
        return { ...state, price: action.payload }
      case 'difficulty':
        return { ...state, difficulty: action.payload }
      case 'deliveryTime':
        return { ...state, DeliveryTime: action.payload }
      case 'startDate':
        return { ...state, StartDate: action.payload }
      case 'revisions':
        return { ...state, Revisions: action.payload }
      case 'designCustomization':
        return { ...state, DesignCustomization: action.payload }
      case 'contentUpload':
        return { ...state, ContentUpload: action.payload }
      case 'responsive':
        return { ...state, Responsive: action.payload }
      case 'loading':
        return { ...state, loading: action.payload }
      default:
        return state
    }
  }

  const [companyProjectState, companyProjectDispatch] = useReducer(
    companyProjectReducer,
    initialCompanyProjectState,
  )
  // const [value, onChange] = React.useState(new Date())
  const value = new Date()

  const HandleDeliveryCalendar = (e: Date) => {
    companyProjectDispatch({
      type: 'deliveryTime',
      payload: e,
    })
  }
  const HandleStartCalendar = (e: Date) => {
    companyProjectDispatch({
      type: 'startDate',
      payload: e,
    })
  }
  useEffect(() => {
    companyProjectDispatch({ type: 'image', payload: ImgState.imgUrl })
  }, [ImgState.imgUrl])

  useEffect(() => {
    companyProjectDispatch({
      type: 'skills',
      payload: PortfolioState.technologies,
    })
  }, [PortfolioState.technologies])

  const handleProjectPosting = async () => {
    try {
      if (UserState.userTokenData.user && UserState.userTokenData.user._id) {
        const res = await axios.post(
          `${import.meta.env.VITE_GLOBAL_URL}/companies/projects/${
            UserState.userTokenData.user._id
          }`,
          {
            ...companyProjectState,
          },
        )

        setSuccess(res.data.msg)
        navigate(`/company/projects/${res.data.id}`)
      }
    } catch (error) {
      const err: any = error
      setError(err.message)
    }
  }

  return (
    <div className="max-w-md lg:max-w-full mx-auto mt-8 p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Create a Company Project</h2>
      <div className="flex flex-col lg:flex-row lg:gap-6 flex-wrap">
        {/* Title and Country */}
        <section className="flex flex-col lg:w-full">
          <FormField
            label="Title"
            id="title"
            type="title"
            value={companyProjectState.title}
            companyProjectDispatch={companyProjectDispatch}
            placeholder="Title"
            required
          />

          <FormField
            label="Country"
            id="country"
            type="country"
            value={companyProjectState.country}
            companyProjectDispatch={companyProjectDispatch}
            placeholder="Country"
            required
          />
        </section>

        {/* Description, Category, DropeZone & Difficulty */}
        <section className="lg:grow">
          <FormField
            label="Description"
            id="description"
            type="description"
            value={companyProjectState.description}
            companyProjectDispatch={companyProjectDispatch}
            placeholder="Description"
            required
          />

          <FormField
            label="Category"
            id="category"
            type="category"
            value={companyProjectState.category}
            companyProjectDispatch={companyProjectDispatch}
            placeholder="Category"
            required
          />

          <div className="mb-4 flex items-center justify-between">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="difficulty"
            >
              Difficulty
            </label>
            <select
              onChange={(e) =>
                companyProjectDispatch({
                  type: 'difficulty',
                  payload: e.target.value,
                })
              }
              className="px-2 py-1 border rounded-md"
            >
              {['Low', 'Medium', 'High'].map((val) => (
                <option key={val} value={val}>
                  {val}
                </option>
              ))}
            </select>
          </div>

          <DropeZone />
        </section>

        {/* Checkmark Fields, Price & Revisions */}
        <section className="lg:grow">
          {[
            'Urgent',
            'Design Customization',
            'Content Upload',
            'Responsive',
          ].map((field) => (
            <div className="mb-4 flex items-center justify-between" key={field}>
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={field}
              >
                {field}
              </label>
              <input
                className=""
                id={field.replace(' ', '')}
                type="checkbox"
                onClick={() =>
                  companyProjectDispatch({
                    type: field.toLowerCase(),
                    payload: !false,
                  })
                }
              />
            </div>
          ))}

          <FormField
            label="Price"
            id="price"
            type="price"
            value={companyProjectState.price.toString()}
            companyProjectDispatch={companyProjectDispatch}
            placeholder="Price"
            required
          />

          <FormField
            label="Revisions"
            id="revisions"
            type="revisions"
            value={companyProjectState.Revisions.toString()}
            companyProjectDispatch={companyProjectDispatch}
            placeholder="Revisions"
            required
          />
        </section>

        {/* Calendar Fields */}
        <section className="w-full flex flex-col lg:flex-row mb-4 gap-6 items-center justify-around">
          <div>
            Delivery Date
            <Calendar onChange={() => HandleDeliveryCalendar} value={value} />
          </div>
          <div>
            Start Date
            <Calendar onChange={() => HandleStartCalendar} value={value} />
          </div>
        </section>

        {/* Skills & Submit + Statuses */}
        <section className="mb-4 w-full flex flex-col items-center justify-between">
          <SkillSelection />

          <div className="mt-8">
            <button
              onClick={handleProjectPosting}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Create Project
            </button>
          </div>

          <Succsess success={statusState.success} />
          <Error error={statusState.error} />
        </section>
      </div>
    </div>
  )
}

export default CompanyProjectForm
