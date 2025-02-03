import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import Classes from "./ProfessionalSignupSection.module.css";

import { ReactComponent as Company } from "../../assets/icons/company.svg";
import { ReactComponent as Profreg } from "../../assets/icons/professional_registration.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as Email } from "../../assets/icons/email.svg";
import { ReactComponent as Key } from "../../assets/icons/Icon ionic-md-key.svg";
import { ReactComponent as Google } from "../../assets/icons/Icon ionic-logo-google.svg";

import Button from "../UI/Button";
import InputGroup from "../UI/InputGroup";
import { authActions } from "../../store/auth";

const ProfessionalSignupSection = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
        body: JSON.stringify({ fullname, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        dispatch(
          authActions.loginSuccess({ user: data.user, token: data.token })
        ); // Save token to Redux and localStorage
        navigate("/"); // Redirect to home page
      } else {
        dispatch(
          authActions.loginFailure({ err: data.message || "Login failed" })
        );
      }
    } catch (err) {
      //dispatch(authActions.loginFailure({err:"An error occurred. Please try again."}));
      dispatch(
        authActions.loginSuccess({
          user: {
            _id: "user1",
            role: "freelancer",
            fullname: "Miruts Yifter", // Full Name
            email: "miruts@gmail.com", // Must be unique
          },
          token: "akdwoufanosdiufal;kwnmdifuaqwnjefojqowevjq",
        })
      );
    }
    navigate("/");
  };

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
      <form onSubmit={handleSubmit}>
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
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
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
            <InputGroup
              icon={<Key />}
              isPassword={true}
              type="password"
              placeholder="**********"
              label={"Confirm password"}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
