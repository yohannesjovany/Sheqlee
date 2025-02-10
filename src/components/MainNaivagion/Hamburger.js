import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import Classes from "./Hamburger.module.css";
import { ReactComponent as Downkey } from "../../assets/icons/Icon material-keyboard-arrow-downT.svg";

const Hamburger = (props) => {
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
    <div>
      <div className={Classes.backdrop} onClick={props.onClose}></div>
      <div className={Classes.overlay}>
        <ul>
          <li onClick={props.onClose}>
            <NavLink to={"/jobs"}>All jobs</NavLink>
          </li>
          <li onClick={props.onClose} className={Classes.category}>
            <NavLink to={"/categories"}>
              <span className={Classes.category}>
                Categories
                <Downkey />
              </span>
            </NavLink>
          </li>
          <li onClick={props.onClose}>
            <NavLink to={"/clients"}>Clients</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hamburger;
