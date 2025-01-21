import { NavLink } from "react-router-dom";
import Classes from "./ProfessionalSignupSection.module.css";
import { ReactComponent as Company } from "../../assets/icons/company.svg";
import { ReactComponent as Profreg } from "../../assets/icons/professional_registration.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as Email } from "../../assets/icons/email.svg";
import { ReactComponent as Key } from "../../assets/icons/Icon ionic-md-key.svg";
import { ReactComponent as Google } from "../../assets/icons/Icon ionic-logo-google.svg";

import Button from "../UI/Button";
import InputGroup from "../UI/InputGroup";

const ProfessionalSignupSection = () => {
  return (
    <section className={Classes.mainSection}>
      <div className={Classes.redirection}>
        <div>
          <Company />
        </div>
        <div>
          <p>
            If you are an employer, please visit
            <NavLink to="/companysignup"> employers registration </NavLink>{" "}
            page.
          </p>
        </div>
      </div>
      <form>
        <header className={Classes.header}>
          <Profreg />
          <h1>Professional Registration</h1>
        </header>
        <main>
          <div className={Classes.inputContainer}>
            <InputGroup
              icon={<UserIcon />}
              type="text"
              placeholder="Miruts Yifter"
              label={"Full name"}
              required
            />
            <InputGroup
              icon={<Email />}
              type="email"
              placeholder="Miruts@gmail.com"
              label={"Email"}
              required
            />
            <InputGroup
              icon={<Key />}
              isPassword={true}
              type="password"
              placeholder="**********"
              label={"Password"}
              required
            />
            <InputGroup
              icon={<Key />}
              isPassword={true}
              type="password"
              placeholder="**********"
              label={"Confirm password"}
              required
            />
          </div>
          <div className={Classes.privacy}>
            <input type="checkbox" />
            <span>
              By creating an account, you agree to our{" "}
              <NavLink to={"/termsandconditions"}>Terms and Conditions</NavLink>{" "}
              and
              <NavLink to={"/privacypolicy"}> Privacy Policy</NavLink>.
            </span>
          </div>
          <div className={Classes.action}>
            <span>
              Already got an account? <NavLink to={"/login"}>Login</NavLink>
            </span>
            <Button className="primary">Register</Button>
          </div>
        </main>
      </form>
      <p className={Classes.secHeader}>
        <span />
        OR CONTINUE WITH
        <span />
      </p>
      <div className={Classes.googleButton}>
        <button>
          <Google />
          Continue with Google
        </button>
      </div>
    </section>
  );
};

export default ProfessionalSignupSection;
