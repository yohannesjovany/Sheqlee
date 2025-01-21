import Classes from "./SearchSection.module.css";

import { ReactComponent as DownArrowIcon } from "../../assets/icons/Icon material-keyboard-arrow-down (2).svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/Icon metro-search.svg";
import SectionWrapper from "../UI/SectionWrapper";
import NoResultsFound from "./NoResultsFound";
import JobCard from "../jobs/JobCard";
import Button from "../UI/Button";

const jobsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8];

const SearchSection = (props) => {
  return (
    <>
      <section>
        <header className={Classes.header}>
          <h1>All Job Posts</h1>
          <p>
            Browse the latest jobs you can take up right now Use <br /> filters
            to find the best jobs for your skillset.
          </p>
        </header>
        <main className={Classes.main}>
          <form>
            <div className={`${Classes.selectGroup} ${Classes.categories} `}>
              <select>
                <option>All Catagories</option>
                <option>All Catagories</option>
                <option>All Catagories</option>
              </select>
              <DownArrowIcon />
            </div>
            <div className={Classes.selectGroup}>
              <select>
                <option>All types</option>
              </select>
              <DownArrowIcon />
            </div>
            <div className={Classes.selectGroup}>
              <select>
                <option>All levels</option>
              </select>
              <DownArrowIcon />
            </div>
            <div className={`${Classes.searchInput} `}>
              <SearchIcon />
              <input
                type="text"
                placeholder="Search by programming technology or field..."
              />
            </div>
            <Button className="primary">Apply filter</Button>
          </form>
        </main>
      </section>
      {!props.job && <NoResultsFound />}

      {props.job && (
        <section>
          <SectionWrapper>
            {jobsList.map((job) => (
              <JobCard />
            ))}
          </SectionWrapper>
        </section>
      )}
    </>
  );
};

export default SearchSection;
