import React, { useRef, useState } from 'react'
import { MdArrowDropDown, MdArrowDropUp } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import Single_Application from './Single_Application'
import Application_drop_down from './Application_drop_down'
import useOutClick from '../../../../hooks/useOutClick'
import { UseMainContext } from '../../../../context'
import Error from '../../../../components/Status/Error'
import Succsess from '../../../../components/Status/Success'
const Current_Project_Card = ({ data }: { data: any }) => {
  const { statusState } = UseMainContext()
  const [dropDown, setDropDown] = useState<boolean>(false)
  const navigate = useNavigate()

  const ref = useRef<HTMLDivElement | null>(null)

  const navigateOut = () => {
    setDropDown(false)
  }

  useOutClick(ref, navigateOut)
  const {
    _id,
    user_id,
    image,
    title,
    price,
    relatedApplications,
    dev_id,
  } = data

  const combinedArray = () => {
    let returnObj = {}
    let returnArr = []
    if (
      relatedApplications &&
      relatedApplications.relatedApplications &&
      relatedApplications.relatedApplications.length > 0
    ) {
      let Application = relatedApplications?.relatedApplications
      let user = relatedApplications?.usersInfo
      for (let i = 0; i < Application.length; i++) {
        if (Application[i].dev_id === user[i]._id) {
          returnObj = {
            ...Application[i],
            ...user[i],
            application_id: Application[i]._id,
          }

          returnArr.push(returnObj)
        }
      }
    }
    return returnArr
  }

  const applicationCombined = combinedArray()
  return (
    <div
      ref={ref}
      key={_id}
      className="bg-white flex items-center  relative   rounded-lg shadow-md mb-4 p-4 "
    >
      <img src={image} alt={title} className="w-[120px] h-[100px]   " />
      <div className="p-4 flex flex-col gap-1 justify-center">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-gray-700">Price: ${price}</p>
        <div
          onClick={() => setDropDown(!dropDown)}
          className="outline outline-[1px] outline-gray-300 rounded-[20px] px-2 flex items-center justify-around"
        >
          <h1 className="text-gray-700  flex gap-2    cursor-pointer">
            Applications:
            <span className="font-bold text-blue-400   ">
              {relatedApplications &&
                relatedApplications.relatedApplications.length}
            </span>{' '}
          </h1>
          <div className="cursor-pointer">
            {dropDown ? (
              <MdArrowDropDown className="text-[1.2rem] text-gray-400" />
            ) : (
              <MdArrowDropUp className="text-[1.2rem] text-gray-400" />
            )}
          </div>
        </div>
        {dropDown && (
          <div className="w-[330px] h-[300px] rounded-[9px] bg-white top-40 absolute">
            {applicationCombined.map((val: any) => (
              <Application_drop_down key={val._id} data={val} />
            ))}
          </div>
        )}
      </div>
      <Error error={statusState.error} />
      <Succsess success={statusState.success} />
    </div>
  )
}

export default Current_Project_Card
