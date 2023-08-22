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
    <main className="min-h-screen flex items-center justify-center">
      <Error error={statusState.error} />
      <Loading loading={Authloading} />
      <section className="w-full lg:w-[30%] flex flex-col py-10 px-5 sm:px-12 text-center bg-white rounded-2xl">
        {/* Kinda logo */}
        <article className="pb-20 sm:mb-auto">
          <a
            href="/"
            className="text-2xl font-extrabold text-gray-800 dark:text-gray-200"
          >
            DevConnect
          </a>
        </article>

        {/* Title */}
        <article className="sm:my-6 my-12 mb-10 md:mb-16">
          <h1 className="text-2xl font-normal">
            Log in to DevConnect
          </h1>
        </article>
        {/* Form here  */}
        <article className="flex flex-col gap-y-2 justify-center">
          <div className="mb-10">
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
          {/* Create account button */}

          <Link
            className="font-light text-[13px] text-gray-700 mt-2 text-center"
            to="/register"
          >
            Don't have an account?
          </Link>

          <button
            onClick={handleSubmit}
            className="mt-2 mx-auto py-2 px-10 border border-green-700 rounded-2xl font-semibold text-base text-green-700 hover:bg-green-800 hover:text-white hover:border-green-600 transition-all duration-300"
          >
            Login
          </button>
        </article>
      </section>
    </main>
  );
};

export default Login;
