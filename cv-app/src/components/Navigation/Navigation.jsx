import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { menuItems } from "./data/menuItems";
import "./Navigation.scss";

export function Navigation({ activeBox, handleClick }) {
  
  return (
    <nav>
      <ul className="navigation">
        {menuItems.map((item) => {
          const activeClass =
            activeBox === item.name ? "active" : "";
          return (
            <li
              key={item.name}
              id={item.name}
              onClick={() => handleClick(item.name)}
              className={`navigation-item ${activeClass}`}
            >
              <Link to={`/inner/${item.name}`}>
                <FontAwesomeIcon
                  className="navigation-item__icon"
                  icon={item.icon}
                />
                <span className="navigation-item__label">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
