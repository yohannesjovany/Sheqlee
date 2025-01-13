import Classes from "./ContactUsForm.module.css";
import InputGroup from "../UI/InputGroup";
import Button from "../UI/Button";
import { ReactComponent as Idea } from "../../assets/icons/idea.svg";
import { ReactComponent as Email } from "../../assets/icons/email.svg";
import { ReactComponent as Contact } from "../../assets/icons/contact.svg";

const ContactUsForm = () => {
  return (
    <section>
      <header className={Classes.header}>
        <Contact />
        <div>
          <h1>Contact</h1>
          <p>
            Please reach out to us if you have any questions or
            <br /> you need our assistance with something.
          </p>
        </div>
      </header>
      <main className={Classes.main}>
        <form className={Classes.form}>
          <InputGroup
            type="text"
            label={"Subject"}
            placeholder="Regarding Posting a job"
            icon={<Idea />}
          />
          <InputGroup
            type="email"
            label={"Your email"}
            placeholder="abebe@gmail.com"
            icon={<Email />}
          />
          <div className={Classes.inputGroup}>
            <label for="body">Message</label>
            <textarea
              id="body"
              placeholder="Write your message down..."
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
