
import { useState } from "react"
import InputField from "../components/Forms/InputField"
import { RegisterFormType } from "../common.types"

const Login = () => {
    const [formData, setFormData] = useState<RegisterFormType>({
        email:"",
        password:"",
    })
  
  //submit data
  function handleSubmit(){
      console.log(formData)
    }
        
  return (
    <main className="w-full flex flex-col md:flex-row  place-content-center">
        <section className="w-full md:w-[50%] lg:w-[40%] flex flex-col   py-4 px-2 sm:px-12 ">
        {/* kinda logo */}
        <article className="flex justify-between mb-8 sm:mb-20">
            <a href="/" className="text-2xl md:text-4xl font-extrabold text-gray-800">devConnect</a>
            <h1 className="text-sm text-gray-800 font-extralight">went</h1>
        </article>
        
        {/* title */}
        <article className="my-6 sm:my-24 mb-20 md:mb-auto">
            <h1 className="text-3xl md:text-2xl font-light md:font-semibold">Welcome back 😁</h1>   
        </article>
            {/* form here  */}
              <article className="flex flex-col gap-y-2 xl:mr-20">

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
                  {/* create account button */}
          <button
            onClick={handleSubmit}
            className="mt-2 bg-red-600 py-4 px-4 outline-none border-none rounded-sm font-semibold text-sm text-white">Login</button>
                  <a
                      className="font-light text-end text-[13px] text-gray-700"
                      href="/register">Don't have an account</a>
        </article>
              
      </section>
      <section className=" flex-1 md:block  min-h-[500px] bg-[url('assets/img/bg-temp.jpg')] bg-cover bg-no-repeat bg-center">
              {/* image or samething else */}
              <article className="bg-gradient-to-b min-h-full from-slate-800 to-transparent p-4">
                  
                <h1 className="text-4xl font-extrabold text-white ">Add samething here ...</h1>
                <p className="text-lg text-white font-light">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ullam odio deserunt ipsum, modi, soluta nulla
                </p>
              </article>
      </section>
    </main>
  )
}

export default Login

