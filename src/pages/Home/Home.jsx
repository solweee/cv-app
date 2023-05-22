import { Button } from "../../components/Button/Button";
import { PhotoBox } from "../../components/ProtoBox/PhotoBox";
import avatar from "../../assets/images/avatar.a087a561.png";
import { Box } from "../../components/Box/Box";
import { useNavigate } from "react-router-dom";
import "./Home.scss";

export function Home() {
  const navigate = useNavigate();
  return (
    <article className="home">
      <Box>
        <PhotoBox name="John Doe" avatar={avatar}>
          <h3>Programmer. Creative. Innovator</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
          </p>
        </PhotoBox>
        <Button clickAction={() => navigate("/inner")} text="Know more" />
      </Box>
    </article>
  );
}
