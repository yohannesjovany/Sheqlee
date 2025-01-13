import Classes from "./AddVacancySection.module.css";
import { ReactComponent as Downkey } from "../../assets/icons/Icon material-keyboard-arrow-downT.svg";
import { ReactComponent as Templet } from "../../assets/icons/template.svg";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import FormatedInput from "../UI/FromatedInput";

const AddVacancySection = () => {
  return (
    <section className={Classes.mainSection}>
      <div className={Classes.redirection}>
        <div>
          <Templet />
        </div>
        <div>
          <p>
            To speed up the process of posting a job, try using
            <NavLink to="/professionalsignup"> job templates.</NavLink>
          </p>
        </div>
      </div>
      <form>
        <header className={Classes.header}>
          <h1>
            Add a vacancy <span> [1/2]</span>
          </h1>
          <p>Next and final step is preview and confirmation.</p>
        </header>
        <main className={Classes.mainForm}>
          {/* job title */}
          <div className={`${Classes.inputGroup} ${Classes.spanTwo}`}>
            <label for="jobTitle">
              Job title <span className={Classes.required}>*</span>
            </label>
            <input
              id="jobTitle"
              type="text"
              placeholder="Senior mobile app developer using Flutter"
            />
          </div>

          {/* Category of the job  */}
          <div className={Classes.inputGroup}>
            <label for="catagory">
              Category <span className={Classes.required}>*</span>
            </label>
            <div className={Classes.selectInput}>
              <select id="catagory">
                <option value="" disabled selected hidden>
                  Select category...
                </option>
                <option>Web Frontend</option>
                <option>UI/UX Desing</option>
              </select>
              <Downkey />
            </div>
          </div>

          {/* job Type */}
          <div className={Classes.inputGroup}>
            <label for="type">
              Job type <span className={Classes.required}>*</span>
            </label>
            <div className={Classes.selectInput}>
              <select id="type">
                <option value="" disabled selected hidden>
                  Select type...
                </option>
                <option>Web Frontend</option>
                <option>UI/UX Desing</option>
              </select>
              <Downkey />
            </div>
          </div>

          {/* level */}
          <div className={Classes.inputGroup}>
            <label for="level">
              Skill level <span className={Classes.required}>*</span>
            </label>
            <div className={Classes.selectInput}>
              <select id="level">
                <option value="" disabled selected hidden>
                  Add skill level...
                </option>
                <option>Web Frontend</option>
                <option>UI/UX Desing</option>
              </select>
              <Downkey />
            </div>
          </div>
          {/* salary */}
          <div className={Classes.inputGroup}>
            <label for="salary">
              Salary <span className={Classes.more}>(fixed or range) </span>
            </label>
            <div className={Classes.salaryInput}>
              <div className={Classes.selectInput}>
                <select id="salary">
                  <option>$</option>
                  <option>Birr</option>
                </select>
                <Downkey />
              </div>
              <input type="number" placeholder="Enter salary..." />
              <div className={Classes.selectInput}>
                <select id="salary">
                  <option>/hour</option>
                  <option>/month</option>
                </select>
                <Downkey />
              </div>
            </div>
          </div>
          <div className={`${Classes.inputGroup} ${Classes.spanTwo}`}>
            <label for="shortDescription">
              Short description
              <span className={Classes.required}> *</span>
            </label>
            <textarea
              id="shortDescription"
              placeholder="We are looking for a Flutter developer with 2 years experience."
            />
            <p className={Classes.info}>
              Who are you looking for? Give us a one-liner description of your
              ideal candidate.
            </p>
          </div>
          <div className={`${Classes.inputGroup} ${Classes.spanTwo}`}>
            <label for="salary">
              Requirements
              <span className={Classes.required}> *</span>
            </label>
            <FormatedInput placeholder="Requirements..." />
          </div>
          <div className={`${Classes.inputGroup} ${Classes.spanTwo}`}>
            <label for="salary">Description</label>
            <FormatedInput placeholder="Description..." />
          </div>
          <div className={`${Classes.inputGroup} ${Classes.spanTwo}`}>
            <label for="salary">How to apply</label>
            <FormatedInput placeholder="How can professionals apply..." />
          </div>

          <div className={`${Classes.inputGroup} ${Classes.spanTwo}`}>
            <label for="salary">
              Skills <span className={Classes.more}> (technology names)</span>
              <span className={Classes.required}> *</span>
            </label>
            <div className={Classes.selectInput}>
              <select id="salary">
                <option value="" disabled selected hidden>
                  NodeJS, AWS, PostgreSQL
                </option>
                <option>Web Frontend</option>
                <option>UI/UX Desing</option>
              </select>
              <Downkey />
            </div>
          </div>
          <div className={`${Classes.inputGroup} ${Classes.spanTwo}`}>
            <label for="salary">
              Apply link
              <span className={Classes.required}> *</span>
            </label>
            <input type="url" placeholder="URL or email" />
          </div>
        </main>
        <div className={Classes.privacy}>
          <input type="checkbox" />
          <span>I want my company name excluded from this vacancy.</span>
        </div>
        <div className={Classes.action}>
          <Button className="secondary">Save draft</Button>
          <Button className="primary">
            Next{" "}
            <span className={Classes.moreInbutton}>[preview & confirm]</span>
          </Button>
        </div>
      </form>
      <div className={Classes.lineSeparator}>
        <div></div>
        <p>
          <span className={Classes.required}> *</span>fields are required.
        </p>
      </div>
    </section>
  );
};

export default AddVacancySection;
