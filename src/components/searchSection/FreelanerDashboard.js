import Classes from "./SearchSection.module.css";

import { ReactComponent as DownArrowIcon } from "../../assets/icons/Icon material-keyboard-arrow-down (2).svg";
import { ReactComponent as Dashboard } from "../../assets/icons/dashboard.svg";
import SectionWrapper from "../UI/SectionWrapper";
import NoResultsFound from "./NoResultsFound";
import JobCard from "../jobs/JobCard";
import Button from "../UI/Button";

const jobsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8];

const FreelancerDashboard = (props) => {
  return (
    <>
      <section>
        <header className={Classes.header}>
          <Dashboard />
          <h1>Dashboard</h1>
          <p>These are jobs for you based on your skills.</p>
        </header>
        <main className={Classes.main}>
          <form>
            <div className={`${Classes.selectGroup} ${Classes.categories} `}>
              <select>
                <option>Select categories</option>
                <option>All Catagories</option>
                <option>All Catagories</option>
              </select>
              <DownArrowIcon />
            </div>
            <div className={Classes.selectGroup}>
              <select>
                <option>Select type</option>
              </select>
              <DownArrowIcon />
            </div>
            <div className={Classes.selectGroup}>
              <select>
                <option>Select level</option>
              </select>
              <DownArrowIcon />
            </div>
            <div className={`${Classes.selectGroup} ${Classes.spanThree}`}>
              <select>
                <option>Select tags</option>
              </select>
              <DownArrowIcon />
            </div>
            <Button className="primary">Apply filter</Button>
          </form>
        </main>
      </section>
      {!props.job && <NoResultsFound />}

      {props.job && (
        <SectionWrapper>
          {jobsList.map((job) => (
            <JobCard />
          ))}
        </SectionWrapper>
      )}
    </>
  );
};

export default FreelancerDashboard;
