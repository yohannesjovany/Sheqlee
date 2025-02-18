import { useEffect, useState } from "react";
import SectionWrapper from "../UI/SectionWrapper";
import JobCard from "./JobCard";

/// to be replaced with real jobs
const jobss = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const JobPostSection = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobs");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div style={{ marginTop: "3rem" }}>
      <SectionWrapper
        withHeader={true}
        title="Latest job posts"
        info="745+ more jobs" //{`${totalJobsCount.toLocaleString()}+ more jobs`}
        loading={loading}
      >
        {jobss.map((job) => (
          //<JobCard key={job.id || index} job={job} loading={loading} />
          <JobCard loading={loading} />
        ))}
      </SectionWrapper>
    </div>
  );
};
export default JobPostSection;
