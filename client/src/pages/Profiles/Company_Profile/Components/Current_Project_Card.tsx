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
    const returnArr = []
    if (
      relatedApplications &&
      relatedApplications.relatedApplications &&
      relatedApplications.relatedApplications.length > 0
    ) {
      const Application = relatedApplications?.relatedApplications
      const user = relatedApplications?.usersInfo

      const loopNum = Application.slice(0, user.length)

      for (let i = 0; i < loopNum.length; i++) {
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
      className="h-fit bg-white text-gray-700 dark:text-gray-400 dark:bg-slate-800 flex items-center flex-wrap relative   rounded-lg shadow-md mb-4 p-2 sm:p-4 "
    >
      <img src={image} alt={title} className="w-[120px] h-[100px]   object-contain " />
      <div className="p-4 flex flex-col gap-1 justify-center">
        <h2 className="text-xl text-slate-800 dark:text-slate-200 font-semibold mb-2">{title}</h2>
        <p className="">Price: ${price}</p>
        <div
          onClick={() => setDropDown(!dropDown)}
          className="outline outline-[1px] outline-gray-300 dark:outline-gray-500  rounded-[20px] px-2 flex items-center justify-around"
        >
          <h1 className="   flex gap-2    cursor-pointer">
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
          <div className="w-fit  h-fit rounded-md backdrop-blur-md bg-gray-500/10 dark:bg-slate-300/10 top-40 z-10 shadow-lg absolute">
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
