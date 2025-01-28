import { useState } from "react";

import Classes from "./AddSkillModal.module.css";

import Modal from "../UI/Modal";

const Levels = ["Beginner", "Intermediate", "Advanced", "Expert", "lead"];
const AddLinkModal = (props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    link: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  let isButtonEnabled = formValues.name && formValues.link;

  return (
    <Modal isOpen={props.isOpen} onClose={props.onClose}>
      <div className={Classes.addSkill}>
        <div>
          <p>Add a new link</p>
          <input
            type="text"
            placeholder="Link name [eg. GitHub or LinkedIn]"
            name="name"
            onChange={handleInputChange}
          />
          <input
            type="url"
            placeholder="URL"
            name="link"
            onChange={handleInputChange}
          />
        </div>
        <button disabled={!isButtonEnabled}>Add link</button>
      </div>
    </Modal>
  );
};

export default AddLinkModal;
