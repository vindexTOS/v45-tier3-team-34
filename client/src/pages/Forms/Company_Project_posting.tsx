import React, { useEffect, useReducer } from 'react'
import FormField from '../../components/Company/Company_form_input'
import axios from 'axios'
import { UseMainContext } from '../../context'
import DropeZone from '../../components/Forms/DropeZone'
import SkillSelection from '../../components/Forms/SkillSelection'
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
  loading: boolean
}

// Define types for actions
export type CompanyProjectAction = {
  type: string | any
  payload: string | boolean | any
}

const CompanyProjectForm = () => {
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
    console.log(companyProjectState)
    try {
      if (UserState.userTokenData.user && UserState.userTokenData.user._id) {
        const res = await axios.post(
          `http://localhost:8080/companies/projects/${UserState.userTokenData.user._id}`,
          {
            ...companyProjectState,
          },
        )
        console.log(res.data)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Create a Company Project</h2>
      <form>
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
          label="Description"
          id="description"
          type="description"
          value={companyProjectState.description}
          companyProjectDispatch={companyProjectDispatch}
          placeholder="Description"
          required
        />

        {/* Skills Required Field */}
        {/* <FormField
          label="Skills Required"
          id="skills_required"
          type="skills_required"
          value={companyProjectState.skills_required.join(', ')}
          companyProjectDispatch={companyProjectDispatch}
          placeholder="Skills Required"
          required
        /> */}
        {/* Category Field */}
        <FormField
          label="Category"
          id="category"
          type="category"
          value={companyProjectState.category}
          companyProjectDispatch={companyProjectDispatch}
          placeholder="Category"
          required
        />

        {/* Image Field */}
        <DropeZone />

        {/* Country Field */}
        <FormField
          label="Country"
          id="country"
          type="country"
          value={companyProjectState.country}
          companyProjectDispatch={companyProjectDispatch}
          placeholder="Country"
          required
        />

        {/* Urgent Field */}

        <div className="mb-4 flex items-center justify-around ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={`Urgent`}
          >
            Urgent
          </label>
          <input
            className=""
            id={`Urgent`}
            type="checkbox"
            onClick={() =>
              companyProjectDispatch({
                type: `urgent`,
                payload: !false,
              })
            }
          />
        </div>
        {/* Price Field */}
        <FormField
          label="Price"
          id="price"
          type="price"
          value={companyProjectState.price.toString()}
          companyProjectDispatch={companyProjectDispatch}
          placeholder="Price"
          required
        />

        {/* Difficulty Field */}

        <div className="mb-4 flex items-center justify-around ">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor={`Urgent`}
          >
            Difficulty
          </label>
          <select>
            {['low', 'medium', 'high'].map((val: string) => (
              <option
                key={val}
                onClick={() =>
                  companyProjectDispatch({
                    type: 'difficulty',
                    payload: val,
                  })
                }
              >
                {val}
              </option>
            ))}
          </select>
        </div>

        <SkillSelection />

        <div className="mb-4">
          <button
            onClick={handleProjectPosting}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Create Project
          </button>
        </div>
      </form>
    </div>
  )
}

export default CompanyProjectForm
