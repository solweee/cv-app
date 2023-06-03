import { useState, useEffect } from "react";
import { NavButton } from "../NavButton/NavButton";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Scroll from "react-scroll";
import "./ToTopBtn.scss";

export function ToTopBtn() {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.querySelector("#about") && window.scrollY > document.querySelector("#about").offsetHeight) {
        setShowScrollTopButton(true);
      } else {
        setShowScrollTopButton(false);
      }
    });
  }, []);
  const scroll = Scroll.animateScroll;

  return (
    showScrollTopButton && (
      <div className="to-top">
        <NavButton
          clickAction={() => scroll.scrollToTop()}
          icon={faChevronRight}
        />
      </div>
    )
  );
}
