import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { buttonVariants } from "../../../Shadcn/components/ui/button";

export default function StartJourney() {
  return (
    <div>
      <div className="p-10 border border-white rounded-md bg-white/30 dark:border-slate-500 dark:bg-gray-900/60 hover:dark:bg-gray-900 my-10">
        <h3 className="text-[2rem] font-semibold text-muted dark:text-muted">
          Start your journey
        </h3>
        {/* Buttons */}
        <div className="flex gap-x-5 gap-y-2 sm:gap-5 w-full sm:w-max flex-wrap mt-5">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              className={buttonVariants({
                variant: "default",
              })}
              to={"/register"}
            >
              Get Started
            </Link>{" "}
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Link
              className={buttonVariants({
                variant: "secondary",
              })}
              to={"#"}
            >
              View Projects
            </Link>{" "}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
