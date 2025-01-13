import { useState } from "react";

import Classes from "./loggedUserNav.module.css";

import sheqlee from "../../assets/icons/sheqlee.svg";
import { ReactComponent as DownArrow } from "../../assets/icons/Icon material-keyboard-arrow-downT.svg";
import { ReactComponent as Company } from "../../assets/icons/company.svg";
import { ReactComponent as Setting } from "../../assets/icons/Icon material-settings.svg";
import { ReactComponent as Dashbord } from "../../assets/icons/dashboard.svg";
import { ReactComponent as Logout } from "../../assets/icons/logout.svg";
import { NavLink } from "react-router-dom";

const LoggedUserNav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div>
      <div className={Classes.mainContainer} onClick={toggleDropdown}>
        <img src={sheqlee} />
        <span>Microsoft</span>
        <DownArrow />
      </div>
      {isDropdownOpen && (
        <div>
          <div className={Classes.backdrop} onClick={toggleDropdown}></div>
          <div className={Classes.overlay}>
            <ul>
              <li onClick={toggleDropdown}>
                <Dashbord /> <NavLink to="/clientdashboard"> Dashbord</NavLink>
              </li>
              <div className={Classes.underline}></div>
              <li onClick={toggleDropdown}>
                <Company />
                <NavLink to="/companyprofile">Company profile</NavLink>
              </li>
              <li onClick={toggleDropdown}>
                <Setting />
                <NavLink to={"/accountsetting"}> Account setting</NavLink>
              </li>
              <div className={Classes.underline}></div>
              <li>
                <Logout /> <NavLink>Logout</NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoggedUserNav;
