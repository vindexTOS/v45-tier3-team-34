// import React from "react";

import { Link } from "react-router-dom";

export default function NeedHelpDev() {
  return (
    <div>
      <div className="bg-[url('/assets/img/find_client_bg.png')] bg-cover  bg-no-repeat bg-gray-500 bg-fixed md:bg-scroll   sm:rounded-xl  text-white p-2 md:p-8 flex flex-col gap-2 md:gap-y-20 w-[80%] mx-auto">
        <section className="flex flex-col gap-4 md:gap-10">
          <article className="w-full md:max-w-xl flex flex-col gap-y-12 bg-green-600 rounded-lg p-5">
            <h1 className="text-xs capitalize font-light py-1 px-4 bg-green-800 rounded-lg max-w-min whitespace-nowrap">
              Find Developer
            </h1>
            <h1 className="text-[2.8rem] font-bold ">
              Need Developer Help?
            </h1>
            <p className="text-[1.2rem] font-normal">
              Follow these easy steps to begin{" "}
              <br /> your journey with
              <strong> DevConnect</strong>.
              <p className="mt-5 text-xs">
                For additional information, please
                visit our{" "}
                <Link
                  to="/WhyDevConnect/FAQs"
                  className="hover:underline font-medium"
                >
                  FAQ page
                </Link>
                .
              </p>
            </p>
          </article>
        </section>
      </div>
      <div>
        {/* actions */}
        {/* <article className='flex flex-wrap w-full 3xl:w-10/12 gap-6 '>
                  <FindClientcard
                      link='/'
                      title='Post a job and hire a professional'
                      sub_title='Talenta Markeplace'
                  />
                  <FindClientcard
                      link='/'
                      title='Browse and buy some projects'
                      sub_title='Project Catalog'
                  />
                  <FindClientcard
                      link='/'
                      title='Let us help you find the right talent'
                      sub_title='Talenta Scout'
                  />
              </article> */}
      </div>
    </div>
  );
}
