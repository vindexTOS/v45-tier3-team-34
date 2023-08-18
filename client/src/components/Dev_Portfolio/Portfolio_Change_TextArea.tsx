import React, { FC, useState } from 'react'
import { UseMainContext } from '../../context'
import { stateArrayType } from './Portfolio_Preview'
import { FiEdit3 } from 'react-icons/fi'
import { GiSave } from 'react-icons/gi'
type PropTypes = {
  originalState: stateArrayType
}

const Portfolio_Change_TextArea: FC<PropTypes> = ({ originalState }) => {
  const { PortfolioDispatch, PortfolioState } = UseMainContext()
  const [edit, setEdit] = useState(true)
  return (
    <div className="w-[100%] h-[100%] ">
      {edit ? (
        <div className="flex justify-around  items-start  gap-2  w-[100%]">
          <h1 className="w-[9rem]"> {originalState.title}</h1>
          <p className="flex w-[90%]  text-gray-400  text-[14px] outline outline-[1px] outline-gray-300  rounded-[15px] break-words   p-2">
            {originalState.value}
          </p>
          <FiEdit3
            onClick={() => setEdit(!edit)}
            className="text-green-500  cursor-pointer text-[1.2rem] text-start mt-2 "
          />
        </div>
      ) : (
        <div className="flex justify-around  items-start  gap-2  w-[100%]">
          <h1 className="w-[9rem]"> {originalState.title}</h1>
          <textarea
            onChange={(e) =>
              PortfolioDispatch({
                type: originalState.type,
                payload: e.target.value,
              })
            }
            value={originalState.value}
            className="flex w-[90%]  text-gray-400  text-[14px] outline outline-[1px] outline-gray-300  rounded-[15px] break-words   p-2"
          ></textarea>
          <GiSave
            onClick={() => setEdit(!edit)}
            className="text-blue-500  cursor-pointer text-[1.2rem] text-start mt-2 "
          />
        </div>
      )}
    </div>
  )
}

export default Portfolio_Change_TextArea
