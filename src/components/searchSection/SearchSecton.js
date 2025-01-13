import Button from "../UI/Button";
import Classes from "./SearchSection.module.css";
import downArrowIcon from "../../assets/icons/Icon material-keyboard-arrow-down (2).svg";
import searchIcon from "../../assets/icons/Icon metro-search.svg";
import SectionWrapper from "../UI/SectionWrapper";
import JobCard from "../jobs/JobCard";

const jobsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8];

const SearchSection = () => {
  return (
    <>
      <section className={Classes.searchSection}>
        <div>
          <h1>All Job Posts</h1>
          <p>
            Browse the latest jobs you can take up right now Use <br /> filters
            to find the best jobs for your skillset.
          </p>
        </div>
        <div>
          <form className={Classes.filterForm}>
            <div className={`${Classes.inputGroup} ${Classes.categories} `}>
              <select className={Classes.selectBox}>
                <option>All Catagories</option>
                <option>All Catagories</option>
                <option>All Catagories</option>
              </select>
              <div className={Classes.slectIcon}>
                <img src={downArrowIcon} alt="down-arrow" />
              </div>
            </div>
            <div className={Classes.inputGroup}>
              <select className={Classes.selectBox}>
                <option>All types</option>
              </select>
              <div className={Classes.slectIcon}>
                <img src={downArrowIcon} alt="down-arrow" />
              </div>
            </div>
            <div className={Classes.inputGroup}>
              <select className={Classes.selectBox}>
                <option>All levels</option>
              </select>
              <div className={Classes.slectIcon}>
                <img src={downArrowIcon} alt="down-arrow" />
              </div>
            </div>
            <div className={`${Classes.inputGroup} ${Classes.searchInput} `}>
              <div className={Classes.searchIcon}>
                <img src={searchIcon} alt="search icon" />
              </div>
              <input
                type="text"
                placeholder="Search by programming technology or field..."
              />
            </div>
            <Button className="primary">Apply filter</Button>
          </form>
        </div>
      </section>
      <section>
        <SectionWrapper>
          {jobsList.map((job) => (
            <JobCard />
          ))}
        </SectionWrapper>
      </section>
    </>
  );
};

export default SearchSection;
