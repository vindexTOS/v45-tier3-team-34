import { useState } from "react";
import InputField from "../components/Forms/InputField";
import { RegisterFormType } from "../common.types";
import { UseMainContext } from "../context";
import { Link } from "react-router-dom";
import Error from "../components/Status/Error";
import Loading from "../components/Status/Loading";

const Login = () => {
  const { hanldeAuth, statusState, Authloading } =
    UseMainContext();

  const [formData, setFormData] =
    useState<RegisterFormType>({
      email: "",
      password: "",
    });

  // Submit data
  async function handleSubmit() {
    const { email, password } = formData;

    hanldeAuth({ email, password }, "login");
  }

  return (
    <main className="flex items-center justify-center relative">
      <Error error={statusState.error} />
      <Loading loading={Authloading} />
      <section className="w-[90%] lg:w-[30%] h-[60vh] flex flex-col py-10 px-5 sm:px-12 text-center border border-slate-500/50 dark:border-green-500/50 bg-white rounded-2xl dark:bg-slate-800 justify-between">
        {/* Title */}
        <article className="">
          <h1 className="text-md font-sm text-light-text dark:text-dark-text mb-2">
            Log in to
          </h1>
          <Link
            to="/"
            className="text-2xl font-extrabold text-green-700 dark:text-green-500"
          >
            DevConnect
          </Link>
        </article>

        {/* Form here  */}
        <article className="flex flex-col justify-center items-center">
          <div className="space-y-3 w-[80%]">
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
          </div>
        </article>

        {/* Create account button */}
        <article>
          <div className="my-8 text-center flex items-center justify-center">
            <div className="border-t border-gray-200 flex-grow"></div>
            <Link
              className="font-light text-[13px] text-gray-500 dark:text-gray-300 mx-2 p-2"
              to="/register"
            >
              Don't have an account?
            </Link>
            <div className="border-t border-gray-200 flex-grow"></div>
          </div>

          <button
            onClick={handleSubmit}
            className="mt-2 mx-auto py-2 px-16 border-2 border-green-700 rounded-2xl font-semibold text-base text-green-700 hover:bg-green-400/30  hover:border-green-600 transition-all duration-300"
          >
            Login
          </button>
        </article>
      </section>
      <span className="absolute -bottom-10 left-0 right-0 whitespace-nowrap text-xs text-slate-500 text-center justify-center">
        © 2023 DevConnect
      </span>
    </main>
  );
};

export default Login;
