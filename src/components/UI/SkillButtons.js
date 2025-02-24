//// filepath: /e:/sheqlee2/Sheqlee/src/components/UI/SkillButtons.js
import { useState } from "react";
import Classes from "./SkillButtons.module.css";

const Levels = ["Beginner", "Intermediate", "Advanced", "Expert", "lead"];

const SkillButtons = (props) => {
  const [currentLevel, setLevel] = useState(props.level);

  const handleClick = (index) => {
    const newLevel = index + 1;
    setLevel(newLevel);
    if (props.onChangeLevel) {
      props.onChangeLevel(newLevel);
    }
  };

  return (
    <div className={Classes.sillButtonContainer}>
      {Levels.map((level, index) => (
        <button
          key={index}
          onClick={(e) => {
            e.preventDefault();
            handleClick(index);
          }}
          className={`${index < currentLevel ? Classes.active : ""}`}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default SkillButtons;
