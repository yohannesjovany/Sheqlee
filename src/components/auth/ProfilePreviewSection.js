import { useState, useEffect } from "react";
import Classes from "./ProfilePreview.module.css";
import { ReactComponent as EditP } from "../../assets/icons/edit_profile.svg";
// import placeholderImage from "src/assets/images/photo_2024-05-11_00-50-13.jpg";
import SkillButtons from "../UI/SkillButtons";
import Button from "../UI/Button";
import ProfilePrint from "./ProfilePrint";
import ReactDOM from "react-dom";

const defaultProfile = {
  name: "Muruts Yifter",
  title: "Full-Stack Developer",
  bio: "I have been working as a software developer for the last 3+ years. I have excellent experience in backend, web frontend and mobile app development. I am extremely dedicated to completing projects on time and with splendid work quality. I would be an addition to your team.",
  image: "https://i.imghippo.com/files/SavE2354wjA.jpg",
  skills: [
    { skill: "Java", level: 1 },
    { skill: "Flutter", level: 1 },
    { skill: "Golang", level: 1 },
  ],
  profiles: [
    { name: "GitHub", url: "https://github.com/mygithub" },
    { name: "LinkedIn", url: "https://linkedin.com/mylinkedin" },
  ],
  cv: "http/example.com/cv.pdf",
  email: "muruts.yifter@gmail.com",
};

const ProfilePreviewSection = () => {
  const [profile, setProfile] = useState(defaultProfile);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/profile", {
          headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
          const data = await response.json();
          setProfile({
            name: data.name || defaultProfile.name,
            title: data.title || defaultProfile.title,
            bio: data.bio || defaultProfile.bio,
            image: data.image || defaultProfile.image,
            skills: data.skills || defaultProfile.skills,
            profiles: data.profiles || defaultProfile.profiles,
            cv: data.cv || defaultProfile.cv,
            email: data.email || defaultProfile.email,
          });
        }
      } catch (error) {
        console.error("Error fetching profile, using default data:", error);
      }
    };

    fetchProfile();
  }, []);

  const handleDownloadCV = () => {
    if (profile.cv) {
      window.open(profile.cv, "_blank");
    } else {
      alert("CV not available");
    }
  };

  const handlePrint = () => {
    const printWindow = window.open("", "PrintWindow", "width=800,height=600");

    // Write basic HTML structure first
    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Print</title>
          <!-- Add any stylesheets or styles needed for printing -->
        </head>
        <body>
        </body>
      </html>
    `);
    printWindow.document.close(); // Important to close after writing

    // Now we can safely create and append elements
    const container = printWindow.document.createElement("div");
    printWindow.document.body.appendChild(container);

    // Render the component and trigger print
    ReactDOM.render(<ProfilePrint profile={profile} />, container, () => {
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    });
  };

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
            <p>{profile.name}</p>
          </div>
          <div className={Classes.field}>
            <p>Title</p>
            <p>{profile.title}</p>
          </div>
          <img src={profile.image} alt="Profile" />
        </div>
        <div className={Classes.field}>
          <p>Bio</p>
          <p>{profile.bio}</p>
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
              {profile.skills.map((skill, index) => (
                <tr key={index}>
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
              {profile.profiles.map((p, index) => (
                <tr key={index}>
                  <td>{p.name}</td>
                  <td>
                    <a href={p.url} target="_blank" rel="noopener noreferrer">
                      {p.url}
                    </a>
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
              <span>
                {profile.cv ? profile.cv.split("/").pop() : "No CV uploaded"}
              </span>
              <button onClick={handleDownloadCV}>Download</button>
            </div>
          </div>
          <div className={Classes.field}>
            <p>Email</p>
            <p>{profile.email}</p>
          </div>
        </div>
        <div className={Classes.action}>
          <Button className="primary" onClick={handlePrint}>
            Print profile
          </Button>
        </div>
      </main>
    </section>
  );
};

export default ProfilePreviewSection;
