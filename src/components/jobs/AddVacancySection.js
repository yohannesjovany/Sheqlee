import { useContext, useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import Classes from "./AddVacancySection.module.css";
import { ReactComponent as Downkey } from "../../assets/icons/Icon material-keyboard-arrow-downT.svg";
import { ReactComponent as Templet } from "../../assets/icons/template.svg";
import Button from "../UI/Button";
import FormatedInput from "../UI/FromatedInput";
import VacancyDataContext from "../../store/VacancyContext";

const AddVacancySection = () => {
  const navigate = useNavigate();
  const { vacancyData, setVacancyData } = useContext(VacancyDataContext);
  const [qillInputs, setQillInputs] = useState({
    how: "",
    reqirements: "",
    descrioption: "",
  });

  const handleQuillChange = (value, editorKey) => {
    setQillInputs((prevState) => ({
      ...prevState,
      [editorKey]: value, // Update the specific editor's content
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      title: event.target.title.value,
      category: event.target.category.value,
      type: event.target.type.value,
      level: event.target.level.value,
      shortDescription: event.target.shortDescription.value,
      skills: event.target.skills.value,
      ...qillInputs,
    };

    const action = event.nativeEvent.submitter.name;

    if (action === "saveDraft") {
      //api call to save the draft
    } else if (action === "reviewPublish") {
      setVacancyData({ ...formData });
      navigate("/addvacancy/reviewandpublish");
    }
  };

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
      <form onSubmit={handleSubmit}>
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
              name="title"
              placeholder="Senior mobile app developer using Flutter"
            />
          </div>

          {/* Category of the job  */}
          <div className={Classes.inputGroup}>
            <label for="category">
              Category <span className={Classes.required}>*</span>
            </label>
            <div className={Classes.selectInput}>
              <select id="category" name="category">
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
              <select id="type" name="type">
                <option value="" disabled selected hidden>
                  Select type...
                </option>
                <option>Web Frontend</option>
                <option>UI/UX Desing</option>
              </select>
              <Downkey />
            </div>
          </div>

          <div className={Classes.inputGroup}>
            <label for="level">
              Skill level <span className={Classes.required}>*</span>
            </label>
            <div className={Classes.selectInput}>
              <select id="level" name="level">
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
              <div className={Classes.selectsalaryInput}>
                <select>
                  <option>$</option>
                  <option>Birr</option>
                </select>
                <Downkey />
              </div>
              <input
                type="number"
                placeholder="Enter salary..."
                name="salary"
              />
              <div className={Classes.selectsalaryInput}>
                <select>
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
              name="shortDescription"
            />
            <p className={Classes.info}>
              Who are you looking for? Give us a one-liner description of your
              ideal candidate.
            </p>
          </div>
          <div className={`${Classes.inputGroup} ${Classes.spanTwo}`}>
            <label for="requirements">
              Requirements
              <span className={Classes.required}> *</span>
            </label>
            <FormatedInput
              placeholder="Requirements..."
              id="requirements"
              onChange={(value) => handleQuillChange(value, "reqirements")}
            />
          </div>
          <div className={`${Classes.inputGroup} ${Classes.spanTwo}`}>
            <label for="description">Description</label>
            <FormatedInput
              placeholder="Description..."
              id="description"
              onChange={(value) => handleQuillChange(value, "descrioption")}
            />
          </div>
          <div className={`${Classes.inputGroup} ${Classes.spanTwo}`}>
            <label for="how">How to apply</label>
            <FormatedInput
              placeholder="How can professionals apply..."
              id="how"
              onChange={(value) => handleQuillChange(value, "how")}
            />
          </div>

          <div className={`${Classes.inputGroup} ${Classes.spanTwo}`}>
            <label for="skills">
              Skills <span className={Classes.more}> (technology names)</span>
              <span className={Classes.required}> *</span>
            </label>
            <div className={Classes.selectInput}>
              <select id="skills" name="skills">
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
            <label for="link">
              Apply link
              <span className={Classes.required}> *</span>
            </label>
            <input type="url" placeholder="URL or email" name="link" />
          </div>
        </main>
        <div className={Classes.privacy}>
          <input type="checkbox" />
          <span>I want my company name excluded from this vacancy.</span>
        </div>
        <div className={Classes.action}>
          <Button className="secondary" name="saveDraft">
            Save draft
          </Button>
          <Button className="primary" name="reviewPublish">
            Next
            <span className={Classes.moreInbutton}> [preview & confirm]</span>
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
