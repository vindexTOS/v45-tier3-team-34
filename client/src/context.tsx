import React, { createContext, useContext, useState, useReducer } from 'react'
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
type Cell = {
  ImgState: ImgState
  ImgDispatch: React.Dispatch<ImgAction>
}

const Context = createContext<Cell | null>(null)

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
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

  return (
    <Context.Provider value={{ ImgState, ImgDispatch }}>
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
