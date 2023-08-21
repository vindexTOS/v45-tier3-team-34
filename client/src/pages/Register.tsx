import { useState, useEffect } from "react";
import InputField from "../components/Forms/InputField";
import { RegisterFormType } from "../common.types";
import ImgUpload from "../components/Profile_photo_upload";
import DropDownSelect from "../components/Forms/dropDownSelect";
import { UseMainContext } from "../context";
import {
  Link,
  useNavigate,
  useLocation,
} from "react-router-dom";
import Error from "../components/Status/Error";
import Loading from "../components/Status/Loading";
const Register = () => {
  const {
    hanldeAuth,
    ImgState,
    statusState,
    Authloading,
    UserState,
  } = UseMainContext();

  const [formData, setFormData] =
    useState<RegisterFormType>({
      email: "",
      userName: "",
      password: "",
      confirmPassword: "",
      role: "",
    });

  //submit data
  async function handleSubmit() {
    // avatar:ImgState.imgUrl
    const {
      email,
      userName,
      password,
      confirmPassword,
      role,
    } = formData;

    hanldeAuth(
      {
        email,
        userName,
        password,
        confirmPassword,
        avatar: ImgState.imgUrl,
        role,
      },
      "register"
    );
  }

  return (
    <main className="w-full flex flex-col md:flex-row place-content-center ">
      <Error error={statusState.error} />
      <Loading loading={Authloading} />
      {/* <button onClick={() => console.log(ImgState.imgUrl)}>CLIC</button> */}
      <section className="w-full md:w-[50%] lg:w-[40%] flex flex-col  py-4 px-2 sm:px-12 ">
        {/* kinda logo */}
        <article className="text-gray-800 dark:text-gray-400">
          <a
            href="/"
            className="text-xg md:text-2xl font-extrabold "
          >
            devConnect
          </a>
          <h1 className="text-sm  font-extralight">
            Description goes here
          </h1>
        </article>

        {/* title */}
        <article className="my-6 sm:my-8">
          <h1 className="text-3xl md:text-2xl dark:text-gray-400 font-light md:font-semibold">
            Create a free account
          </h1>
        </article>
        {/* form here  */}
        <article className="flex flex-col gap-y-2 xl:mr-20">
          {/* upload image need more style improvement */}
          <div className="relative">
            <ImgUpload avatar="" />
          </div>

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

          {/* create account button */}
          <button
            //submit data
            onClick={handleSubmit}
            className="mt-2 bg-red-600 py-4 px-4 outline-none border-none rounded-sm font-semibold text-sm text-white"
          >
            create account
          </button>
          <Link
            className="font-light text-end text-[13px] text-gray-700"
            to="/login"
          >
            Already have an account
          </Link>
        </article>
      </section>
      {/* was hidden */}
      <section className=" flex-1 md:block   md:min-h-screen bg-[url('/assets/img/bg-temp.jpg')] bg-cover bg-no-repeat bg-center">
        {/* image or samething else */}
        <article className="bg-gradient-to-b h-[400px] md:min-h-full from-slate-800 to-transparent p-4">
          <h1 className="text-4xl font-extrabold text-white ">
            Add samething here ...
          </h1>
          <p className="text-lg text-white font-light">
            Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Nesciunt
            ullam odio deserunt ipsum, modi,
            soluta nulla
          </p>
        </article>
      </section>
    </main>
  );
};

export default Register;
