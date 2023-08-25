import React, { useState } from 'react'
import { GiSaveArrow } from 'react-icons/gi'
import { MdOutlineCancel, MdModeEdit } from 'react-icons/md'
import { UseMainContext } from '../../context'

interface EditableFieldProps {
  initialValue: string
  type: string
  obj: any
  newValue: any
  style?: string
  textArea?: boolean
}

const EditableField: React.FC<EditableFieldProps> = ({
  initialValue,
  type,
  obj,
  newValue,
  style,
  textArea,
}) => {
  const {
    UserStateUpdateDispatch,
    UserStateUpdate,
    UpdateUserInfo,
  } = UseMainContext()

  const [editing, setEditing] = useState(false)

  const handleSave = () => {
    UpdateUserInfo(obj)
    setEditing(false)
  }

  return (
    <div className="flex gap-2 items-center justify-center">
      {!editing ? (
        <h1>{initialValue}</h1>
      ) : (
        <div className="flex items-center justify-center gap-1">
          {textArea ? (
            <textarea
              className={`${style}`}
              value={newValue}
              onChange={(e) =>
                UserStateUpdateDispatch({ type: type, payload: e.target.value })
              }
            ></textarea>
          ) : (
            <input
              className={`${style}`}
              value={newValue}
              onChange={(e) =>
                UserStateUpdateDispatch({ type: type, payload: e.target.value })
              }
            />
          )}
          <GiSaveArrow
            className="text-green-400 mt-1 cursor-pointer"
            onClick={handleSave}
          />
          <MdOutlineCancel
            className="text-red-400 mt-1 cursor-pointer"
            onClick={() => setEditing(false)}
          />
        </div>
      )}
      <div
        className={`text-green-600 text-[1.2rem] bg-white p-1 rounded-[50%] outline outline-2 outline-gray-300 ${
          editing && 'hidden'
        }`}
      >
        <MdModeEdit onClick={() => setEditing(!editing)} />
      </div>
    </div>
  )
}

export default EditableField
