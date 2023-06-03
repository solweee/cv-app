import { PhotoBox } from "../ProtoBox/PhotoBox";
import { Navigation } from "../Navigation/Navigation";
import { Button } from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import { NavButton } from "../NavButton/NavButton";
import avatar from "../../assets/images/avatar.a087a561.png";
import { useNavigate } from "react-router-dom";
import "./Panel.scss";

export function Panel({activeBox, handleClick}) {
  const navigate = useNavigate();
  const handleToggle = () => {
    document.querySelector(".panel").classList.toggle("hidden");
  };
  return (
    <header data-testid="panel" className="panel">
      <NavButton clickAction={handleToggle} icon={faBars} />
      <div className="panel-side">
        <PhotoBox name="John Doe" avatar={avatar} />
        <Navigation activeBox={activeBox} handleClick={handleClick} />
        <Button clickAction={() => navigate("/")} text="Go back">
          <FontAwesomeIcon icon={faAngleLeft} />
        </Button>
      </div>
    </header>
  );
}
