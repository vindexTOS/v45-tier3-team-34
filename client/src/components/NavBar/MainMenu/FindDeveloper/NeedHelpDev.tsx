// import React from "react";

import { Link } from "react-router-dom";
import NeedHelpDevCard from "../../../FindDeveloperPage/NeedHelpDevCard";

export default function NeedHelpDev() {
  return (
    <div className="">
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
        <article className="flex flex-wrap gap-6 space-y-5 sm:space-y-0 items-center justify-center my-20">
          <NeedHelpDevCard
            link="/"
            title="Create a profile"
            sub_title="Highlight your skills and experience, show your portfolio, and set your ideal pay rate."
          />
          <NeedHelpDevCard
            link="/"
            title="Search for jobs"
            sub_title="Search on Talent Marketplace™ for the hourly or fixed-price work you’re looking for."
          />
          <NeedHelpDevCard
            link="/"
            title="Submit a proposal"
            sub_title="Set your rate and tell clients why you’re the right person for the job!"
          />
          <NeedHelpDevCard
            link="/"
            title="Get contract"
            sub_title="If the client likes your proposal they’ll send you a contract to begin working."
          />
          <NeedHelpDevCard
            link="/"
            title="Complete the work"
            sub_title="Check steps off as you finish and work with your client if you have questions."
          />
          <NeedHelpDevCard
            link="/"
            title="Get paid securely"
            sub_title="Once the client approves your work, you'll get paid and they can leave you feedback."
          />
        </article>
      </div>
    </div>
  );
}
