import { useEffect, useState } from "react";

import Classes from "./EditProfileSection.module.css";

import { ReactComponent as EditP } from "../../assets/icons/edit_profile.svg";
import { ReactComponent as Edit } from "../../assets/icons/Icon material-edit.svg";
import { ReactComponent as Ellipse } from "../../assets/icons/Ellipse 2.svg";
import placeholderImage from "../../assets/icons/settings - alt2 (2).svg";
import FormatedInput from "../UI/FromatedInput";
import Button from "../UI/Button";
import ActionsButton from "../UI/ActionsButton";
import { ReactComponent as Delete } from "../../assets/icons/Icon material-delete.svg";
import SkillButtons from "../UI/SkillButtons";
import AddSkillModal from "./AddSkillModal";
import AddLinkModal from "./AddLinkModal";
import { useNavigate } from "react-router-dom";

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
const EditProfileSection = () => {
  const navigate = useNavigate();

  //file states
  const [image, setImage] = useState();
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [cvUrl, setCvUrl] = useState("");

  //form state
  const [name, setName] = useState();
  const [title, setTitle] = useState();
  const [intro, setIntro] = useState();
  const [skills, setSkills] = useState(listOfSkills);
  const [profiles, setProfiles] = useState(listOfProfiles);

  //modal state
  const [isLinkModalOpen, setIsLinkModalOpen] = useState(false);
  const [isSkillModalOpen, setIsSkillModalOpen] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch("/api/profile", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        if (!response.ok) {
          throw new Error("Failed to fetch profile");
        }
        const data = await response.json();
        setName(data.name || "");
        setTitle(data.title || "");
        setIntro(data.intro || "");
        setSkills(data.skills || listOfSkills);
        setProfiles(data.profiles || listOfProfiles);
        setImage(data.image || null);
        setCvUrl(data.cv || "");
        setFileName(data.cv ? data.cv.split("/").pop() : "");
      } catch (err) {
        console.error("Fetch profile failed, using dummy data:", err);
      }
    };
    fetchProfile();
  }, []);

  const handleIntroChange = (value) => {
    setIntro(value);
  };

  const handleAddSkill = (skill) => {
    const exists = skills.find(
      (s) => s.skill.toLowerCase() === skill.skill.toLowerCase()
    );
    if (exists) {
      alert("This skill already exists");
      return;
    }
    setSkills((prevState) => [...prevState, skill]);
  };

  const handleAddLink = (link) => {
    const exists = profiles.find(
      (p) => p.name.toLowerCase() === link.name.toLowerCase()
    );
    if (exists) {
      alert("This profile already exists");
      return;
    }
    setProfiles((prevState) => [...prevState, link]);
  };

  const handleSkillModalClose = () => {
    setIsSkillModalOpen(false);
  };
  const handleLinkModalClose = () => {
    setIsLinkModalOpen(false);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
      console.log(file);
      console.log(fileName);
    }
  };

  const hundleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result); // Set the uploaded image's data URL
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeSkillLevel = (skillName, newLevel) => {
    setSkills((prevSkills) =>
      prevSkills.map((item) =>
        item.skill === skillName ? { ...item, level: newLevel } : item
      )
    );
  };

  const handleDeleteSkill = (skillToDelete) => {
    setSkills((prevSkills) =>
      prevSkills.filter((skill) => skill.skill !== skillToDelete)
    );
  };

  const handleDeleteProfile = (profileNameToDelete) => {
    setProfiles((prevProfiles) =>
      prevProfiles.filter((profile) => profile.name !== profileNameToDelete)
    );
  };

  const handleUpdateProfile = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("title", title);
      formData.append("intro", intro);
      formData.append("skills", JSON.stringify(skills));
      formData.append("profiles", JSON.stringify(profiles));

      formData.append("image", image || "");

      if (selectedFile) {
        formData.append("cv", selectedFile);
      } else {
        formData.append("cv", cvUrl || "");
      }

      const response = await fetch("/api/profile", {
        method: "PUT",
        body: formData,
      });
      if (!response.ok) {
        throw new Error("Failed to update profile");
      }
      alert("Profile updated successfully!");
      navigate("/profilepreview");
    } catch (error) {
      navigate("/profilepreview");
      console.error("Error updating profile:", error);
      alert("Error updating profile. Please try again.");
    }
  };

  return (
    <section className={Classes.mainSection}>
      <AddLinkModal
        isOpen={isLinkModalOpen}
        onAddLink={handleAddLink}
        onClose={handleLinkModalClose}
      />
      <AddSkillModal
        isOpen={isSkillModalOpen}
        onAddSkill={handleAddSkill}
        onClose={handleSkillModalClose}
      />
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
              <label htmlFor="name">
                Full name
                <span className={Classes.required}>*</span>
              </label>
              <div className={Classes.selectInput}>
                <input type="text" id="name" placeholder="Muruts Yifter" />
                <Edit />
              </div>
            </div>
            <div className={Classes.inputGroup}>
              <label htmlFor="title">
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
              <div className={Classes.img}>
                <img
                  src={image ? image : placeholderImage}
                  className={!image ? Classes.placeholder : undefined}
                />
              </div>
              <label htmlFor="image-upload">
                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  onClick={hundleImageChange}
                />
                Upload
              </label>
              <p>2MB Max | 1:1 Ratio</p>
            </div>
          </div>
          <div className={`${Classes.inputGroup} `}>
            <label for="intro">Introduce yourself</label>
            <FormatedInput
              id="intro"
              value={intro}
              inplaceholder="Say something appealing about yourself..."
              onChange={handleIntroChange}
            />
          </div>
          <div className={Classes.skillandProfile}>
            <div className={`${Classes.inputGroup} `}>
              <label htmlFor="skills">
                Your skills
                <p>
                  Adding your skills will help us make job suggestions more
                  accurately.
                </p>
              </label>
              <table className={`${Classes.table} ${Classes.largeFirst}`}>
                <thead>
                  <tr>
                    <th>Skill</th>
                    <th>Level</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {skills.map((skill) => (
                    <tr key={skill.skill}>
                      <td>{skill.skill}</td>
                      <td>
                        <SkillButtons
                          level={skill.level}
                          onChangeLevel={(newLevel) =>
                            handleChangeSkillLevel(skill.skill, newLevel)
                          }
                        />
                      </td>
                      <td>
                        <button
                          className={Classes.actionsButton}
                          onClick={(e) => {
                            e.preventDefault();
                            handleDeleteSkill(skill.skill);
                          }}
                        >
                          <Delete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className={Classes.addButton}>
                <Button
                  className="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsSkillModalOpen(true);
                  }}
                >
                  Add a skill
                </Button>
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
                  {profiles.map((profile) => (
                    <tr>
                      <td>{profile.name}</td>
                      <td>{profile.url}</td>
                      <td>
                        <button
                          className={Classes.actionsButton}
                          onClick={(e) => {
                            e.preventDefault();
                            handleDeleteProfile(profile.name);
                          }}
                        >
                          <Delete />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className={Classes.addButton}>
                <Button
                  className="primary"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsLinkModalOpen(true);
                  }}
                >
                  Add a link
                </Button>
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
              {fileName ? (
                <span className={Classes.fileName}>{fileName}</span>
              ) : (
                <span className={Classes.fileName}>
                  <Ellipse />
                  <Ellipse />
                  <Ellipse />
                </span>
              )}
              <label for="cv-upload">
                <input
                  type="file"
                  id="cv-upload"
                  accept="application/pdf"
                  onChange={handleFileChange}
                />
                Upload CV <span>[.pdf]</span>
              </label>
            </div>
          </div>

          <div className={Classes.actionButton}>
            <Button className="primary" onClick={handleUpdateProfile}>
              Update profile
            </Button>
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
