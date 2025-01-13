import Classes from "./AddSkillModal.module.css";
import { ReactComponent as Downkey } from "../../assets/icons/Icon material-keyboard-arrow-downT.svg";
import Modal from "../UI/Modal";

const Levels = ["Beginner", "Intermediate", "Advanced", "Expert", "lead"];
const AddSkillModal = () => {
  return (
    <Modal>
      <div className={Classes.addSkill}>
        <div>
          <p>Add a new skill</p>
          <input type="text" placeholder="Objective-C" />
          <div className={Classes.selectgroup}>
            <select>
              <option>Skill level</option>
              {Levels.map((Level) => (
                <option>{Level}</option>
              ))}
            </select>
            <Downkey />
          </div>
        </div>
        <button>Add skill</button>
      </div>
    </Modal>
  );
};

export default AddSkillModal;
