import { useState } from "react";

import Classes from "./AddSkillModal.module.css";
import { ReactComponent as Downkey } from "../../assets/icons/Icon material-keyboard-arrow-downT.svg";
import Modal from "../UI/Modal";

const Levels = ["Beginner", "Intermediate", "Advanced", "Expert", "lead"];
const AddSkillModal = (props) => {
  const [formValues, setFormValues] = useState({
    skill: "",
    level: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  let isButtonEnabled = formValues.skill && formValues.level;

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className={Classes.addSkill}>
        <div>
          <p>Add a new skill</p>
          <input
            type="text"
            placeholder="Objective-C"
            name="skill"
            onChange={handleInputChange}
          />
          <div className={Classes.selectgroup}>
            <select name="level" onChange={handleInputChange}>
              <option value="" disabled>
                Skill level
              </option>
              {Levels.map((Level) => (
                <option>{Level}</option>
              ))}
            </select>
            <Downkey />
          </div>
        </div>
        <button disabled={!isButtonEnabled}>Add skill</button>
      </div>
    </Modal>
  );
};

export default AddSkillModal;
