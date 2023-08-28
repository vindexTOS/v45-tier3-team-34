import React, { useState } from 'react'
import Portfolio_layout from '../../components/Dev_Portfolio/Portfolio_layout'
import InputFieldGeneral from '../../components/Forms/InputFieldGeneral'
import TextAreaGeneral from '../../components/Forms/TextAreaGeneral'
import { UseMainContext } from '../../context'
import SkillSelection from '../../components/Forms/SkillSelection'
import axios from 'axios'
import { globalUrl } from '../../global-vars/Api-url'
import { useNavigate } from 'react-router-dom'
import Error from '../../components/Status/Error'
import Succsess from '../../components/Status/Success'
import LoadingComponent from '../../components/Status/Loading'
export default function User_info_form() {
  const {
    UserInfoState,
    UserInfoDispatct,
    PortfolioState,
    UserState,
    setError,
    setSuccess,
    statusState,
  } = UseMainContext()
  const style = {
    mainDiv: ` w-[100vw] gap-3 max_xl:w-[100%] py-60 flex flex-col  items-center `,
    header: `text-gray-500 max_sm:hidden max_xml:text-[1rem]  flex items-center justify-center gap-2 font-bold text-[2rem]`,
    skip: `flex text-white text-[1.5rem] max_xml:text-[14px] items-center bg-blue-500 hover:bg-blue-400 cursor-pointer px-7 rounded-[1.5rem] text-ceneter`,
    btnWrapper: `w-[100%] flex justify-around py-4`,
  }

  const [loading, setLoading] = useState<boolean>(false)

  const {
    title,
    summary,
    lastName,
    firstName,
    github,
    linkedin,
    website,
    hrPay,
  } = UserInfoState
  const handleUpdateUserInfo = async () => {
    if (UserState.userData.user && UserState.userData.user._id) {
      setLoading(true)
      try {
        const data = await axios.patch(
          `${import.meta.env.VITE_GLOBAL_URL}/user/info/${
            UserState.userData.user._id
          }`,
          {
            lastName,
            firstName,
            title,
            summary,
            github,
            linkedin,
            website,
            hrPay,
            skills: PortfolioState.technologies,
          },
        )
        setSuccess(data.data.msg)
        setLoading(false)
        navigate('/dev_project_add/title')
      } catch (error) {
        const err: any = error

        setError(err.response.data.msg)
        setLoading(false)
      }
    }
  }
  const navigate = useNavigate()

  return (
    <div className={style.mainDiv}>
      <h1 className={style.header}>Tell us more about you</h1>
      <p className={style.header}>
        you can{' '}
        <span className={style.skip} onClick={() => navigate('/profile')}>
          skip
        </span>
        this part and fill out later
      </p>
      <Portfolio_layout>
        <section className="w-[100%]">
          <InputFieldGeneral
            label={`First Name`}
            placeholder="Ex. Jon"
            dispatch={UserInfoDispatct}
            state={UserInfoState}
            dispatchType="firstName"
            stateType="firstName"
          />
          <InputFieldGeneral
            label={`Last Name`}
            placeholder="Ex. Doe"
            dispatch={UserInfoDispatct}
            state={UserInfoState}
            dispatchType="lastName"
            stateType="lastName"
          />
          <InputFieldGeneral
            label={`Who are you?`}
            placeholder="Ex. Full-Stack web developer"
            dispatch={UserInfoDispatct}
            state={UserInfoState}
            dispatchType="title"
            stateType="title"
          />
          <TextAreaGeneral
            label={`Talk about you`}
            placeholder="Enter a brief descritpion about yourself"
            dispatch={UserInfoDispatct}
            state={UserInfoState}
            dispatchType="summary"
            stateType="summary"
          />
          <InputFieldGeneral
            label={`Github`}
            placeholder="https://github.com/"
            dispatch={UserInfoDispatct}
            state={UserInfoState}
            dispatchType="github"
            stateType="github"
          />
          <InputFieldGeneral
            label={`Linkedin`}
            placeholder="https://www.linkedin.com/"
            dispatch={UserInfoDispatct}
            state={UserInfoState}
            dispatchType="linkedin"
            stateType="linkedin"
          />
          <InputFieldGeneral
            label={`Personal Website`}
            placeholder="https://www.personal-website.com/"
            dispatch={UserInfoDispatct}
            state={UserInfoState}
            dispatchType="website"
            stateType="website"
          />
          <InputFieldGeneral
            label={`hourly rate expectation`}
            placeholder="5.0$"
            dispatch={UserInfoDispatct}
            state={UserInfoState}
            dispatchType="hrPay"
            stateType="hrPay"
            type="number"
          />
          <SkillSelection />
          <div className={style.btnWrapper}>
            <button
              onClick={() => navigate('/profile')}
              className="bg-blue-500  px-10 p-2 rounded-[10px] text-white"
            >
              Skip
            </button>
            <button
              className="bg-green-500 px-10 p-2 rounded-[10px] text-white"
              onClick={handleUpdateUserInfo}
            >
              Save info
            </button>
          </div>
        </section>
      </Portfolio_layout>
      <Error error={statusState.error} />
      <Succsess success={statusState.success} />
      <LoadingComponent loading={loading} />
    </div>
  )
}
