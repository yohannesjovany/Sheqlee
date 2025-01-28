import { useEffect } from "react";
import ReactDOM from "react-dom";

import Classes from "./Modal.module.css";
import cancelIcon from "../../assets/icons/Icon metro-cancel.svg";
import ScrollToTop from "./ScrollToTop";

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
  return (
    <div className={Classes.modal}>
      <ScrollToTop />
      {props.children}
    </div>
  );
};

const portalElement = document.getElementById("overlay");

const Modal = (props) => {
  useEffect(() => {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    if (props.isOpen) {
      // Disable scrolling
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    } else {
      // Re-enable scrolling
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    // Cleanup function to re-enable scrolling if the component is unmounted
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [props.isOpen]);
  if (!props.isOpen) return null;

  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop ontoggle={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
