// import React from "react";
import { Link } from "react-router-dom";

export default function NeedCard() {
  return (
    <div>
      <div className="bg-[url('/assets/img/find_client.png')] bg-cover bg-no-repeat bg-center bg-gray-500 bg-fixed md:bg-scroll   sm:rounded-xl  text-white p-2 md:p-8 flex flex-col gap-2 md:gap-y-20 mx-auto">
        <section className="flex flex-col gap-4 md:gap-10">
          <article className="w-full md:max-w-xl flex flex-col gap-y-12 bg-accent rounded-lg p-5">
            <h1 className="text-xs capitalize font-light py-1 px-4 bg-accent-accentdrk rounded-lg max-w-min whitespace-nowrap">
              For Company
            </h1>
            <h1 className="text-[2.8rem] font-bold ">
              Need Help?
            </h1>
            <p className="text-[1rem] font-normal">
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
    </div>
  );
}
