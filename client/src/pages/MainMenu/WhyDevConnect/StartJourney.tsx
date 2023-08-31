import HeroCTAButton from "../../../components/Buttons/HeroCTAButton";

export default function StartJourney() {
  return (
    <div>
      {" "}
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
