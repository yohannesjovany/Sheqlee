import CallForAction from "../components/callForAction/CallForAction";
import CompanySpecificJobs from "../components/companies/CompanySpecificJobs";
import PageContex from "../components/UI/PageContext";

const CompanyDetail = () => {
  return (
    <>
      <PageContex path={["Companies", "Hotjar"]} />
      <CompanySpecificJobs />
      <CallForAction />
    </>
  );
};

export default CompanyDetail;
