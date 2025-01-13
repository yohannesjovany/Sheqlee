import Classes from "./LoginSection.module.css";
import { ReactComponent as Google } from "../../assets/icons/Icon ionic-logo-google.svg";
import { ReactComponent as Email } from "../../assets/icons/email.svg";
import { ReactComponent as Enter } from "../../assets/icons/enter.svg";
import { ReactComponent as Key } from "../../assets/icons/Icon ionic-md-key.svg";
import InputGroup from "../UI/InputGroup";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";

const LoginSection = () => {
  return (
    <section className={Classes.mainSection}>
      <form>
        <header className={Classes.header}>
          <Enter />
          <h1>Login to your account</h1>
        </header>
        <main>
          <div className={Classes.inputContainer}>
            <InputGroup
              icon={<Email />}
              type="email"
              placeholder="Miruts@gmail.com"
              label={"Email"}
            />
            <InputGroup
              icon={<Key />}
              isPassword={true}
              type="password"
              placeholder="**********"
              label={"Password"}
            />
          </div>
          <div className={Classes.privacy}>
            <input type="checkbox" />
            <span>Remember me next time.</span>
          </div>
          <div className={Classes.action}>
            <span>
              Forgot password? <NavLink> Reset</NavLink>
            </span>
            <Button className="primary">Login</Button>
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
export default LoginSection;
