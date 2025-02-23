import { useContext, useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";

import Classes from "./AddVacancySection.module.css";
import { ReactComponent as Downkey } from "../../assets/icons/Icon material-keyboard-arrow-downT.svg";
import { ReactComponent as Tick } from "../../assets/icons/Icon ionic-md-checkmark.svg";
import { ReactComponent as Templet } from "../../assets/icons/template.svg";
import Button from "../UI/Button";
import FormatedInput from "../UI/FromatedInput";
import VacancyDataContext from "../../store/VacancyContext";

const AddVacancySection = () => {
  const { vacancyData, setVacancyData } = useContext(VacancyDataContext);
  const [shortDescription, setShortDescription] = useState(
    vacancyData.shortDescription || ""
  );
  const [title, setTitle] = useState(vacancyData.title || "");
  const [type, setType] = useState(vacancyData.type || "");
  const [level, setLevel] = useState(vacancyData.level || "");
  const [currency, setCurrency] = useState(vacancyData.currency || "");
  const [rate, setRate] = useState(vacancyData.rate || "");
  const [salary, setSalary] = useState(vacancyData.salary || "");
  const [category, setCategory] = useState(vacancyData.category || "");
  const [applyLink, setApplyLink] = useState(vacancyData.applyLink || "");
  const [skills, setSkills] = useState(vacancyData.skills || []);
  const [companyName, setCompanyName] = useState(
    vacancyData.companyName || true
  );
  const [qillInputs, setQillInputs] = useState({
    how: vacancyData.how,
    reqirements: vacancyData.reqirements,
    descrioption: vacancyData.descrioption,
  });
  const navigate = useNavigate();

  const handleQuillChange = (value, editorKey) => {
    setQillInputs((prevState) => ({
      ...prevState,
      [editorKey]: value, // Update the specific editor's content
    }));
  };

  const handleSkillsChange = (e) => {
    const selectedOptions = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );

    const newSkills = selectedOptions.filter(
      (skill) => !skills.includes(skill)
    );

    const availableSlots = 6 - skills.length;

    if (availableSlots > 0) {
      const skillsToAdd = newSkills.slice(0, availableSlots);
      setSkills((prevSkills) => [...prevSkills, ...skillsToAdd]);
    }
  };

  const removeSkill = (index) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      title,
      category,
      type,
      level,
      salary,
      currency,
      rate,
      applyLink,
      shortDescription,
      skills,
      ...qillInputs,
    };

    const action = event.nativeEvent.submitter.name;

    if (action === "saveDraft") {
      const draftData = { ...formData, status: "draft" };
      setVacancyData(draftData);
      try {
        const response = await fetch("/api/vacancies/draft", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(draftData),
        });
        if (!response.ok) {
          throw new Error("Failed to save draft");
        }
        alert("Draft saved successfully");
      } catch (error) {
        console.error("Error saving draft: ", error);
        alert("Error saving draft");
      }
    } else if (action === "reviewPublish") {
      setVacancyData({ ...formData, status: "active" });
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
          <div className={`${Classes.inputGroup} ${Classes.spanTwo}`}>
            <label htmlFor="jobTitle">
              Job title <span className={Classes.required}>*</span>
            </label>
            <input
              id="jobTitle"
              type="text"
              value={title}
              name="title"
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Senior mobile app developer using Flutter"
              required
            />
          </div>

          <div className={Classes.inputGroup}>
            <label htmlFor="category">
              Category <span className={Classes.required}>*</span>
            </label>
            <div className={Classes.selectInput}>
              <select
                id="category"
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="" disabled selected hidden>
                  Select category...
                </option>
                <option>Web Frontend</option>
                <option>UI/UX Desing</option>
                <option>Backend Development</option>
              </select>
              <Downkey />
            </div>
          </div>

          {/* job Type */}
          <div className={Classes.inputGroup}>
            <label htmlFor="type">
              Job type <span className={Classes.required}>*</span>
            </label>
            <div className={Classes.selectInput}>
              <select
                id="type"
                name="type"
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option value="" disabled selected hidden>
                  Select type...
                </option>
                <option>Contract</option>
                <option>Part-time</option>
                <option>Full-time</option>
                <option>Per diem</option>
                <option>Temporary</option>
              </select>
              <Downkey />
            </div>
          </div>

          <div className={Classes.inputGroup}>
            <label htmlFor="level">
              Skill level <span className={Classes.required}>*</span>
            </label>
            <div className={Classes.selectInput}>
              <select
                id="level"
                name="level"
                value={level}
                onChange={(e) => setLevel(e.target.value)}
                required
              >
                <option value="" disabled selected hidden>
                  Add skill level...
                </option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Senior</option>
                <option>Expert</option>
                <option>Lead</option>
              </select>
              <Downkey />
            </div>
          </div>
          <div className={Classes.inputGroup}>
            <label htmlFor="salary">
              Salary <span className={Classes.more}>(fixed or range) </span>
            </label>
            <div className={Classes.salaryInput}>
              <div className={Classes.selectsalaryInput}>
                <select
                  name="currency"
                  value={currency}
                  onChange={(e) => setCurrency(e.target.value)}
                  required
                >
                  <option>$</option>
                  <option>Birr</option>
                </select>
                <Downkey />
              </div>
              <input
                type="number"
                value={salary}
                placeholder="Enter salary..."
                name="salary"
                onChange={(e) => setSalary(e.target.value)}
              />
              <div className={Classes.selectsalaryInput}>
                <select
                  name="rate"
                  value={rate}
                  onChange={(e) => setRate(e.target.value)}
                >
                  <option>/hour</option>
                  <option>/month</option>
                </select>
                <Downkey />
              </div>
            </div>
          </div>
          <div className={`${Classes.inputGroup} ${Classes.spanTwo}`}>
            <label htmlFor="shortDescription">
              Short description
              <span className={Classes.required}> *</span>
            </label>
            <textarea
              id="shortDescription"
              placeholder="We are looking for a Flutter developer with 2 years experience."
              name="shortDescription"
              maxLength={128}
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
              required
            />
            <div className={Classes["char-counter"]} id="charCounter">
              {shortDescription.length}/128
            </div>
            <p className={Classes.info}>
              Who are you looking for? Give us a one-liner description of your
              ideal candidate.
            </p>
          </div>
          <div className={`${Classes.inputGroup} ${Classes.spanTwo}`}>
            <label htmlFor="requirements">
              Requirements
              <span className={Classes.required}> *</span>
            </label>
            <FormatedInput
              value={qillInputs.reqirements}
              placeholder="Requirements..."
              id="requirements"
              onChange={(value) => handleQuillChange(value, "reqirements")}
              required
            />
          </div>
          <div className={`${Classes.inputGroup} ${Classes.spanTwo}`}>
            <label htmlFor="description">Description</label>
            <FormatedInput
              value={qillInputs.descrioption}
              placeholder="Description..."
              id="description"
              onChange={(value) => handleQuillChange(value, "descrioption")}
            />
          </div>
          <div className={`${Classes.inputGroup} ${Classes.spanTwo}`}>
            <label htmlFor="how">How to apply</label>
            <FormatedInput
              value={qillInputs.how}
              placeholder="How can professionals apply..."
              id="how"
              onChange={(value) => handleQuillChange(value, "how")}
            />
          </div>

          <div className={`${Classes.inputGroup} ${Classes.spanTwo}`}>
            <label htmlFor="skills">
              Skills <span className={Classes.more}> (technology names)</span>
              <span className={Classes.required}> *</span>
            </label>
            <div className={Classes.selectInput}>
              <select
                id="skills"
                name="skills"
                value={skills}
                onChange={handleSkillsChange}
                required
              >
                <option value="" disabled hidden>
                  NodeJS, AWS, PostgreSQL
                </option>
                <option>NodeJS</option>
                <option>AWS</option>
                <option>PostgreSQL</option>
                <option>SQL</option>
                <option>SQL</option>
              </select>
              <Downkey />
            </div>
            <div className={Classes.skillsChips}>
              {skills.map((skill, index) => (
                <div key={index} className={Classes.skillChip}>
                  {skill}
                  <span
                    onClick={() => removeSkill(index)}
                    className={Classes.removeChip}
                  >
                    ×
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className={`${Classes.inputGroup} ${Classes.spanTwo}`}>
            <label for="link">
              Apply link
              <span className={Classes.required}> *</span>
            </label>
            <input
              type="url"
              placeholder="URL or email"
              value={applyLink}
              onChange={(e) => {
                setApplyLink(e.target.value);
              }}
              required
            />
          </div>
        </main>
        <div className={Classes.privacy}>
          <input
            type="checkbox"
            value={companyName}
            onChange={(e) => {
              setCompanyName(!companyName);
            }}
          />
          <Tick className={companyName ? Classes.hidden : Classes.show} />
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
