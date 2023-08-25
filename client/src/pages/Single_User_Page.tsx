import React, { useState, useEffect } from 'react'

import User_layout from '../components/User/User_layout'
import User_Top from '../components/User/User_Top'
import User_Side from '../components/User/User_Side'
import User_main from '../components/User/User_main'
import { UseMainContext } from '../context'
import { useParams } from 'react-router-dom'
const Single_User_Page = () => {
  const { dev_id } = useParams()
  const { devInfo, GetSingleDev } = UseMainContext()
  useEffect(() => {
    GetSingleDev(dev_id || '')
  }, [])
  if (devInfo && devInfo.user_info && devInfo.user) {
    return (
      <User_layout>
        <div className="flex  flex-col gap-2 p-2 items-center justify-center ">
          <User_Top
            isUser={true}
            userData={devInfo}
            userInfo={devInfo.user_info}
          />
          <section className="flex w-[100%]">
            <User_Side isUser={true} userInfo={devInfo} />
            <User_main isUser={true} userData={devInfo} userInfo={devInfo} />
          </section>
        </div>
      </User_layout>
    )
  } else {
    return <div>User Not Found</div>
  }
}

export default Single_User_Page
