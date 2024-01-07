import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";
import { GoMoveToTop } from "react-icons/go";

const ButtomToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop({
      duration: 500,
      smooth: "easeInOutQuint",
    });
  };

  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  window.addEventListener("scroll", toggleVisibility);

  return (
    <div className="">
      {isVisible && (
        <button className="scroll-to-top sm:p-2 p-1" onClick={scrollToTop}>
          <GoMoveToTop size={25} />
        </button>
      )}
    </div>
  );
};

export default ButtomToTop;
