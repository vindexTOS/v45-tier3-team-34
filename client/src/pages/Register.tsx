import { useState, useEffect } from 'react'
import InputField from '../components/Forms/InputField'
import { RegisterFormType } from '../common.types'
import ImgUpload from '../components/Profile_photo_upload'
import DropDownSelect from '../components/Forms/dropDownSelect'
import { UseMainContext } from '../context'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import Error from '../components/Status/Error'
import Loading from '../components/Status/Loading'
const Register = () => {
  const {
    hanldeAuth,
    ImgState,
    statusState,
    Authloading,
    UserState,
  } = UseMainContext()

  const [formData, setFormData] = useState<RegisterFormType>({
    email: '',
    userName: '',
    password: '',
    confirmPassword: '',
    role: 'Developer',
  })

  //submit data
  async function handleSubmit() {
    // avatar:ImgState.imgUrl
    const { email, userName, password, confirmPassword, role } = formData

    hanldeAuth(
      {
        email,
        userName,
        password,
        confirmPassword,
        avatar: ImgState.imgUrl,
        role,
      },
      'register',
    )
  }

  return (
    <main className="flex items-center justify-center relative mb-20 -mt-20">
      <Error error={statusState.error} />
      <Loading loading={Authloading} />

      {/* <button onClick={() => console.log(ImgState.imgUrl)}>CLICK</button> */}
      <section className="w-[90%] lg:w-[30%] h-[80vh] flex flex-col py-10 px-5 sm:px-12 text-center border border-slate-500/50 dark:border-green-500/50 bg-white rounded-2xl dark:bg-slate-800 justify-between">
        {/* Title */}
        <article className="">
          <h1 className="text-sm font-sm text-light-text dark:text-dark-text">
            Hello and Welcome to
          </h1>
          <Link
            to="/"
            className="text-2xl font-extrabold text-green-700 dark:text-green-500"
          >
            DevConnect
          </Link>
        </article>

        {/* title */}
        <article className="">
          <h1 className="text-[1.4rem] text-gray-600 dark:text-dark-text font-light">
            Create a free account
          </h1>
        </article>
        {/* form here  */}
        <article className="flex flex-col gap-y-2 justify-center items-center">
          {/* upload image need more style improvement */}
          <div className="relative">
            <ImgUpload avatar="" />
          </div>
          <div className="space-y-3 w-[80%]">
            <InputField
              data={formData}
              setData={setFormData}
              type="text"
              field="full_name"
              label="Full Name"
            />
            <DropDownSelect
              setData={setFormData}
              type="text"
              field="role"
              label="Who are you ?"
            />
            <InputField
              data={formData}
              setData={setFormData}
              field="email"
              type="email"
              label="Email"
            />

            <InputField
              field="password"
              type="password"
              label="Password"
              data={formData}
              setData={setFormData}
            />
            <InputField
              field="password_confirm"
              type="password"
              label="confirm password"
              data={formData}
              setData={setFormData}
            />
          </div>

          {/* create account button */}
        </article>
        <article>
          <div className="my-4 text-center flex items-center justify-center">
            <div className="border-t border-gray-200 flex-grow"></div>
            <Link
              className="font-light text-[13px] text-gray-500 dark:text-gray-300 mx-2 p-2"
              to="/login"
            >
              Already have an account
            </Link>
            <div className="border-t border-gray-200 flex-grow"></div>
          </div>

          <button
            onClick={handleSubmit}
            className="mt-2 mx-auto py-2 px-16 border-2 border-green-700 rounded-2xl font-semibold text-base text-green-700 hover:bg-green-400/30  hover:border-green-600 transition-all duration-300"
          >
            Create account
          </button>
        </article>
      </section>
      <span className="absolute -bottom-10 left-0 right-0 whitespace-nowrap text-xs text-slate-500 text-center justify-center">
        © 2023 DevConnect
      </span>
    </main>
  )
}

export default Register
