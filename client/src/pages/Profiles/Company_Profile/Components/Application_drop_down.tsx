import React, { useRef, useState } from 'react'
import Single_Application from './Single_Application'
import useOutClick from '../../../../hooks/useOutClick'
export default function Application_drop_down({ data }: { data: any }) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement | null>(null)

  const navigateOut = () => {
    setOpen(false)
  }

  useOutClick(ref, navigateOut)
  const { userName, avatar, description, application_id } = data
  return (
    <div ref={ref} className="bg-gray-200 py-4 flex flex-col gap-2 realtive ">
      <div className="flex items-center justify-around">
        <img className="w-[50px] h-[50px] rounded-[12px]" src={avatar} />
        <h1>{userName}</h1>
      </div>
      <p className="px-10 text-[12px] text-blue-500">
        {description && description.slice(0, 50)}...
      </p>
      <div className="flex items-end justify-end px-10">
        <button
          onClick={() => setOpen(!open)}
          className="bg-green-400 py-1 text-white hover:bg-green-300 w-[9rem] rounded-[40px] shadow-md"
        >
          See application
        </button>
      </div>
      {open && <Single_Application data={data} />}
    </div>
  )
}
