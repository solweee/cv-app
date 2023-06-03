import {
  faUser,
  faGraduationCap,
  faPen,
  faSuitcase,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { faGem, faComment } from "@fortawesome/free-regular-svg-icons";

export const menuItems = [
  {
    name: "about",
    icon: faUser,
    label: "About me",
  },
  {
    name: "education",
    icon: faGraduationCap,
    label: "Education",
  },
  {
    name: "experience",
    icon: faPen,
    label: "Experience",
  },
  { name: "skills", icon: faGem, label: "Skills" },
  {
    name: "portfolio",
    icon: faSuitcase,
    label: "Portfolio",
  },
  {
    name: "contacts",
    icon: faLocationArrow,
    label: "Contacts",
  },
  {
    name: "feedback",
    icon: faComment,
    label: "Feedback",
  },
];
