import { Link, NavLink } from "react-router-dom";

import Classes from "./MainNavigation.module.css";

import logo from "../../assets/icons/sheqlee.svg";
import { ReactComponent as Downkey } from "../../assets/icons/Icon material-keyboard-arrow-downT.svg";
import Button from "../UI/Button";
import LoggedUserNav from "./LoggedUserNav";

const MainNavigation = (props) => {
  const isClient = false;
  const isProf = true;
  const hasLogged = false;
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
            {hasLogged || (
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
                    <Button className="secondary">
                      <NavLink to="/login"> Log in</NavLink>
                    </Button>
                  </li>
                  <li>
                    <Button className="primary">
                      <NavLink to="companysignup"> Sign up</NavLink>
                    </Button>
                  </li>
                </div>
              </>
            )}
            {isClient && hasLogged && (
              <>
                <li>
                  <Button className="primary">
                    <NavLink to={"/addvacancy"}>Post a job</NavLink>
                  </Button>
                </li>
                <li>
                  <LoggedUserNav />
                </li>
              </>
            )}
            {isProf && hasLogged && (
              <>
                <li>
                  <Button className="primary">
                    <NavLink to={"/editprofile"}>Edit profile</NavLink>
                  </Button>
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
