import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Classes from "./ResetPasswordSection.module.css";
import { ReactComponent as Email } from "../../assets/icons/email.svg";
import { ReactComponent as Padlock } from "../../assets/icons/padlock.svg";
import InputGroup from "../UI/InputGroup";
import Button from "../UI/Button";
const ResetPasswordSection = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Simulate an API call to login
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/"); // Redirect to home page
      } else {
        console.log("faild");
      }
    } catch (err) {
      //dispatch(authActions.loginFailure({err:"An error occurred. Please try again."}));
      console.log("faild");
      navigate("/");
    }
  };
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
