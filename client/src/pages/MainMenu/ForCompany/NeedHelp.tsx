import NeedHelpCard from "../../../components/MainMenuPages/ForCompanyPage/NeedHelpCard";
import NeedCard from "./NeedCard";

export default function NeedHelp() {
  return (
    <div className="">
      <NeedCard />
      <div>
        {/* actions */}
        <article className="flex flex-wrap gap-6 space-y-5 sm:space-y-0 items-center justify-center my-20">
          <NeedHelpCard
            link="/"
            title="Create company profile"
            sub_title="Highlight your skills and experience, show your portfolio, and set your ideal pay rate."
          />
          <NeedHelpCard
            link="/"
            title="Post a Project"
            sub_title="Search on Talent Marketplace™ for the hourly or fixed-price work you’re looking for."
          />
          <NeedHelpCard
            link="/"
            title="Review Applications"
            sub_title="Set your rate and tell clients why you’re the right person for the job!"
          />
          <NeedHelpCard
            link="/"
            title="Assign Developer"
            sub_title="If the client likes your proposal they’ll send you a contract to begin working."
          />
          <NeedHelpCard
            link="/"
            title="Approve work"
            sub_title="Check steps off as you finish and work with your client if you have questions."
          />
          <NeedHelpCard
            link="/"
            title="Pay Develpor"
            sub_title="Once the client approves your work, you'll get paid and they can leave you feedback."
          />
        </article>
      </div>
    </div>
  );
}
