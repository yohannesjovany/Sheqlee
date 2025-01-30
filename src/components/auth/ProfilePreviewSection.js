import Classes from "./ProfilePreview.module.css";

import { ReactComponent as EditP } from "../../assets/icons/edit_profile.svg";

import placeholderImage from "../../assets/images/photo_2024-05-11_00-50-13.jpg";
import SkillButtons from "../UI/SkillButtons";
import Button from "../UI/Button";

const listOfSkills = [
  { skill: "Java", level: 1 },
  { skill: "Flutter", level: 1 },
  { skill: "Golang", level: 1 },
];
const listOfProfiles = [
  { name: "GitHub", url: "https://github.com/mygithub" },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/mylinkedinhttps://linkedin.com/mylinkedinhttps://linkedin.com/mylinkedin",
  },
];
const ProfilePreviewSection = () => {
  return (
    <section className={Classes.mainSection}>
      <header className={Classes.header}>
        <EditP />
        <h1>Freelancer Profile</h1>
      </header>
      <main className={Classes.main}>
        <div className={Classes.row}>
          <div className={Classes.field}>
            <p>Full name</p>
            <p>Muruts Yifter</p>
          </div>
          <div className={Classes.field}>
            <p>Title</p>
            <p>Full-Stack Developer</p>
          </div>
          <img src={placeholderImage} />
        </div>
        <div className={Classes.field}>
          <p>Bio</p>
          <p>
            I have been working as a software developer for the last 3+ years. I
            have excellent experience in backend, web frontend and mobile app
            development. I am extremely dedicated to completing projects on time
            and with splendid work quality. I would be an addition to your team.
          </p>
        </div>
        <div className={Classes.field}>
          <p>Skillset</p>
          <table className={`${Classes.table} ${Classes.largeFirst}`}>
            <thead>
              <tr>
                <th>Skill</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              {listOfSkills.map((skill) => (
                <tr>
                  <td>{skill.skill}</td>
                  <td>
                    <SkillButtons level={skill.level} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={Classes.field}>
          <p>Profiles</p>
          <table className={Classes.table}>
            <thead>
              <tr>
                <th>Profile name</th>
                <th>URL</th>
              </tr>
            </thead>
            <tbody>
              {listOfProfiles.map((profile) => (
                <tr>
                  <td>{profile.name}</td>
                  <td>
                    <a href={profile.url}>{profile.url}</a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={Classes.row}>
          <div className={Classes.field}>
            <p>CV</p>
            <div className={Classes.cv}>
              <span>Resume - Muruts Y…022.pdf</span>
              <button>Download</button>
            </div>
          </div>
          <div className={Classes.field}>
            <p>Email</p>
            <p>muruts.yifter@gmail.com</p>
          </div>
        </div>
        <div className={Classes.action}>
          <Button className="primary">Print profile</Button>
        </div>
      </main>
    </section>
  );
};
export default ProfilePreviewSection;
