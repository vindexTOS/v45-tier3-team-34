import React, { Dispatch, SetStateAction } from 'react'
import { CompanyProjectAction } from '../../pages/Forms/Company_Project_posting'
type FormFieldProps = {
  label: string
  id: string
  value: string
  companyProjectDispatch: React.Dispatch<CompanyProjectAction>
  placeholder: string
  required?: boolean
  type: string
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  id,
  value,
  companyProjectDispatch,
  placeholder,
  type,
  required = false,
}) => {
  return (
    <div className="mb-4">
      <label
        className="block text-gray-700 text-sm font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id={id}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) =>
          companyProjectDispatch({ type: type, payload: e.target.value })
        }
        required={required}
      />
    </div>
  )
}

export default FormField
