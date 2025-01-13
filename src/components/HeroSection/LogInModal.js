import Classes from "./LogInModal.module.css";
import Button from "../UI/Button";
import Modal from "../UI/Modal";
const LogInModal = (props) => {
  return (
    <Modal>
      <div className={Classes.modalcontent}>
        <p>{props.message}</p>
        <div className={Classes.modalAction}>
          <Button className="primary">Sign up</Button>
          <Button className="secondary">Log in</Button>
        </div>
      </div>
    </Modal>
  );
};

export default LogInModal;
