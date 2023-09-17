import { HiStar } from "react-icons/hi";
import { categories_temp } from "../../../contants/index.js";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const imageAnimate = {
  offscreen: { y: 200, opacity: 0 },
  onscreen: {
    y: 0,
    opacity: 1,
    rotate: [0, 10, 0],
    transition: {
      type: "tween",
      delay: 1,
      duration: 1,
    },
  },
};

function Card({
  title,
  rating,
  skills,
  id,
}: any) {
  return (
    <motion.div
      variants={imageAnimate}
      className="bg-[#F7FAF7] hover:bg-[#e2ede2] backdrop-blur-sm  dark:bg-white/10 border border-white dark:border-green-900 dark:hover:bg-white/5 p-4 lg:p-8 shadow-md/40 dark:shadow-gray-950 hover:shadow-lg/40 transition-shadow delay-75 sm:min-h-[120px]  cursor-pointer rounded-lg"
    >
      <motion.h1 className="text-[1.2rem] font-semibold mb-2 text-muted dark:text-muted">
        {title}
      </motion.h1>
      <motion.div className="flex justify-between text-muted dark:text-muted text-[0.7rem]">
        <p className="flex items-center gap-1 ">
          <span className="text-primary text-md">
            <HiStar />
          </span>
          {rating}/5
        </p>
        <p>{skills} skills</p>
      </motion.div>
    </motion.div>
  );
}

export default function CatFramer() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {categories_temp.map((item, index) => (
        <motion.div
          onClick={() =>
            navigate(`/ForDeveloper/ListProjects`)
          }
          initial={"offscreen"}
          whileInView={"onscreen"}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.2 }}
          key={index}
        >
          <Card
            title={item.title}
            rating={item.rating}
            skills={item.skills}
            id={undefined}
          />
        </motion.div>
      ))}
    </div>
  );
}
