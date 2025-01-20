import React, { useState } from "react";

import Lottie from "lottie-react";
import { redirect, useNavigate } from "react-router-dom";

import Classes from "./HeroSection.module.css";

import heroAni from "../../assets/animations/hero.json";
import Button from "../UI/Button";
import LogInModal from "./LogInModal";
import { useSelector } from "react-redux";

const HeroSection = () => {
  const [isModalOpen, setIsmodalOpen] = useState(false);
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const hundlePostProject = () => {
    if (auth.user.role === "company") {
      navigate("/addvacancy");
    } else {
      setIsmodalOpen(!isModalOpen);
      console.log("inmodal");
    }
  };

  const hundleClose = () => {
    setIsmodalOpen(false);
  };

  return (
    <section className={Classes.hero}>
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
          <Button className="primary" onClick={hundlePostProject}>
            Post your projects
          </Button>
          <LogInModal
            message={
              <p>
                Please register or login as a <br /> client to post jobs.
              </p>
            }
            isOpen={isModalOpen}
            onClose={hundleClose}
          />
        </div>
        <div>
          <Lottie animationData={heroAni} loop={true} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
