import React, { useReducer } from 'react'

const CompanyProjectForm = () => {
  type CompanyProjectState = {
    title: string
    description: string
    skills_required: string[]
    category: string
    image: string
    country: string
    urgent: boolean
    price: number
    difficulty: 'low' | 'medium' | 'high'
    loading: boolean
  }

  // Define types for actions
  type CompanyProjectAction =
    | { type: 'title'; payload: string }
    | { type: 'description'; payload: string }
    | { type: 'skills_required'; payload: string[] }
    | { type: 'category'; payload: string }
    | { type: 'image'; payload: string }
    | { type: 'country'; payload: string }
    | { type: 'urgent'; payload: boolean }
    | { type: 'price'; payload: number }
    | { type: 'difficulty'; payload: 'low' | 'medium' | 'high' }
    | { type: 'loading'; payload: boolean }

  // Initial state for the Company Project
  const initialCompanyProjectState: CompanyProjectState = {
    title: '',
    description: '',
    skills_required: [],
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
      case 'skills_required':
        return { ...state, skills_required: action.payload }
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

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Create a Company Project</h2>
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="title"
          >
            Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="title"
            type="text"
            placeholder="Title"
            value={companyProjectState.title}
            onChange={(e) =>
              companyProjectDispatch({ type: 'title', payload: e.target.value })
            }
            required
          />
        </div>
        {/* Repeat similar code for other form inputs */}

        <div className="mb-4">
          <button
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
