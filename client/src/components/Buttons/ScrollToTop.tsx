import React, {
  useEffect,
  useState,
} from "react";
import classNames from "classnames";
import { IoIosArrowUp } from "react-icons/io";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] =
    useState(false);

  // Show the button when the user scrolls down
  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );
    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      id="scroll"
      className={classNames(
        "fixed right-10 bottom-10 cursor-pointer w-12 h-12 bg-green-500 hover:bg-green-800 transition-all duration-150 ease-in-out rounded-full flex items-center justify-center",
        {
          hidden: !isVisible,
        }
      )}
      onClick={scrollToTop}
    >
      <IoIosArrowUp className="text-white text-2xl" />
    </button>
  );
};

export default ScrollToTop;
