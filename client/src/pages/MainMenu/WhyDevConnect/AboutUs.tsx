// import React from 'react'

import HeroCTAButton from "../../../components/Buttons/HeroCTAButton";

export default function AboutUs() {
  return (
    <div className="mx-auto text-slate-700 dark:text-slate-500 transition-all duration-500 delay-100 ease-in-out w-[90%] lg:w-[40%]  items-center justify-center my-14">
      <div className="space-y-6">
        <div className="text-light-text dark:text-dark-text">
          <h3 className="text-[2.5rem] font-bold">
            About Us
          </h3>
          <p className="p-0 tracking-tight font-medium">
            We connect junior developers with
            low-paid real-world projects
          </p>
        </div>
        <div>
          <h4 className="text-[1rem] font-semibold">
            What is it?
          </h4>
          <p className="ml-3 text-sm mb-2">
            A Platform that creates connections
            between junior developers and clients
            in search of cost-effective software
            solutions. We facilitate growth
            through real-world projects and
            hands-on learning, empowering both
            developers and clients in a mutually
            beneficial partnership.
          </p>
          <p className="ml-3 text-sm">
            Our platform is designed to drive
            success by bringing together talent
            and opportunities.
          </p>
        </div>
        <div>
          <h4 className="text-[1rem] font-semibold">
            Why was it developed?
          </h4>
          <p className="ml-3 text-sm mb-2">
            DevConnect was developed by a team of
            four software developers participating
            in the Chingu Voyage 45, a six-week
            endeavor dedicated to creating
            functional platforms. We started on
            this journey with a shared vision
            because we understand the challenges
            faced by junior developers in securing
            real-world experience and the needs of
            small companies seeking cost-effective
            software solutions.
          </p>
          <p className="ml-3 text-sm">
            DevConnect aligns perfectly with the
            Chingu mission to nurture soft skills
            and foster collaboration through group
            project development. Our platform
            serves as a bridge, uniting aspiring
            developers with opportunities to
            learn, grow, and contribute to
            real-world projects while aiding small
            businesses in finding affordable
            software solutions.
          </p>
        </div>
      </div>
      <div className="p-10 border border-white rounded-md bg-white/30 dark:border-slate-500 dark:bg-gray-900/60 hover:dark:bg-gray-900 my-10">
        <h3 className="text-[2rem] font-semibold">
          Start your journey
        </h3>
        {/* actions */}
        <div className="flex gap-x-10 gap-y-2 sm:gap-14 w-full sm:w-max flex-wrap mt-5">
          <HeroCTAButton
            title="SignUp Today"
            color="green"
          />
          <HeroCTAButton
            title="View all Projects"
            color="white"
          />
        </div>
      </div>
    </div>
  );
}
