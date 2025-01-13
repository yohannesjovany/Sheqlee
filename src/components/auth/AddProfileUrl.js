import Classes from "./AddSkillModal.module.css";
import Modal from "../UI/Modal";

const AddProfileUrl = () => {
  return (
    <Modal>
      <div className={Classes.addSkill}>
        <div>
          <p>Add a new link</p>
          <input type="text" placeholder="Link name [eg. GitHub or LinkedIn]" />
          <input type="url" placeholder="URL" />
        </div>
        <button>Add link</button>
      </div>
    </Modal>
  );
};

export default AddSkillModal;
