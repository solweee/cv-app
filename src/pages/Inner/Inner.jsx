import { Panel } from "../../components/Panel/Panel";
import { Box } from "../../components/Box/Box";
import { ToTopBtn } from "../../components/ToTopBtn/ToTopBtn";
import { About } from "../../components/About/About";
import { TimeLine } from "../../components/TimeLine/TimeLine";
import { Experience } from "../../components/Experience/Experience";
import { Portfolio } from "../../components/Portfolio/Portfolio";
import { Address } from "../../components/Address/Address";
import { Feedback } from "../../components/Feedback/Feedback";
import { experienceData, feedbackData } from "../../utils/appData/appData";
import { Skills } from "../../components/Skills/Skills";
import { useRef, useState, useEffect } from "react";
import "./Inner.scss";

export function Inner() {
  const [activeBox, setActiveBox] = useState(null);
  const sectionRefs = useRef({});
  
  const handleIntersection = function (entries) {
    entries.forEach((entry) => {
      if (entry.target.id !== activeBox && entry.isIntersecting) {
        setActiveBox(entry.target.id);
      }
    });
  };
  useEffect(() => {
    const sections = Object.values(
      document.getElementsByClassName("container-box")
    ).map((item) => item.id);
    const observerOptions = {
      root: null,
      threshold: 0.5,
    };
    if (!window.IntersectionObserver) return;
    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions
    );
    sections.forEach((id) => {
      observer.observe(sectionRefs.current[id]);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (name) => {
    sectionRefs.current[name].scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="inner-page">
      <Panel activeBox={activeBox} handleClick={handleClick} />
      <main className="main-content">
        <Box
          ref={(el) => (sectionRefs.current["about"] = el)}
          id="about"
          title="About me"
        >
          <About />
        </Box>
        <Box
          ref={(el) => (sectionRefs.current["education"] = el)}
          id="education"
          title="Education"
        >
          <TimeLine />
        </Box>
        <Box
          ref={(el) => (sectionRefs.current["experience"] = el)}
          id="experience"
          title="Experience"
        >
          <Experience data={experienceData} />
        </Box>
        <Box
          ref={(el) => (sectionRefs.current["skills"] = el)}
          id="skills"
          title="Skills"
        >
          <Skills />
        </Box>
        <Box
          ref={(el) => (sectionRefs.current["portfolio"] = el)}
          id="portfolio"
          title="Portfolio"
        >
          <Portfolio />
        </Box>
        <Box
          ref={(el) => (sectionRefs.current["contacts"] = el)}
          id="contacts"
          title="Contacts"
        >
          <Address />
        </Box>
        <Box
          ref={(el) => (sectionRefs.current["feedback"] = el)}
          id="feedback"
          title="Feedbacks"
        >
          <Feedback data={feedbackData} />
        </Box>
        <ToTopBtn />
      </main>
    </div>
  );
}
