import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import Classes from "./MainNavigation.module.css";

import logo from "../../assets/icons/sheqlee.svg";
import { ReactComponent as Downkey } from "../../assets/icons/Icon material-keyboard-arrow-downT.svg";
import Button from "../UI/Button";
import LoggedUserNav from "./LoggedUserNav";

const MainNavigation = (props) => {
  const auth = useSelector((state) => state.auth);
  return (
    <header className={Classes.header}>
      <div className={Classes.container}>
        <Link to={"/"}>
          <div className={Classes.logo}>
            <img src={logo} alt="Logo" />
            <span>Sheqlee</span>
          </div>
        </Link>
        <nav className={Classes.nav}>
          <ul className={Classes["nav-list"]}>
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
            {auth.status === "guest" && (
              <>
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
                <li>
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
                <li>
                  <NavLink to={"/editprofile"}>
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
