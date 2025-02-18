import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CallForAction from "../components/callForAction/CallForAction";
import CompanySpecificJobs from "../components/companies/CompanySpecificJobs";
import PageContex from "../components/UI/PageContext";
const CompanyDetail = () => {
  const { slug } = useParams(); // e.g. "hotjar"
  const [companyDetails, setCompanyDetails] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCompanyDetails = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/companies/${slug}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      // Assuming the backend returns an object with { company, jobs }
      const data = await response.json();
      setCompanyDetails(data.company);
      setJobs(data.jobs);
    } catch (error) {
      console.error("Error fetching company details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanyDetails();
  }, [slug]);

  return (
    <>
      <PageContex
        path={[
          "Companies",
          companyDetails ? companyDetails.name : "Loading...",
        ]}
      />
      <CompanySpecificJobs
        companyDetails={companyDetails}
        jobs={jobs}
        loading={loading}
      />
      <CallForAction />
    </>
  );
};

export default CompanyDetail;
