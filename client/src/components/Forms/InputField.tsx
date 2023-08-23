import { HTMLInputTypeAttribute, useEffect } from 'react'
import { RegisterFormType } from '../../common.types'

type FieldType = 'full_name' | 'email' | 'password' | 'password_confirm'

type Proptypes = {
  label: string
  type: HTMLInputTypeAttribute
  field: FieldType
  setData: React.Dispatch<React.SetStateAction<RegisterFormType>>
  data?: RegisterFormType
}
const InputField = ({ label, setData, type, field }: Proptypes) => {
  //changing function
  function handleChange({ field, value }: { field: FieldType; value: string }) {
    switch (field) {
      case 'full_name':
        setData((usr) => ({ ...usr, userName: value }))
        break
      case 'email':
        setData((usr) => ({ ...usr, email: value }))
        break
      case 'password':
        setData((usr) => ({ ...usr, password: value }))
        break
      case 'password_confirm':
        setData((usr) => ({ ...usr, confirmPassword: value }))
        break

      default:
        break
    }
  }

  return (
    <div className="w-full ">
      <h1 className="mb-1">{label}</h1>
      <input
        onChange={(e) => {
          handleChange({ field, value: e.target.value })
        }}
        className="border border-gray-400 dark:bg-transparent dark:text-gray-200 outline-green-700 outline-1 w-full py-2 px-4 rounded-sm font-light text-lg"
        type={type}
        placeholder={label}
      />
    </div>
  )
}

export default InputField
