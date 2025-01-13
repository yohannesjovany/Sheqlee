import SectionWrapper from "../UI/SectionWrapper";
import JobCard from "./JobCard";

/// to be replaced with real jobs
const jobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const JobPostSection = () => {
  return (
    <SectionWrapper
      withHeader={true}
      title="Latest job posts"
      info="745+ more jobs"
    >
      {jobs.map((job) => (
        <JobCard />
      ))}
    </SectionWrapper>
  );
};
export default JobPostSection;
