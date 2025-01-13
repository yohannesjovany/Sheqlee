import Classes from "./EditProfileSection.module.css";

import { ReactComponent as EditP } from "../../assets/icons/edit_profile.svg";
import { ReactComponent as Edit } from "../../assets/icons/Icon material-edit.svg";
import { ReactComponent as Downkey } from "../../assets/icons/Icon material-keyboard-arrow-downT.svg";
import placeholderImage from "../../assets/icons/settings - alt2 (2).svg";
import FormatedInput from "../UI/FromatedInput";
import Button from "../UI/Button";
import ActionsButton from "../UI/ActionsButton";
import { ReactComponent as Delete } from "../../assets/icons/Icon material-delete.svg";
import SkillButtons from "../UI/SkillButtons";
import AddSkillModal from "./AddSkillModal";

const listOfSkills = [
  { skill: "Java", level: 1 },
  { skill: "Flutter", level: 1 },
  { skill: "Golang", level: 1 },
];
const listOfProfiles = [
  { name: "GitHub", url: "https://github.com/mygithub" },
  { name: "LinkedIn", url: "https://linkedin.com/mylinkedin" },
];
const EditProfileSection = () => {
  return (
    <section className={Classes.mainSection}>
      <header className={Classes.header}>
        <EditP />
        <h1>Edit Profile</h1>
        <p>
          The more complete your profile, the easier for
          <br />
          companies to select you for jobs.
        </p>
      </header>
      <main>
        <form>
          <div className={Classes.row}>
            <div className={Classes.inputGroup}>
              <label for="name">
                Full name
                <span className={Classes.required}>*</span>
              </label>
              <div className={Classes.selectInput}>
                <input type="text" id="name" placeholder="Muruts Yifter" />
                <Edit />
              </div>
            </div>
            <div className={Classes.inputGroup}>
              <label for="title">
                Title <span className={Classes.required}>*</span>
              </label>
              <div className={Classes.selectInput}>
                <input
                  type="text"
                  id="title"
                  placeholder="Full-Stack Developer"
                />
                <Edit />
              </div>
            </div>
            <div className={Classes.fileUpload}>
              <div>
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
            <label for="intro">Introduce yourself</label>
            <FormatedInput
              id="intro"
              inplaceholder="Say something appealing about yourself..."
            />
          </div>
          <div className={Classes.skillandProfile}>
            <div className={`${Classes.inputGroup} `}>
              <label for="skills">
                Your skills
                <p>
                  Adding your skills will help us make job suggestions more
                  accurately.
                </p>
              </label>
              <table className={Classes.table}>
                <thead>
                  <tr>
                    <th>Skill</th>
                    <th>Level</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {listOfSkills.map((skill) => (
                    <tr>
                      <td>{skill.skill}</td>
                      <td>
                        <SkillButtons level={skill.level} />
                      </td>
                      <td>
                        <button className={Classes.actionsButton}>
                          <Delete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className={Classes.addButton}>
                <Button className="primary">Add a skill</Button>
                <AddSkillModal />
              </div>
            </div>
            <div className={`${Classes.inputGroup} `}>
              <label for="profile">
                Your profiles
                <p>
                  Adding your links to your profiles make more credible.
                  Profiles could be GitHub, LinkedIn etc.
                </p>
              </label>
              <table className={Classes.table}>
                <thead>
                  <tr>
                    <th>Profile name</th>
                    <th>URL</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {listOfProfiles.map((profile) => (
                    <tr>
                      <td>{profile.name}</td>
                      <td>{profile.url}</td>
                      <td>
                        <button className={Classes.actionsButton}>
                          <Delete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className={Classes.addButton}>
                <Button className="primary">Add a link</Button>
              </div>
            </div>
          </div>
          <div className={`${Classes.inputGroup} `}>
            <label for="cv">
              Your CV ( <span className={Classes.required}>*</span>.pdf)
              <p>
                Adding your CV will help us to know you in details and suggest
                you to companies.
              </p>
            </label>
            <div className={Classes.cvUpload}>
              <span>...</span>
              <label for="cv-upload">
                <input type="file" id="cv-upload" accept="application/pdf" />
                Upload CV <span>[.pdf]</span>
              </label>
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

export default EditProfileSection;
