import { Link } from "react-router-dom";
import { HiStar } from "react-icons/hi";
import { motion } from "framer-motion";

const cardAnimate = {
  hidden: { y: 300, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 2,
    },
  },
};

const CategoryCard = ({
  title,
  rating,
  skills,
}: {
  title: string;
  rating: number;
  skills: number;
}) => {
  return (
    <div>
      <motion.article
        initial={"hidden"}
        whileInView={"visible"}
        viewport={{ once: false, amount: 0.8 }}
        transition={{ staggerChildren: 0.5 }}
        variants={cardAnimate}
        className="bg-[#F7FAF7] hover:bg-[#e2ede2] backdrop-blur-sm  dark:bg-white/10 border border-white dark:border-green-900 dark:hover:bg-white/5 p-4 lg:p-8 shadow-md/40 dark:shadow-gray-950 hover:shadow-lg/40 transition-shadow delay-75 sm:min-h-[120px] flex flex-col justify-between cursor-pointer rounded-lg"
      >
        <h1 className="text-[1.2rem] font-semibold mb-2 text-muted dark:text-muted">
          {title}
        </h1>
        <div className="flex justify-between text-muted dark:text-muted text-[0.7rem] lg:text-[0.8rem]">
          <p className="flex items-center gap-1 ">
            <span className="text-primary text-md">
              <HiStar />
            </span>
            {rating}/5
          </p>
          <p>{skills} skills</p>
        </div>
      </motion.article>
    </div>
  );
};

export default CategoryCard;
