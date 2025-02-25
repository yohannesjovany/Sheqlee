import React from "react";
import Classes from "./ProfilePrint.module.css";
// import logo from "../../assets/logo.png";

const convertLevelToString = (level) => {
  const levelMap = {
    1: "Beginner",
    2: "Intermediate",
    3: "Advanced",
    4: "Expert",
    5: "Lead",
  };
  return levelMap[level] || "";
};

const ProfilePrint = ({ profile }) => {
  return (
    <div className={Classes.printContainer}>
      <header className={Classes.header}>
        <img
          src={profile.image}
          alt="Profile"
          className={Classes.profileImage}
        />
        <h1 className={Classes.name}>{profile.name}</h1>
        <h2 className={Classes.title}>{profile.title}</h2>
      </header>
      <section className={Classes.profilesSection}>
        {profile.profiles.map((p, index) => (
          <p key={index}>
            <strong>{p.name}:</strong>{" "}
            <a href={p.url} target="_blank" rel="noopener noreferrer">
              {p.url}
            </a>
          </p>
        ))}
      </section>
      <div className={Classes.field}>
        <p>
          <strong>Email:</strong> {profile.email}
        </p>
      </div>
      <div className={Classes.field}>
        <p>
          <strong>Skills:</strong>{" "}
          {profile.skills
            .map((s) => `${s.skill} (${convertLevelToString(s.level)})`)
            .join(", ")}
        </p>
      </div>
      <section className={Classes.introSection}>
        <h3>Self Introduction</h3>
        <p>{profile.bio}</p>
      </section>
      <footer className={Classes.footer}>
        <p>&copy; {new Date().getFullYear()} Sheqlee</p>
      </footer>
    </div>
  );
};

export default ProfilePrint;
