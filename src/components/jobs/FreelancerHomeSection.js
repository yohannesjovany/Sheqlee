import Classes from "./FreelancerHomeSection.module.css";

import TagsSection from "../tags/TagsSection";
import SectionWrapper from "../UI/SectionWrapper";
import JobCard from "./JobCard";
import Button from "../UI/Button";

/// to be replaced with real jobs
const jobs = [1, 2, 3, 4, 5, 6];
const moreJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3];
const FreelancerHomeSection = () => {
  return (
    <div className={Classes.mainContainer}>
      <SectionWrapper
        withHeader={true}
        title="Latest job posts"
        info="745+ more jobs"
      >
        {jobs.map((job) => (
          <JobCard loading={false} />
        ))}
      </SectionWrapper>
      <TagsSection />
      <SectionWrapper withHeader={false}>
        {moreJobs.map((job) => (
          <JobCard loading={false} />
        ))}
      </SectionWrapper>
      <div className={Classes.moreButton}>
        <Button className="primary">View all job posts</Button>
      </div>
    </div>
  );
};
export default FreelancerHomeSection;
