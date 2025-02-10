import Classes from "./LoginSection.module.css";
import { ReactComponent as Google } from "../../assets/icons/Icon ionic-logo-google.svg";
import { ReactComponent as Email } from "../../assets/icons/email.svg";
import { ReactComponent as Enter } from "../../assets/icons/enter.svg";
import { ReactComponent as Key } from "../../assets/icons/Icon ionic-md-key.svg";
import InputGroup from "../UI/InputGroup";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { authActions } from "../../store/auth";

const LoginSection = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
 

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(authActions.loginStart());
    try {
      // Simulate an API call to login
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(authActions.loginSuccess({ user: data.user, token: data.token })); // Save token to Redux and localStorage
        navigate("/"); // Redirect to home page
      } else {
        dispatch(authActions.loginFailure({err:data.message || "Login failed"}));
      }
    } catch (err) {
      //dispatch(authActions.loginFailure({err:"An error occurred. Please try again."}));
      dispatch(authActions.loginSuccess({ user:{
            _id: "user1",
            role: "company",
            fullname: "Miruts Yifter", // Full Name
            email: "miruts@gmail.cm", // Must be unique
          },
          token: "akdwoufanosdiufal;kwnmdifuaqwnjefojqowevjq",})); 

    }
    navigate("/")
  };

  
  return (
    <section className={Classes.mainSection}>
      <form onSubmit= {handleSubmit}>
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <InputGroup
              icon={<Key />}
              isPassword={true}
              type="password"
              placeholder="**********"
              label={"Password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className={Classes.privacy}>
            <input type="checkbox" />
            <span>Remember me next time.</span>
          </div>
          <div className={Classes.action}>
            <span>
              Forgot password? <NavLink to={"/resetpassword"}> Reset</NavLink>
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
