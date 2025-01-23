import Classes from "./CompanyProfileSection.module.css";
import { ReactComponent as Company } from "../../assets/icons/company.svg";
import { ReactComponent as Edit } from "../../assets/icons/Icon material-edit.svg";
import { ReactComponent as Downkey } from "../../assets/icons/Icon material-keyboard-arrow-downT.svg";
import placeholderImage from "../../assets/icons/settings - alt2 (3).svg";
import FormatedInput from "../UI/FromatedInput";
import Button from "../UI/Button";

const CompanyProfileSection = () => {
  return (
    <section className={Classes.mainSection}>
      <header className={Classes.header}>
        <Company />
        <h1>Company Profile</h1>
        <p>
          Provide accurate information about your company
          <br />
          to make yourself discoverable.
        </p>
      </header>
      <main>
        <form>
          <div className={Classes.row}>
            <div className={Classes.inputGroup}>
              <label for="company-name">
                Company name <span className={Classes.required}>*</span>
              </label>
              <div className={Classes.selectInput}>
                <input
                  type="text"
                  id="company-name"
                  placeholder="Sheqlee Co., Ltd."
                />
                <Edit />
              </div>
            </div>
            <div className={Classes.inputGroup}>
              <label for="domain">
                Domain <span className={Classes.required}>*</span>
              </label>
              <div className={Classes.selectInput}>
                <input
                  type="url"
                  id="domain"
                  placeholder="https://sheqlee.com"
                />
                <Edit />
              </div>
            </div>
            <div className={Classes.fileUpload}>
              <div className={Classes.img}>
                <img src={placeholderImage} />
              </div>
              <label for="image-upload">
                <input type="file" id="image-upload" accept="image/*" />
                Upload
              </label>
              <p>2MB Max | 1:1 Ratio</p>
            </div>
          </div>
          <div className={`${Classes.inputGroup} `}>
            <label for="salary">Description</label>
            <FormatedInput placeholder="A brief description about your company..." />
          </div>
          <div className={Classes.row}>
            <div className={Classes.inputGroup}>
              <label for="size">Company size</label>
              <div className={Classes.selectInput}>
                <select id="size">
                  <option value="" selected>
                    Less than 10 people
                  </option>
                  <option>Web Frontend</option>
                  <option>UI/UX Desing</option>
                </select>
                <Downkey />
              </div>
            </div>
            <div className={Classes.inputGroup}>
              <label for="location">HQ location</label>
              <div className={Classes.selectInput}>
                <input
                  type="text"
                  id="location"
                  placeholder="Seoul, S. Korea"
                />
                <Edit />
              </div>
            </div>
          </div>
          <div className={Classes.actionButton}>
            <Button className="primary">Update profile</Button>
          </div>
        </form>
        <div className={Classes.lineSeparator}>
          <div></div>
          <p>
            <span className={Classes.required}> * </span> fields are required.
          </p>
        </div>
      </main>
    </section>
  );
};

export default CompanyProfileSection;
