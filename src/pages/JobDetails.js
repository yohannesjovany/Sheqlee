import CallForAction from "../components/callForAction/CallForAction";
import JobDetailsSection from "../components/jobs/JobDetailsSection";
import SearchSection from "../components/searchSection/SearchSecton";
import PageContex from "../components/UI/PageContext";

const JobDetails = () => {
  return (
    <>
      <PageContex path={["Design & Art", "Graphic Design Specialist"]} />
      <JobDetailsSection />
      <CallForAction />
    </>
  );
};
export default JobDetails;
