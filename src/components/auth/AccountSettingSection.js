import Classes from "./AccountSettingSection.module.css";
import { ReactComponent as Setting } from "../../assets/icons/Icon material-settings.svg";
import { ReactComponent as Edit } from "../../assets/icons/Icon material-edit.svg";
import { ReactComponent as Downkey } from "../../assets/icons/Icon material-keyboard-arrow-downT.svg";
import placeholderImage from "../../assets/icons/settings - alt2 (2).svg";
import FormatedInput from "../UI/FromatedInput";
import Button from "../UI/Button";

const AccountSettingSection = () => {
  return (
    <section className={Classes.mainSection}>
      <header className={Classes.header}>
        <Setting />
        <h1>Account Setting</h1>
        <p>
          Edit your account settings to make your
          <br />
          account more secure.
        </p>
      </header>
      <main>
        <form>
          <div className={Classes.mainContainer}>
            <div className={Classes.inputGroup}>
              <label for="name">
                Full name <span className={Classes.required}>*</span>
              </label>
              <div className={Classes.selectInput}>
                <input type="text" id="name" placeholder="Muruts Yifter" />
                <Edit />
              </div>
            </div>

            <div className={Classes.inputGroup}>
              <label for="email">
                Email <span className={Classes.required}> *</span>
              </label>
              <div className={Classes.selectInput}>
                <input
                  type="email"
                  id="email"
                  placeholder="muruts.yifter@gmail.com"
                />
                <Edit />
              </div>
            </div>

            <div className={Classes.row}>
              <div className={Classes.inputGroup}>
                <label for="password">Password</label>
                <div className={Classes.selectInput}>
                  <input
                    type="password"
                    id="password"
                    placeholder="*************"
                  />
                  <Edit />
                </div>
              </div>
              <p>Leave this empty if you don't want to change your password.</p>
            </div>
            <div className={Classes.inputGroup}>
              <label for="confirmPassword">Confirm password</label>
              <div className={Classes.selectInput}>
                <input
                  type="password"
                  id="confirmPassword"
                  placeholder="*************"
                />
                <Edit />
              </div>
            </div>
          </div>
          <div className={Classes.actoins}>
            <Button className="primary">Update setting</Button>
          </div>
        </form>
        <div className={Classes.line}></div>
        <form className={Classes.acountDeletion}>
          <header>
            <h1>Account deletion</h1>
            <p>
              Please note that your account will be available for recovery for a
              period of one month after deletion. After that, it will be
              permanently deleted and cannot be recovered.
            </p>
          </header>
          <main>
            <div className={Classes.inputGroup}>
              <label for="confirmPassword">
                Deletion reason <span className={Classes.required}> *</span>
              </label>
              <div className={Classes.selectInput}>
                <textarea
                  id="confirmPassword"
                  placeholder="Why are you deleting your account..."
                />
              </div>
            </div>
            <p>
              Giving us accurate reason for your deletion will help us make
              Sheqlee better. We hope to see you back soon. Thank you.
            </p>
            <div className={Classes.actoins}>
              <Button className="primary">Delete account</Button>
            </div>
          </main>
        </form>
        <div className={Classes.lineSeparator}>
          <div></div>
          <p>
            <span className={Classes.required}> *</span>fields are required.
          </p>
        </div>
      </main>
    </section>
  );
};
export default AccountSettingSection;
