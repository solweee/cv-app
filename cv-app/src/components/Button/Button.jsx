import "./Button.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Button(props) {
  const { icon, text, clickAction } = props;
  return (
    <button onClick={clickAction} className="button">
      <FontAwesomeIcon className="btn-icon" icon={icon}/>
      <span>{text}</span>
    </button>
  );
}
