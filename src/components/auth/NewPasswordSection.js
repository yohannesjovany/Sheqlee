import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../UI/Button";
import Classes from "./NewPasswordSection.module.css";
import { ReactComponent as Padlock } from "../../assets/icons/padlock.svg";
import { ReactComponent as Code } from "../../assets/icons/code.svg";

import { ReactComponent as Key } from "../../assets/icons/Icon ionic-md-key.svg";
import InputGroup from "../UI/InputGroup";

const NewPasswordSection = () => {
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate an API call to login
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, password }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/"); // Redirect to home page
      } else {
        console.log("error");
      }
    } catch (err) {
      //dispatch(authActions.loginFailure({err:"An error occurred. Please try again."}));

      navigate("/");
    }
  };

  return (
    <section className={Classes.mainSection}>
      <form onSubmit={handleSubmit}>
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
              value={code}
              onChange={(e) => setCode(e.target.value)}
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
              value={password}
              onChange={(e) => setCode(e.target.value)}
              label={"New password"}
              required
            />
            <InputGroup
              icon={<Key />}
              type="password"
              isPassword={true}
              placeholder="**********"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
