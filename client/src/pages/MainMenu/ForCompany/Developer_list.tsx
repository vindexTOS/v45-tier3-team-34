import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UseMainContext } from '../../../context'
import DevListFilterPage from '../../../components/MainMenuPages/ForCompanyPage/DevListFilterPage'
import NeedCard from './NeedCard'
const Developer_list = () => {
  const { GetSingleDev } = UseMainContext()
  const [devData, setDevData] = useState<any>()
  const navigate = useNavigate()
  const GetAllDevs = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_GLOBAL_URL}/all_devs`)

      setDevData(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    GetAllDevs()
  }, [])
  if (devData && devData.devs) {
    return (
      <section className="my-10">
        <NeedCard />
        <article className="my-10 pb-10 border-b border-slate-300 dark:border-slate-600">
          <h3 className="text-[1.5rem] font-semibold text-primary dark:text-primary">
            Hire the best jnr Developers
          </h3>
          <p className="text-[.8rem] text-muted dark:text-muted">
            Check out “Jnr Developers” with the skills you need for your next
            job.
          </p>
        </article>
        <section className="flex flex-col md:flex-row">
          <DevListFilterPage />
          <div>
            <div className="items-center justify-center flex flex-wrap gap-3">
              {devData.devs.map((val: any) => {
                const { avatar, date, email, role, userName, _id } = val.user
                //   const { hrPay, firstName, lastName, userTimeZone, title } =
                //     val.user_info || {}

                return (
                  <div
                    onClick={() => GetSingleDev(_id)}
                    key={_id}
                    className="bg-white dark:bg-slate-900 dark:hover:bg-slate-950 rounded-lg w-[400px] shadow-md p-4 max-w-xs cursor-pointer hover:shadow-lg"
                  >
                    <div className="flex items-center">
                      <img
                        src={avatar}
                        alt={userName}
                        className="w-16 h-16 rounded-full"
                      />
                      <div className="ml-4">
                        <h2 className="text-[1rem] font-semibold text-primary dark:text-primary">
                          {userName}
                        </h2>
                        <p className="text-muted text-[0.8rem]">{role}</p>
                        {/* Add more information here */}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      </section>
    )
  } else {
    return <div className="pt-10 text-center">Loading...</div>
  }
}

export default Developer_list
