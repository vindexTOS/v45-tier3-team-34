// import React from 'react'

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { buttonVariants } from "../../Shadcn/components/ui/button";

export default function LoginRegButton() {
  return (
    <div>
      {" "}
      <div className="flex gap-x-5 gap-y-2 sm:gap-5 w-full sm:w-max flex-wrap mt-5">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.8 }}
        >
          <Link
            className={buttonVariants({
              variant: "default",
            })}
            to={"/login"}
          >
            Login
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
            to={"/register"}
          >
            Register
          </Link>{" "}
        </motion.div>
      </div>
    </div>
  );
}
