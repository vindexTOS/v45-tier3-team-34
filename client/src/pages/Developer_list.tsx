import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UseMainContext } from '../context'
const Developer_list = () => {
  const { GetSingleDev } = UseMainContext()
  const [devData, setDevData] = useState<any>()
  const navigate = useNavigate()
  const GetAllDevs = async () => {
    try {
      const res = await axios.get(`http://localhost:8080/all_devs`)

      setDevData(res.data)
      console.log(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    GetAllDevs()
  }, [])
  if (devData && devData.devs) {
    return (
      <div className="mt-60 w-[100vw] items-center justify-center flex flex-wrap gap-3">
        {devData.devs.map((val: any) => {
          const { avatar, date, email, role, userName, _id } = val.user
          //   const { hrPay, firstName, lastName, userTimeZone, title } =
          //     val.user_info || {}

          return (
            <div onClick={() => GetSingleDev(_id)} key={_id}>
              <img src={avatar} className="w-[100px] h-[100px] " />
              <h1>{userName}</h1>
              <h1>{role}</h1>
            </div>
          )
        })}
      </div>
    )
  } else {
    return <div className="mt-60">Loading...</div>
  }
}

export default Developer_list
