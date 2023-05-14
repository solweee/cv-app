import { PhotoBox } from "../ProtoBox/PhotoBox";
import { Navigation } from "../Navigation/Navigation";
import { Button } from "../Button/Button";
import { faAngleLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import "./Panel.scss";
import { NavButton } from "../NavButton/NavButton";
import avatar from "../../assets/images/avatar.a087a561.png";
import { useNavigate } from "react-router-dom";

export function Panel() {
  const navigate = useNavigate();
  const handleToggle = () => {
    document.querySelector(".panel").classList.toggle("hidden");
  };
  return (
    <header className="panel">
      <NavButton clickAction={handleToggle} icon={faBars} />
      <div className="panel-side">
        <PhotoBox name="John Doe" avatar={avatar} />
        <Navigation />
        <Button
          clickAction={() => navigate("/")}
          text="Go back"
          icon={faAngleLeft}
        />
      </div>
    </header>
  );
}
