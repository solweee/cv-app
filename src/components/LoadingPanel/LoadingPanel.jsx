import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import "./LoadingPanel.scss"

export function LoadingPanel() {
  return (
    <div className="loading-panel">
      <FontAwesomeIcon className="icon" icon={faRotate} />
    </div>
  );
}
