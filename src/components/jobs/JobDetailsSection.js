import { useState, useEffect } from "react";
import Classes from "./JobDetailsSection.module.css";
import { ReactComponent as UiUX } from "../../assets/icons/ui_ux_design.svg";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";
import { ReactComponent as Clock } from "../../assets/icons/Icon feather-clock.svg";
import { ReactComponent as Company } from "../../assets/icons/company.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin-logo.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as AawesomeTags } from "../../assets/icons/Icon awesome-tags.svg";
import Button from "../UI/Button";
import ReadMore from "../UI/ReadMore";

const JobDetailsSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 896);
  const [jobDetails, setJobDetails] = useState(null);
  const [loading, setLoading] = useState(true);

  // Handle resizing for mobile responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 896);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Fetch job details from the backend
  useEffect(() => {
    const fetchJobDetails = async () => {
      try {
        const response = await fetch("/api/jobdetails"); // Replace with your actual endpoint
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setJobDetails(data);
      } catch (error) {
        console.error("Error fetching job details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  // Destructure job details with fallback values
  const {
    title = "Graphic Design Specialist",
    company = "KeperLab",
    timeAgo = "30mins ago",
    jobType = "Full-Time",
    level = "Intermediate",
    salary = "$15/hr",
    description = "We need someone to design and maintain prospect websites...",
    qualifications = "Bachelor's degree in graphic design or related field...",
    tags = ["Java", "User Interface", "Python", "C++", "Flutter"],
  } = jobDetails || {};

  const action = (
    <div className={Classes.action}>
      <Button className="primary">Apply now</Button>
      <p>
        Please mention <b>{company}</b> when you apply.
      </p>
    </div>
  );

  const formattedText = (
    <div>
      <p>{description}</p>
      <h1>QUALIFICATIONS</h1>
      <p>{qualifications}</p>
    </div>
  );

  return (
    <section>
      <header className={Classes.header}>
        <div className={Classes.jobTitle}>
          <UiUX />
          <h1>{title}</h1>
        </div>
        <div className={Classes.details}>
          <p>
            <Calendar />
            {timeAgo}
          </p>
          <p>
            <Company />
            {company}
          </p>
          <p>
            <Clock />
            {jobType}
          </p>
          <p>
            <Calendar />
            {level}
          </p>
          <p>
            <Company />
            {salary}
          </p>
        </div>
        {action}
      </header>
      {isMobile ? (
        <ReadMore formattedText={formattedText} />
      ) : (
        <main className={Classes.mainContainer}>{formattedText}</main>
      )}
      <footer className={Classes.footer}>
        <div className={Classes.details}>
          <div className={Classes.tagsIndicator}>
            <AawesomeTags />
          </div>
          {tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
        {action}
        <div className={Classes.socialMedia}>
          <p>Share with others</p>
          <div>
            <Facebook />
            <Twitter />
            <Telegram />
            <Linkedin />
          </div>
        </div>
      </footer>
    </section>
  );
};

export default JobDetailsSection;
