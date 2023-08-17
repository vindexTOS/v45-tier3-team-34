import React, { FC } from 'react'

type InputFieldPropTypes = {
  label: string
  placeholder: string
  type?: string
  dispatch: React.Dispatch<any>
  state: any
  dispatchType: string
  stateType: string
}

const InputFieldGeneral: FC<InputFieldPropTypes> = ({
  label,
  placeholder,
  type,
  dispatch,
  state,
  dispatchType,
  stateType,
}) => {
  return (
    <div className="  w-[100%]   px-3 max_850:w-[100%] ">
      <label
        className="block uppercase tracking-wide text-gray-500 text-[10px]   mb-2"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        value={state[stateType]}
        onChange={(e) =>
          dispatch({ type: dispatchType, payload: e.target.value })
        }
        id={label}
        type={type ? type : 'text'}
        placeholder={placeholder}
        className="appearance-none block w-[100%] rounded-[9px] bg-white text-gray-700 border border-gray-200   py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      />
    </div>
  )
}

export default InputFieldGeneral
