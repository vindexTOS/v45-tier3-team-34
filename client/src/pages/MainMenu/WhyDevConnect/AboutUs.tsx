// import React from 'react'

import AboutTeam from "../../../components/MainMenuPages/WhyDevConnectPage/AboutTeam";
import StartJourney from "./StartJourney";

export default function AboutUs() {
  return (
    <div className="mx-auto text-muted dark:text-muted w-[90%] lg:w-[60%]  items-center justify-center my-14">
      <div className="space-y-6">
        <div className="">
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
        <StartJourney />
        <AboutTeam />
      </div>
    </div>
  );
}
