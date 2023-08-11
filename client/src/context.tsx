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
import { useNavigate } from 'react-router-dom'
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
  userData: any
  token: string
}

type UserAction = {
  payload: any | string
  type: string
}

type Cell = {
  ImgState: ImgState
  ImgDispatch: React.Dispatch<ImgAction>
  UserState: UserState
  UserDispatch: React.Dispatch<UserAction>
  hanldeAuth: (authObj: RegisterFormType, url: string) => void
}

const Context = createContext<Cell | null>(null)

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
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
    userData: {},
    token: '',
  }
  const UserReducer = (state: UserState, action: UserAction): UserState => {
    switch (action.type) {
      case 'get-token':
        return { ...state, token: state.token = action.payload }
      case 'decod-user':
        return { ...state, userData: state.userData = action.payload }
      default:
        return state
    }
  }
  const [UserState, UserDispatch] = useReducer(UserReducer, initialUserState)

  // handle registration and login

  const hanldeAuth = async (authObj: RegisterFormType, url: string) => {
    const data = await axios
      .post(`${globalUrl}/${url}`, authObj)
      .then((res) => res.data)
      .catch((err) => console.log(err))
    UserDispatch({ type: 'get-token', payload: data?.token })
    const newToken = data.token
    axios.defaults.headers.common['Authorization'] = `Bearer ${newToken}`
    const decoded: any = await jwt(newToken)
    cookies.set('jwt_authorization', newToken, {
      expires: new Date(decoded.exp * 1000),
    })
  }

  // getting token cookie from browser cookies and setting headers and UserState.UserData state
  const token = cookies.get('jwt_authorization')
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
      axios.defaults.headers.common['Content-Type'] = 'application/json'
      const decoded = jwt(token)
      UserDispatch({ type: 'decod-user', payload: decoded })
    }
  }, [UserState.token])
  return (
    <Context.Provider
      value={{ ImgState, ImgDispatch, UserState, UserDispatch, hanldeAuth }}
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
