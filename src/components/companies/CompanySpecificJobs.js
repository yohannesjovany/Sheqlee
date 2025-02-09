import Classes from "./CompanySpecificJobs.module.css";
import HotJar from "../../assets/images/hotjar_logo.png";
import { ReactComponent as Verify } from "../../assets/icons/verify.svg";
import { ReactComponent as Location } from "../../assets/icons/placeholder.svg";
import { ReactComponent as CompanyLink } from "../../assets/icons/link.svg";
import { ReactComponent as Employee } from "../../assets/icons/employee.svg";
import { ReactComponent as Bell } from "../../assets/icons/bell.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin-logo.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import ReadMore from "../UI/ReadMore";
import Button from "../UI/Button";
import JobCard from "../jobs/JobCard";
import SectionWrapper from "../UI/SectionWrapper";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import LogInModal from "../HeroSection/LogInModal";
import { Link } from "react-router-dom";

const formattedText = (
  <p>
    Hotjar is a successful Product Experience Insights company that operates on
    a fully remote basis, with team members spread throughout Europe, Africa and
    the Americas. Our team casts a wide net across many locations, lifestyles,
    and backgrounds. We celebrate the uniqueness and strength found in
    diversity: it’s our differences that make us interesting, and our shared
    belief in Hotjar’s
    <br />
    Core Values that bind us together. These values form Hotjar's culture as one
    guided by respect, transparency, collaboration, and direct feedback. We put
    our customers at the heart of everything we do, and we do so through a
    diverse team working together in an honest, inclusive environment. We all
    commit to creating a safe working environment and are allies to those often
    underrepresented - including but not limited to members of BIPOC and
    LGBTQIA+ communities, people with disabilities, and all people who identify
    as women.
    <br />
    Core Values that bind us together. These values form Hotjar's culture as one
    guided by respect, transparency, collaboration, and direct feedback. We put
    our customers at the heart of everything we do, and we do so through a
    diverse team working together in an honest, inclusive environment. We all
    commit to creating a safe working environment and are allies to those often
    underrepresented - including but not limited to members of BIPOC and
    LGBTQIA+ communities, people with disabilities, and all people who identify
    as women.
  </p>
);

const jobsList = [1, 2, 3, 4, 5];

const CompanySpecificJobs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const auth = useSelector((state) => state.auth);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 896);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 896);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const hundleSubscription = () => {
    if (auth.status === "guest") {
      setIsModalOpen(true);
    } else {
      //post request to subscribe
    }
  };

  return (
    <section>
      <header className={Classes.header}>
        <div>
          <img src={HotJar} alt="company" />
          <h1>
            Hotjar
            <Verify />
          </h1>
        </div>
        <div className={Classes.details}>
          <p>
            <CompanyLink />
            <Link>hotjar.com</Link>
          </p>
          <p>
            <Employee />
            KeperLab
          </p>
          <p>
            <Location />
            Full-Time
          </p>
        </div>
        <div>
          <Button className="primary" onClick={hundleSubscription}>
            <Bell />
            Subscribe to company
          </Button>
          <LogInModal
            message={
              <p>
                Please register or login before you could subscribe to
                companies.
              </p>
            }
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
          />
          <p className={Classes.subscibs}>
            Subscribers: <b>5</b>
          </p>
          {isMobile && (
            <div className={Classes.socialMedia}>
              <Facebook />
              <Twitter />
              <Telegram />
              <Linkedin />
            </div>
          )}
        </div>
      </header>
      <main className={Classes.main}>
        <ReadMore formattedText={formattedText} />
        <h1>Job posts from Hotjar</h1>
        <SectionWrapper isFlex={true}>
          {jobsList.map((job) => (
            <JobCard />
          ))}
        </SectionWrapper>
      </main>
    </section>
  );
};

export default CompanySpecificJobs;
