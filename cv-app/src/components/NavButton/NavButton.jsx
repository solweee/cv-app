import "./NavButton.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function NavButton(props) {
  const { icon, clickAction } = props;
  return (
    <button onClick={clickAction} className="nav-button">
      <FontAwesomeIcon icon={icon}/>
    </button>
  );
}
