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

const action = (
  <div className={Classes.action}>
    <Button className="primary">Apply now</Button>
    <p>
      Please mention <b>Sheqlee</b> when you apply.
    </p>
  </div>
);

const listOfTags = ["Java", "User Interface", "Python", "C++", "Flutter"];

const formatedText = (
  <div>
    <p>
      We need one to Designs and maintains prospect websites including graphic
      development, regular site updates, usability reviews and traffic
      reporting.
    </p>
    <h1>QUALIFICATIONS</h1>
    <p>
      - Bachelor's degree with major in graphic design or a related field from
      an accredited college or university preferred.
    </p>
    <h1>Experience</h1>
    <p>
      - Four (4) years of graphic/web design experience or equivalent
      combination of education and experience required.
    </p>
    <h1>Skills & Knowledge</h1>{" "}
    <p>
      - Excellent knowledge of graphic and photo software - Good knowledge of
      web technology - Excellent oral and written communication, including
      presentation skills - PC literate, including Microsoft Office products -
      Strong organizational skills - Excellent interpersonal skills - Ability to
      work on multiple projects and meet deadlines - Ability to work in a team
      environment - Ability to meet or exceed Performance Competencies
    </p>
    <h1> Description</h1>{" "}
    <p>
      For a career path that is both challenging and rewarding, join Sedgwick’s
      talented team of 27,000 colleagues around the globe. Sedgwick is a leading
      provider of technology-enabled risk, benefits and integrated business
      solutions. Taking care of people is at the heart of everything we do.
      Millions of people and organizations count on Sedgwick each year to take
      care of their needs when they face a major life event or something
      unexpected happens. Whether they have a workplace injury, suffer property
      or financial loss or damage from a natural or manmade disaster, are
      involved in an auto or other type of accident, or need time away from work
      for the birth of a child or another medical situation, we are here to
      provide compassionate care and expert guidance. Our clients depend on our
      talented colleagues to take care of their most valuable assets—their
      employees, their customers and their property. At Sedgwick, caring
      counts®. Join our team of creative and caring people of all backgrounds,
      and help us make a difference in the lives of others.
      <br /> PRIMARY PURPOSE: To design and produce presentations, technical and
      conceptual web graphics, interactive marketing materials, and print
      materials.
    </p>
  </div>
);
///the qualifications should befetched here

const JobDetailsSection = () => (
  <secttion>
    <header className={Classes.header}>
      <div className={Classes.jobTitle}>
        <UiUX />
        <h1>Graphic Design Specialist</h1>
      </div>
      <div className={Classes.details}>
        <p>
          <Calendar />
          30mins ago
        </p>
        <p>
          <Company />
          KeperLab
        </p>
        <p>
          <Clock />
          Full-Time
        </p>
        <p>
          <Calendar />
          Intermediate
        </p>
        <p>
          <Company />
          $15/hr
        </p>
      </div>

      {action}
    </header>
    <main className={Classes.mainContainer}>{formatedText}</main>
    <footer className={Classes.footer}>
      <div className={Classes.details}>
        <AawesomeTags className={Classes.tagsIndicator} />
        {listOfTags.map((tag) => (
          <p>{tag}</p>
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
  </secttion>
);

export default JobDetailsSection;
