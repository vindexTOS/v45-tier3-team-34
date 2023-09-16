import { useRef } from "react";
import "../../../index.css";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";

interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({
  children,
  baseVelocity = 100,
}: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(
    scrollVelocity,
    {
      damping: 50,
      stiffness: 400,
    }
  );
  const velocityFactor = useTransform(
    smoothVelocity,
    [0, 1000],
    [0, 5],
    {
      clamp: false,
    }
  );

  /**
   * This is a magic wrapping for the length of the text - you
   * have to replace for wrapping that works for you or dynamically
   * calculate
   */
  const x = useTransform(
    baseX,
    (v) => `${wrap(-20, -45, v)}%`
  );

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy =
      directionFactor.current *
      baseVelocity *
      (delta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy +=
      directionFactor.current *
      moveBy *
      velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
    <div className="parallax">
      <motion.div
        className="scroller"
        style={{ x }}
      >
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

export default function App2() {
  return (
    <section className="h-[100vh] lg:flex flex-col justify-center relative hidden">
      <div className="">
        <div className="justify-center mx-auto bg-tersiary dark:bg-slate-900 w-[30%] p-3 rounded-3xl mb-[20rem] shadow-lg shadow-green-100 dark:shadow-tersiary dark:border dark:border-primary">
          <p className=" text-center font-header text-secondary dark:text-muted animate-pulse">
            👋🏼 Hello and Welcome
          </p>
        </div>
        <ParallaxText baseVelocity={-5}>
          DevConnect
        </ParallaxText>
        <ParallaxText baseVelocity={5}>
          Get Started
        </ParallaxText>
      </div>
    </section>
  );
}
