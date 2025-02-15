import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import Classes from "./MainNavigation.module.css";

import logo from "../../assets/icons/sheqlee.svg";
import { ReactComponent as Downkey } from "../../assets/icons/Icon material-keyboard-arrow-downT.svg";
import { ReactComponent as GruopThree } from "../../assets/icons/Group 3.svg";
import Button from "../UI/Button";
import LoggedUserNav from "./LoggedUserNav";
import Hamburger from "./Hamburger";
import { useState } from "react";

const MainNavigation = (props) => {
  const auth = useSelector((state) => state.auth);
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHumburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  return (
    <header className={Classes.header}>
      <Hamburger isOpen={isHamburgerOpen} onClose={toggleHumburger} />
      <div className={Classes.container}>
        <div className={Classes.logo}>
          <GruopThree onClick={toggleHumburger} />
          <Link to={"/"}>
            <img src={logo} alt="Logo" />
            <span>Sheqlee</span>
          </Link>
        </div>
        <nav className={Classes.nav}>
          <ul className={Classes["nav-list"]}>
            <div className={Classes.dropDown}>
              <li>
                <NavLink
                  to={"/jobs"}
                  className={({ isActive }) => {
                    return isActive ? Classes.activeNav : undefined;
                  }}
                >
                  All jobs
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/categories"}
                  className={({ isActive }) => {
                    return isActive ? Classes.activeNav : undefined;
                  }}
                >
                  <span className={Classes.category}>
                    Categories
                    <Downkey />
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/clients"}
                  className={({ isActive }) => {
                    return isActive ? Classes.activeNav : undefined;
                  }}
                >
                  Clients
                </NavLink>
              </li>
            </div>
            {auth.status === "guest" && (
              <>
                <li className={Classes.clientLi}>
                  <NavLink
                    to={"/clients"}
                    className={({ isActive }) => {
                      return isActive ? Classes.activeNav : undefined;
                    }}
                  >
                    Clients
                  </NavLink>
                </li>
                <div className={Classes.auth}>
                  <li className={Classes.login}>
                    <NavLink to="/login">
                      <Button className="secondary">Log in</Button>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="companysignup">
                      <Button className="primary">Sign up</Button>
                    </NavLink>
                  </li>
                </div>
              </>
            )}
            {auth.user.role === "company" && (
              <>
                <li className={Classes.postjob}>
                  <NavLink to={"/addvacancy"}>
                    <Button className="primary">Post a job</Button>
                  </NavLink>
                </li>
                <li>
                  <LoggedUserNav />
                </li>
              </>
            )}
            {auth.user.role === "freelancer" && (
              <>
                <li className={Classes.postjob}>
                  <NavLink
                    to={"/editprofile"}
                    className={({ isActive }) => {
                      return isActive ? Classes.activeButton : undefined;
                    }}
                  >
                    <Button className="primary">Edit profile</Button>
                  </NavLink>
                </li>
                <li>
                  <LoggedUserNav />
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
