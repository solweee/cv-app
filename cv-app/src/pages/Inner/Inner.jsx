import { Panel } from "../../components/Panel/Panel";
import { Box } from "../../components/Box/Box";
import { ToTopBtn } from "../../components/ToTopBtn/ToTopBtn";
import { About } from "../../components/About/About";
import { TimeLine } from "../../components/TimeLine/TimeLine";
import { Experience } from "../../components/Experience/Experience";
import { Portfolio } from "../../components/Portfolio/Portfolio";
import { Address } from "../../components/Address/Address";
import { Feedback } from "../../components/Feedback/Feedback";
import {
  experienceData,
  feedbackData,
} from "../../utils/appData/appData";
import "./Inner.scss";
import { Skills } from "../../components/Skills/Skills";

export function Inner() {
  return (
    <div className="inner-page">
      <Panel />
      <main className="main-content">
        <Box id="about" title="About me">
          <About />
        </Box>
        <Box id="education" title="Education">
          <TimeLine />
        </Box>
        <Box id="experience" title="Experience">
          <Experience data={experienceData} />
        </Box>
        <Box id="skills" title="Skills">
          <Skills />
        </Box>
        <Box id="portfolio" title="Portfolio">
          <Portfolio />
        </Box>
        <Box id="contacts" title="Contacts">
          <Address />
        </Box>
        <Box id="feedback" title="Feedbacks">
          <Feedback data={feedbackData} />
        </Box>
        <ToTopBtn />
      </main>
    </div>
  );
}
