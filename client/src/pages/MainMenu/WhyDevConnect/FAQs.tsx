// import React from 'react'

import FAQCard from "../../../components/MainMenuPages/WhyDevConnectPage/FAQCard";

export default function FAQs() {
  return (
    <div className="w-[90%] lg:w-[60%] mx-auto my-14">
      <div className="text-center text-light-text dark:text-dark-text transition-all duration-500 delay-100 ease-in-out text-light-primary dark:text-dark-primary">
        <h3 className="text-[2rem] font-bold ">
          Frequently Asked Questions
        </h3>
        <p>More questions you may want to ask</p>
      </div>
      <FAQCard />
    </div>
  );
}
