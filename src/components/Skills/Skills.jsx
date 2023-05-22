import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "../Button/Button";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { SkillsEditForm } from "../SkillsEditForm/SkillsEditForm";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getSkills } from "../../app/features/skills/skillsScice";
import "./Skills.scss";

export function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const skills = useSelector((state) => state.skills);
  const dispatch = useDispatch();

  const handleClick = () => {
    setIsVisible((prev) => !prev);
  };
  useEffect(() => {
    dispatch(getSkills());
  }, [dispatch]);

  return (
    <div className="skills">
      <Button
        clickAction={handleClick}
        text={!isVisible ? "Open edit" : "Close edit"}
      >
        <FontAwesomeIcon icon={faPenToSquare} />
      </Button>
      {isVisible && <SkillsEditForm />}

      <div className="skills-bar">
        <ul>
          {skills.map((item, index) => (
            <li
              className="skills-bar__item"
              key={index}
              style={{ width: `${item.skills.skillRange}%` }}
            >
              {item.skills.skillName}
            </li>
          ))}
        </ul>
      </div>

      <hr />
      <div className="scale">
        <div>
          <span id="beginner">Beginner</span>
          <span>Proficient</span>
        </div>
        <div>
          <span>Expert</span>
          <span id="master">Master</span>
        </div>
      </div>
    </div>
  );
}
