import React, { FC } from 'react'

type InputFieldPropTypes = {
  label: string
  placeholder: string
  type?: string
}

const InputFieldGeneral: FC<InputFieldPropTypes> = ({
  label,
  placeholder,
  type,
}) => {
  return (
    <div className="w-full md:w-1/2 px-3 max_850:w-[100%] ">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        id={label}
        type={type ? type : 'text'}
        placeholder={placeholder}
        className="appearance-none block w-full  rounded-[9px] bg-white text-gray-700 border border-gray-200   py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      />
    </div>
  )
}

export default InputFieldGeneral
