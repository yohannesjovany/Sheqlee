import { NavLink } from "react-router-dom";

import Classes from "./LogInModal.module.css";

import Button from "../UI/Button";
import Modal from "../UI/Modal";
import ScrollToTop from "../UI/ScrollToTop";

const LogInModal = (props) => {
  return (
    <Modal onClose={props.onClose} isOpen={props.isOpen}>
      <ScrollToTop />
      <div className={Classes.modalcontent}>
        <p>{props.message}</p>
        <div className={Classes.modalAction}>
          <NavLink to="/companysignup">
            <Button className="primary">Sign up</Button>
          </NavLink>
          <NavLink to="/login">
            <Button className="secondary">Log in</Button>
          </NavLink>
        </div>
      </div>
    </Modal>
  );
};

export default LogInModal;
