import SectionWrapper from "../UI/SectionWrapper";
import JobCard from "./JobCard";

/// to be replaced with real jobs
const jobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const JobPostSection = () => {
  return (
    <div style={{ marginTop: "3rem" }}>
      <SectionWrapper
        withHeader={false}
        title="Latest job posts"
        info="745+ more jobs"
        loading={false}
      >
        {jobs.map((job) => (
          <JobCard loading={false} />
        ))}
      </SectionWrapper>
    </div>
  );
};
export default JobPostSection;
