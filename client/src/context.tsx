import axios from 'axios'
import React, {
  createContext,
  useContext,
  useState,
  useReducer,
  useEffect,
} from 'react'
import jwt from 'jwt-decode'
import Cookies from 'universal-cookie'
import { globalUrl } from './global-vars/Api-url'
import { RegisterFormType } from './common.types'
import { useLocation, useNavigate } from 'react-router-dom'
import useStatusMessages from './hooks/Status_hook'
// img types
type ImgState = {
  image: null | string | any
  htmlImg: null | string
  imgUrl: string
  imgLoading: boolean
  imgError: string
}

type ImgAction = {
  payload: any
  type: string
}

// user types

type UserState = {
  userTokenData: any
  userData: any
  token: string
  updateUser: boolean
}

type UserAction = {
  payload: any | string
  type: string
}

type StatusState = {
  error: string
  success: string
}

// user info types
type UserInfoState = {
  title: string
  summary: string
  user_id: string
  github: string
  linkedin: string
  website: string
  hrPay: number
}

type UserInfoAction = {
  payload: any | string
  type: string
}

// user portfolio project types
export type PortfolioState = {
  title: string
  date: DateConstructor
  role: string
  description: string
  video?: string
  github?: string
  liveLink?: string
  skill: string
  technologies: string[]
  error: string
  loading: boolean
}
type PortfolioAction = {
  payload: any
  type: string
}

type Cell = {
  ImgState: ImgState
  ImgDispatch: React.Dispatch<ImgAction>
  UserState: UserState
  UserDispatch: React.Dispatch<UserAction>
  hanldeAuth: (authObj: RegisterFormType, url: string) => void
  statusState: StatusState
  Authloading: boolean
  GetUserData: () => void
  PortfolioState: PortfolioState
  PortfolioDispatch: React.Dispatch<PortfolioAction>

  UserInfoState: UserInfoState
  UserInfoDispatct: React.Dispatch<UserInfoAction>

  setError: (message: string) => void
  setSuccess: (message: string) => void
}

const Context = createContext<Cell | null>(null)

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const navigate = useNavigate()
  const routeLocation = useLocation()
  const cookies = new Cookies()

  // uploading photo  to fire base /////// sending all the information to data base //////////////////// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const initialImgState = {
    image: null,
    htmlImg: null,
    imgUrl: '',
    imgLoading: false,
    imgError: '',
  }

  const imgReducer = (state: ImgState, action: ImgAction) => {
    switch (action.type) {
      case 'get-img':
        return { ...state, image: state.image = action.payload }

      case 'get-html-img':
        return { ...state, htmlImg: state.htmlImg = action.payload }
      case 'set-img-url':
        return { ...state, imgUrl: state.imgUrl = action.payload }

      case 'set-img-loading':
        return { ...state, imgLoading: state.imgLoading = action.payload }
      case 'set-img-error':
        return { ...state, imgError: state.imgError = action.payload }
      default:
        return state
    }
  }
  const [ImgState, ImgDispatch] = useReducer(imgReducer, initialImgState)

  /// user state managment //////////////////// token decoding

  const initialUserState: UserState = {
    userTokenData: {},
    userData: {},

    token: '',
    updateUser: false,
  }
  const UserReducer = (state: UserState, action: UserAction): UserState => {
    switch (action.type) {
      case 'get-token':
        return { ...state, token: state.token = action.payload }
      case 'decod-user':
        return { ...state, userTokenData: state.userTokenData = action.payload }
      case 'user-data':
        return { ...state, userData: state.userData = action.payload }
      case 'user-update':
        return { ...state, updateUser: state.updateUser = action.payload }

      default:
        return state
    }
  }
  const [UserState, UserDispatch] = useReducer(UserReducer, initialUserState)

  // user information states..................................................................

  const UserInfoReducer = (
    state: UserInfoState,
    action: UserInfoAction,
  ): UserInfoState => {
    switch (action.type) {
      case 'title':
        return { ...state, title: action.payload }
      case 'summary':
        return { ...state, summary: action.payload }
      case 'user_id':
        return { ...state, user_id: action.payload }
      case 'github':
        return { ...state, github: action.payload }
      case 'linkedin':
        return { ...state, linkedin: action.payload }
      case 'website':
        return { ...state, website: action.payload }

      case 'hrPay':
        return { ...state, hrPay: action.payload }

      default:
        return state
    }
  }
  const initialUserInfoState: UserInfoState = {
    title: '',
    summary: '',
    user_id: '',
    github: '',
    linkedin: '',
    website: '',
    hrPay: 0,
  }

  const [UserInfoState, UserInfoDispatct] = useReducer(
    UserInfoReducer,
    initialUserInfoState,
  )

  // handle registration and login

  // this is custome hook
  const { statusState, setError, setSuccess } = useStatusMessages({
    error: '',
    success: '',
  })
  const [Authloading, setAuthLoading] = useState(false) // loading state

  const hanldeAuth = async (authObj: RegisterFormType, url: string) => {
    setAuthLoading(true)
    try {
      const response = await axios.post(`${globalUrl}/${url}`, authObj)
      const data = response.data

      setSuccess(data.msg)

      UserDispatch({ type: 'get-token', payload: data?.token })

      const newToken = data.token
      axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`

      const decoded: any = await jwt(newToken)
      cookies.set('jwt_authorization', newToken, {
        expires: new Date(decoded.exp * 1000),
      })
      setAuthLoading(false)
      if (url === 'register') {
        navigate(`/dev_project_add/title`)
      } else if (url === 'login') {
        navigate('/profile')
      }
      return data
    } catch (error) {
      let err: any = error
      setError(err.response.data.msg)
      setAuthLoading(false)
    }
  }

  // getting token cookie from browser cookies and setting headers and UserState.userTokenData state
  const token = cookies.get('jwt_authorization')
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      axios.defaults.headers.common['Content-Type'] = 'application/json'
      const decoded = jwt(token)
      UserDispatch({ type: 'decod-user', payload: decoded })
    }
  }, [UserState.token])

  // user update

  // get updated user data or specifice user data when clicked on user
  const GetUserData = async () => {
    try {
      const response = await axios.get(
        `${globalUrl}/user/${UserState.userTokenData.user._id}`,
      )
      const data = response.data
      UserDispatch({ type: 'user-data', payload: data })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    if (UserState.userTokenData.user && UserState.userTokenData.user._id) {
      GetUserData()
    }
  }, [UserState.userTokenData.user, UserState.updateUser])

  // portfolio project posting

  const initialStatePortfolio = {
    title: '',
    date: new Date(),
    role: '',
    description: '',
    video: '',
    github: '',
    liveLink: '',
    skill: '',
    technologies: [],
    error: '',
    loading: false,
  }

  const PortfolioRediuser = (
    state: PortfolioState,
    action: PortfolioAction,
  ) => {
    switch (action.type) {
      case 'title':
        return { ...state, title: state.title = action.payload }
      case 'date':
        return { ...state, date: state.date = action.payload }
      case 'role':
        return { ...state, role: state.role = action.payload }
      case 'description':
        return { ...state, description: state.description = action.payload }
      case 'video':
        return { ...state, video: state.video = action.payload }
      case 'github':
        return { ...state, github: state.github = action.payload }
      case 'liveLink':
        return { ...state, liveLink: state.liveLink = action.payload }
      case 'skill':
        return { ...state, skill: state.skill = action.payload }
      case 'technologies':
        return {
          ...state,
          technologies: [...state.technologies, action.payload],
        }
      case 'technologies-removed':
        return { ...state, technologies: action.payload }
      case 'portfolio-error':
        return { ...state, error: action.payload }
      case 'loading':
        return { ...state, loading: action.payload }
      default:
        return state
    }
  }

  const [PortfolioState, PortfolioDispatch] = useReducer(
    PortfolioRediuser,
    initialStatePortfolio,
  )

  return (
    <Context.Provider
      value={{
        ImgState,
        ImgDispatch,
        UserState,
        UserDispatch,
        hanldeAuth,
        statusState,
        setError,
        setSuccess,
        Authloading,
        GetUserData,
        PortfolioState,
        PortfolioDispatch,
        UserInfoState,
        UserInfoDispatct,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const UseMainContext = () => {
  const context = useContext(Context)

  if (!context) {
    throw new Error('Not Wrapped')
  }

  return context
}
