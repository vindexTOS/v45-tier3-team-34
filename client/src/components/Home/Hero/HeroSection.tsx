import { companies } from "../../../contants";
import HeroCompany from "./HeroCompany";
import Lottie from "lottie-react";
import animationData from "../../../../src/assets/lottie/animation_llpgw5p0.json";
import { motion } from "framer-motion";
import { buttonVariants } from "../../../Shadcn/components/ui/button";
import { Link } from "react-router-dom";
import { useRef } from "react";
import LoginRegButton from "../../Buttons/RegListButton";

const HeroSection = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5],
    [1.5, 0.8]
  );

  return (
    <motion.section
      ref={targetRef}
      className="rounded-lg w-full flex flex-col sm:flex-row"
    >
      <article className="flex-1 flex flex-col items-start justify-center gap-20 p-5 lg:px-20">
        <motion.div style={{ scale }}>
          <div className="flex flex-col gap-2 lg:gap-4">
            <h1 className="text-[2.7rem] sm:text-[4rem] capitalize font-bold text-primary dark:text-primary font-header">
              DevConnect
            </h1>
            <p className="text-muted dark:text-muted">
              We connect junior developers with{" "}
              <br />
              low-paid real-world projects
            </p>

            {/* Buttons */}
            <LoginRegButton />
          </div>
        </motion.div>
        <motion.div
          style={{ scale }}
          className="flex flex-col gap-4"
        >
          <h2 className="text-sm text-muted dark:text-muted">
            Working with the best
          </h2>
          {/* socials */}
          <div className="flex gap-8 text-muted dark:text-muted">
            {companies.map(({ name, icon }) => (
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <HeroCompany
                  key={name}
                  title={name}
                  icon={icon}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </article>
      {/* Image section */}
      <motion.article
        style={{ scale }}
        className="flex-1 flex items-center justify-center"
      >
        <Lottie
          className="w-[80%] h-auto"
          animationData={animationData}
        />
      </motion.article>
    </motion.section>
  );
};

export default HeroSection;
