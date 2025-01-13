import React from "react";
import Lottie from "lottie-react";

import Classes from "./HeroSection.module.css";
import heroAni from "../../assets/animations/hero.json";
import Button from "../UI/Button";
import LogInModal from "./LogInModal";
const HeroSection = () => {
  return (
    <section className={Classes.hero}>
      {/* this should be included when you start working with states */}
      <LogInModal
        message={
          <p>
            Please register or login as a <br /> client to post jobs.
          </p>
        }
      />

      <div className={Classes.container}>
        <div className={Classes.heroContent}>
          <h1>
            Recruit <span className={Classes.em}> affordable</span> &{" "}
            <span>skilled </span>Ethiopian professionals.
          </h1>
          <p>
            Web frontend, mobile app, backend, database, full-stack, data
            science, UI/UX & product design, project management, scrum master,
            etc.
          </p>
          <Button className="primary">Post your projects</Button>
        </div>
        <div>
          <Lottie animationData={heroAni} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
