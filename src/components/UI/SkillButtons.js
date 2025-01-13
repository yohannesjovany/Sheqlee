import { useState } from "react";
import Classes from "./SkillButtons.module.css";

const Levels = ["Beginner", "Intermediate", "Advanced", "Expert", "lead"];

const SkillButtons = (props) => {
  const [currentLevel, setLevel] = useState(props.level);
  console.log(currentLevel);
  const hundleClick = (index) => {
    setLevel(index + 1);
  };

  return (
    <div className={Classes.sillButtonContainer}>
      {Levels.map((level, index) => (
        <button
          onClick={(e) => {
            e.preventDefault();
            hundleClick(index);
          }}
          className={`${index < currentLevel && Classes.active}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default SkillButtons;
