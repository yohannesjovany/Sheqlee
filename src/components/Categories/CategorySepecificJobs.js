import JobCard from "../jobs/JobCard";
import SectionWrapper from "../UI/SectionWrapper";
import Classes from "./CategorySepecificJobs.module.css";
import { ReactComponent as ProductDesign } from "../../assets/icons/product_design.svg";
import { ReactComponent as Bell } from "../../assets/icons/bell.svg";
import Button from "../UI/Button";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin-logo.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import LogInModal from "../HeroSection/LogInModal";

const jobsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8];

const CategorySepecificJobs = () => {
  return (
    <section>
      <LogInModal
        message={
          <p>
            Please register or login before you could subscribe to categories.
          </p>
        }
      />

      <header className={Classes.header}>
        <ProductDesign />
        <h1>UI/UX & Product Design</h1>
        <p>
          All job posts in the <b>UI/UX & Product Design</b> category.
        </p>
        <Button className="primary">
          <Bell />
          Subscribe to category
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

export default CategorySepecificJobs;
