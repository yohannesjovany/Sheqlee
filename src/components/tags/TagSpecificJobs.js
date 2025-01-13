import Classes from "./TagSpecificJobs.module.css";

import { ReactComponent as JaavaSciptLogo } from "../../assets/icons/javascript-logo-svgrepo-com.svg";
import { ReactComponent as Bell } from "../../assets/icons/bell.svg";
import Button from "../UI/Button";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin-logo.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import SectionWrapper from "../UI/SectionWrapper";
import JobCard from "../jobs/JobCard";

const jobsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8];

const TagSpecificJos = () => {
  return (
    <section>
      <header className={Classes.header}>
        <JaavaSciptLogo />
        <h1>JavaScript</h1>
        <p>
          All job posts with the tag <b>JavaScript</b>.
        </p>
        <Button className="primary">
          <Bell />
          Subscribe to tag
        </Button>
        <div className={Classes.socialMedia}>
          <p>
            Subscribers: <b>1,784</b>
          </p>
          <div>
            <Facebook />
            <Twitter />
            <Telegram />
            <Linkedin />
          </div>
        </div>
      </header>
      <SectionWrapper>
        {jobsList.map((job) => (
          <JobCard />
        ))}
      </SectionWrapper>
    </section>
  );
};

export default TagSpecificJos;
