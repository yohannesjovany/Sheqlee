import ReactDOM from "react-dom";

import Classes from "./Modal.module.css";
import cancelIcon from "../../assets/icons/Icon metro-cancel.svg";
import { useState } from "react";

const Backdrop = (props) => {
  return (
    <div className={Classes.backdrop}>
      <button onClick={props.ontoggle}>
        <img src={cancelIcon} alt="cancel icon" />
      </button>
    </div>
  );
};

const ModalOverlay = (props) => {
  return <div className={Classes.modal}>{props.children}</div>;
};

const portalElement = document.getElementById("overlay");
const Modal = (props) => {
  const [isShowing, setisShowing] = useState(true);
  const hundleClick = () => {
    setisShowing(!isShowing);
  };
  return (
    isShowing && (
      <>
        {ReactDOM.createPortal(
          <Backdrop ontoggle={hundleClick} />,
          portalElement
        )}
        {ReactDOM.createPortal(
          <ModalOverlay>{props.children}</ModalOverlay>,
          portalElement
        )}
      </>
    )
  );
};

export default Modal;
