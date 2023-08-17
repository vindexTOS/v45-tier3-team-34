import React, { FC } from 'react'
type InputFieldPropTypes = {
  label: string
  placeholder: string
  dispatch: React.Dispatch<any>
  state: any
  dispatchType: string
  stateType: string
}

const TextAreaGeneral: FC<InputFieldPropTypes> = ({
  label,
  placeholder,

  dispatch,
  state,
  dispatchType,
  stateType,
}) => {
  return (
    <div className="w-[100%]    px-3 max_850:w-[100%] ">
      <label
        className="block uppercase tracking-wide text-gray-500 text-[12px] font-medium mb-2"
        htmlFor={label}
      >
        {label}
      </label>
      <textarea
        value={state[stateType]}
        onChange={(e) =>
          dispatch({ type: dispatchType, payload: e.target.value })
        }
        id={label}
        placeholder={placeholder}
        className="appearance-none block w-[100%] h-[200px]  rounded-[9px] bg-white text-gray-700 border border-gray-200   py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      ></textarea>
    </div>
  )
}

export default TextAreaGeneral
