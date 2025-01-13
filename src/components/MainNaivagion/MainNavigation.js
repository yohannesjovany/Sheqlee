import { Link, NavLink } from "react-router-dom";

import Classes from "./MainNavigation.module.css";

import logo from "../../assets/icons/sheqlee.svg";
import Button from "../UI/Button";
import LoggedUserNav from "./LoggedUserNav";

const MainNavigation = (props) => {
  const isClient = true;
  const isProf = true;
  const hasLogged = true;
  return (
    <header className={Classes.header}>
      <div className={Classes.container}>
        <Link to={"/"}>
          <div className={Classes.logo}>
            <img src={logo} alt="Logo" />
            <span>Sehqlee</span>
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
                Categories
              </NavLink>
            </li>
            {hasLogged || (
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
            )}
            {hasLogged || (
              <li>
                <Button className="secondary">Log in</Button>
              </li>
            )}
            {hasLogged || (
              <li>
                <Button className="primary">Sign up</Button>
              </li>
            )}
            {isClient && hasLogged && (
              <li>
                <Button className="primary">
                  <NavLink to={"/addvacancy"}>Post a job</NavLink>
                </Button>
              </li>
            )}
            <li>
              <LoggedUserNav />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainNavigation;
