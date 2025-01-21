import { NavLink, useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import Classes from "./clientsStat.module.css";
import { useSelector } from "react-redux";
import LogInModal from "../HeroSection/LogInModal";
import { useState } from "react";

const LeftDiv = (props) => {
  return (
    <div className={Classes.leftContainer}>
      <div>{props.stat}</div>
      <div>
        <h1>{props.title}</h1>
        <p>
          {props.desctription}
          <br /> (Launched: 1 YEAR AGO)
        </p>
      </div>
    </div>
  );
};

const RightDiv = (props) => {
  return (
    <div className={Classes.rightContainer}>
      <div>
        <h1>{props.title}</h1>
        <p>
          {props.desctription}
          <br /> (Launched: 1 YEAR AGO)
        </p>
      </div>
      <div>{props.stat}</div>
    </div>
  );
};

const ClientsStat = () => {
  const [isModalOpen, setIsmodalOpen] = useState(false);
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const hundlePostProject = () => {
    if (auth.user.role === "company") {
      navigate("/addvacancy");
    } else {
      setIsmodalOpen(!isModalOpen);
    }
  };

  const hundleClose = () => {
    setIsmodalOpen(false);
  };
  return (
    <section>
      <header className={Classes.header}>
        <div>
          <h1>Sheqlee for Clients</h1>
          <p>
            Access a pool of talented, competent and dedicated <br />
            experts and professional from Ethiopia.
          </p>
        </div>
        <div className={Classes.action}>
          <NavLink to={"/login"}>
            <Button className="secondary">Log in</Button>
          </NavLink>
          <NavLink to={"/companysignup"}>
            <Button className="primary">Register as an employer</Button>
          </NavLink>
        </div>
      </header>
      <main className={Classes.main}>
        <LeftDiv
          stat="1.5M+"
          title="Unique alerts delivered"
          desctription="We have been delivered 3,916,718 notifications about new remote jobs to job seekers since the website launched."
        />
        <RightDiv
          stat="1.5M+"
          title="Unique alerts delivered"
          desctription="We have been delivered 3,916,718 notifications about new remote jobs to job seekers since the website launched."
        />
        <LeftDiv
          stat="1.5M+"
          title="Unique alerts delivered"
          desctription="We have been delivered 3,916,718 notifications about new remote jobs to job seekers since the website launched."
        />
        <RightDiv
          stat="1.5M+"
          title="Unique alerts delivered"
          desctription="We have been delivered 3,916,718 notifications about new remote jobs to job seekers since the website launched. "
        />
        <Button className="primary" onClick={hundlePostProject}>
          Post a job now
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
      </main>
    </section>
  );
};

export default ClientsStat;
