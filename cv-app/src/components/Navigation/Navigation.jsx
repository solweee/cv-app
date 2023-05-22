import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faGraduationCap,
  faPen,
  faSuitcase,
  faLocationArrow,
} from "@fortawesome/free-solid-svg-icons";
import { faGem, faComment } from "@fortawesome/free-regular-svg-icons";
import "./Navigation.scss";

export function Navigation() {
  const onPress = (e, elementId) => {
    e.preventDefault();
    const target = window.document.getElementById(elementId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };
  const menuItems = [
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
  return (
    <nav>
      <ul className="navigation">
        {menuItems.map((item) => (
          <li
            onClick={(e) => onPress(e, item.name)}
            data-to-scrollspy-id={item.name}
            key={item.name}
          >
            <Link to={`/inner/${item.name}`}>
              <FontAwesomeIcon
                className="navigation-item__icon"
                icon={item.icon}
              />
              <span className="navigation-item__label">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
