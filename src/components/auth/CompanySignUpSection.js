import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";

import Classes from "./companySignUpSection.module.css";
import InputGroup from "../UI/InputGroup";
import { ReactComponent as Company } from "../../assets/icons/company.svg";
import { ReactComponent as Profreg } from "../../assets/icons/professional_registration.svg";
import { ReactComponent as UserIcon } from "../../assets/icons/user.svg";
import { ReactComponent as Email } from "../../assets/icons/email.svg";
import { ReactComponent as Key } from "../../assets/icons/Icon ionic-md-key.svg";
import { ReactComponent as Google } from "../../assets/icons/Icon ionic-logo-google.svg";
import { authActions } from "../../store/auth";
import Button from "../UI/Button";

const CompanySignUpSection = () => {
  const [companyname, setCompanyname] = useState("");
  const [domain, setDomain] = useState("");
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
        localStorage.setItem("token", data.token);
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
      localStorage.setItem("token", "for testing");
      dispatch(
        authActions.loginSuccess({
          user: {
            _id: "user1",
            role: "company",
            fullname: "Miruts Yifter", // Full Name
            email: "miruts@gmail.cm", // Must be unique
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

      <form onSubmit={handleSubmit}>
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
              value={companyname}
              onChange={(e) => setCompanyname(e.target.value)}
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
              value={domain}
              onChange={(e) => setDomain(e.target.value)}
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
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              required
            />
            <InputGroup
              icon={<Email />}
              type="email"
              placeholder="miruts@gmail.com"
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
              label={"Password "}
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
              Already got an account? <NavLink to="/login">Login</NavLink>
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
