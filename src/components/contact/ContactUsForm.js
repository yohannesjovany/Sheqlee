import Classes from "./ContactUsForm.module.css";
import InputGroup from "../UI/InputGroup";
import Button from "../UI/Button";
import { ReactComponent as Idea } from "../../assets/icons/idea.svg";
import { ReactComponent as Email } from "../../assets/icons/email.svg";
import { ReactComponent as Contact } from "../../assets/icons/contact.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ContactUsForm = () => {
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Simulate an API call to login
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/"); // Redirect to home page
      } else {
        console.log("error");
      }
    } catch (err) {
      //dispatch(authActions.loginFailure({err:"An error occurred. Please try again."}));
      console.log("error");
    }
    navigate("/");
  };

  return (
    <section>
      <header className={Classes.header}>
        <Contact />
        <div>
          <h1>Contact</h1>
          <p className={Classes.desktopInfo}>
            Please reach out to us if you have any questions or
            <br /> you need our assistance with something.
          </p>
          <p className={Classes.mobileInfo}>
            Please reach out to us if you have <br /> any questions or you need
            our assistance.
          </p>
        </div>
      </header>

      <main className={Classes.main}>
        <form className={Classes.form} onSubmit={handleSubmit}>
          <InputGroup
            type="text"
            label={"Subject"}
            placeholder="Regarding Posting a job"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            icon={<Idea />}
          />
          <InputGroup
            type="email"
            label={"Your email"}
            placeholder="abebe@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            icon={<Email />}
          />
          <div className={Classes.inputGroup}>
            <label for="body">Message</label>
            <textarea
              id="body"
              placeholder="Write your message down..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <div class={Classes["char-counter"]} id="charCounter">
              0/512
            </div>
          </div>
          <div className={Classes.inputAction}>
            <Button className="primary">Send message</Button>
          </div>
        </form>
      </main>
    </section>
  );
};

export default ContactUsForm;
