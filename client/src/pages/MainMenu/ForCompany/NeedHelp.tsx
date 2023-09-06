import { Link } from "react-router-dom";
import NeedHelpCard from "../../../components/MainMenuPages/ForCompanyPage/NeedHelpCard";

export default function NeedHelp() {
  return (
    <div className="">
      <div className="bg-[url('/assets/img/find_client.png')] bg-cover  bg-no-repeat bg-center bg-gray-500 bg-fixed md:bg-scroll   sm:rounded-xl  text-white p-2 md:p-8 flex flex-col gap-2 md:gap-y-20 mx-auto">
        <section className="flex flex-col gap-4 md:gap-10">
          <article className="w-full md:max-w-xl flex flex-col gap-y-12 bg-blue-700 rounded-lg p-5">
            <h1 className="text-xs capitalize font-light py-1 px-4 bg-blue-900 rounded-lg max-w-min whitespace-nowrap">
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
