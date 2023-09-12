// import React from "react";

import NeedHelpDevCard from "../../../components/MainMenuPages/ForDeveloperPage/NeedHelpDevCard";
import DevHeader from "../../../components/MainMenuPages/ForDeveloperPage/DevHeader";

export default function NeedHelpDev() {
  return (
    <div className="">
      <DevHeader />
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
