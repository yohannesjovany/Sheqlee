import Classes from "./companySignUpSection.module.css";
import InputGroup from "../UI/InputGroup";
import { ReactComponent as Company } from "../../assets/icons/company.svg";
import { ReactComponent as Profreg } from "../../assets/icons/professional_registration.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as Email } from "../../assets/icons/email.svg";
import { ReactComponent as Key } from "../../assets/icons/Icon ionic-md-key.svg";
import { ReactComponent as Google } from "../../assets/icons/Icon ionic-logo-google.svg";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";

const CompanySignUpSection = () => {
  return (
    <section className={Classes.mainSection}>
      <div className={Classes.redirection}>
        <div>
          <Profreg />
        </div>
        <div>
          <p>
            If you are an freelancer, please visit{" "}
            <NavLink to="/professionalsignup">
              freelancers registration{" "}
            </NavLink>
            page.
          </p>
        </div>
      </div>
      <form>
        <header className={Classes.header}>
          <Company />
          <h1>Company Registration</h1>
        </header>
        <main>
          <div className={Classes.inputContainer}>
            <InputGroup
              icon={<Company />}
              type="text"
              placeholder="Sheqlee Co. Ltd."
              label={"Company name"}
              required
            />
            <InputGroup
              className={Classes.addPading}
              icon={
                <p style={{ padding: "0rem 0.8rem", fontSize: "1.2rem" }}>
                  https://
                </p>
              }
              type="url"
              placeholder="sheqlee.com"
              label={"Domain"}
              required
            />
          </div>
          <p className={Classes.secHeader}>
            <span />
            COMPANY REPRESENTATIVE
            <span />
          </p>
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
              label={"Password "}
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
              <NavLink>Terms and Conditions</NavLink> and
              <NavLink> Privacy Policy</NavLink>.
            </span>
          </div>
          <div className={Classes.action}>
            <span>
              Already got an account? <NavLink>Login</NavLink>
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

export default CompanySignUpSection;
