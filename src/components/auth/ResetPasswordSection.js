import Classes from "./ResetPasswordSection.module.css";
import { ReactComponent as Email } from "../../assets/icons/email.svg";
import { ReactComponent as Padlock } from "../../assets/icons/padlock.svg";
import InputGroup from "../UI/InputGroup";
import Button from "../UI/Button";
const ResetPasswordSection = () => {
  return (
    <section className={Classes.mainSection}>
      <form>
        <header className={Classes.header}>
          <Padlock />
          <h1>Reset password</h1>
        </header>
        <main>
          <div className={Classes.inputContainer}>
            <InputGroup
              icon={<Email />}
              type="email"
              placeholder="Miruts@gmail.com"
              label={"Email"}
            />
          </div>
          <div className={Classes.privacy}>
            <span>You will receive a password reset code in your email.</span>
          </div>
          <div className={Classes.action}>
            <Button className="primary">Send code</Button>
          </div>
        </main>
      </form>
    </section>
  );
};

export default ResetPasswordSection;
