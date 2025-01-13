import CompanyProfileSection from "../components/companies/CompanyProfileSection";
import PageContex from "../components/UI/PageContext";

const CompanyProfle = () => {
  return (
    <>
      <PageContex path={["Profile"]} />
      <CompanyProfileSection />
    </>
  );
};

export default CompanyProfle;
