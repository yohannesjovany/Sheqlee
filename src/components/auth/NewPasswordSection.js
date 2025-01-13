import Button from "../UI/Button";
import Classes from "./NewPasswordSection.module.css";
import { ReactComponent as Padlock } from "../../assets/icons/padlock.svg";
import { ReactComponent as Code } from "../../assets/icons/code.svg";

import { ReactComponent as Key } from "../../assets/icons/Icon ionic-md-key.svg";
import InputGroup from "../UI/InputGroup";

const NewPasswordSection = () => {
  return (
    <section className={Classes.mainSection}>
      <form>
        <header className={Classes.header}>
          <Padlock />
          <h1>Set new password</h1>
        </header>
        <main>
          <div className={Classes.inputContainer}>
            <InputGroup
              icon={<Code />}
              type="text"
              placeholder="123456"
              label={"Enter code"}
            />
          </div>
          <div className={Classes.privacy}>
            <span>Get a reset code from your email and input it above.</span>
          </div>
          <div className={Classes.inputContainer}>
            <InputGroup
              icon={<Key />}
              isPassword={true}
              type="password"
              placeholder="**********"
              label={"New password"}
            />
            <InputGroup
              icon={<Key />}
              type="password"
              isPassword={true}
              placeholder="**********"
              label={"Confirm password"}
            />
          </div>
          <div className={Classes.privacy}>
            <span>Set a strong password to protect your account.</span>
          </div>
          <div className={Classes.action}>
            <Button className="primary">Reset password</Button>
          </div>
        </main>
      </form>
    </section>
  );
};
export default NewPasswordSection;
