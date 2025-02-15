import { useEffect, useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { NavLink,useNavigate } from "react-router-dom";

import Classes from "./loggedUserNav.module.css";
import { authActions } from "../../store/auth";

import sheqlee from "../../assets/icons/settings - alt2 (3).svg";
import { ReactComponent as DownArrow } from "../../assets/icons/Icon material-keyboard-arrow-downT.svg";
import { ReactComponent as Company } from "../../assets/icons/company2.svg";
import { ReactComponent as Setting } from "../../assets/icons/Icon material-settings.svg";
import { ReactComponent as Dashbord } from "../../assets/icons/dashboard.svg";
import { ReactComponent as Logout } from "../../assets/icons/logout.svg";

const DropDownModal = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);


  const hundleLogout=()=>{
    //remove token from localstorage
    dispatch(authActions.logout())
    navigate("/")
  }

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
            <Dashbord /> <NavLink to="/dashboard"> Dashbord</NavLink>
          </li>
          <div className={Classes.underline}></div>
          {auth.user.role === "company" && (
            <li onClick={props.onClose}>
              <Company />
              <NavLink to="/companyprofile">Company profile</NavLink>
            </li>
          )}
          <li onClick={props.onClose}>
            <Setting />
            <NavLink to={"/accountsetting"}> Account setting</NavLink>
          </li>
          <div className={Classes.underline}></div>
          <li onClick={props.onClose}>
            <Logout /> <button onClick={hundleLogout}>Logout</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

const LoggedUserNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const auth = useSelector((state) => state.auth);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className={Classes.mainContainer} onClick={toggleDropdown}>
        {auth.user.role === "company" && (
          <div className={Classes.img}>
            <img src={sheqlee} />
          </div>
        )}
        <span>{auth.user.fullname}</span>
        <DownArrow />
      </div>
      <DropDownModal isOpen={isDropdownOpen} onClose={toggleDropdown} />
    </div>
  );
};

export default LoggedUserNav;
