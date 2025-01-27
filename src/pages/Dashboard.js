import { useState } from "react";

import { useSelector } from "react-redux";

import ClientDashboardSection from "../components/clients/ClientDashboardSection";
import PageContex from "../components/UI/PageContext";
import FreelancerDashboard from "../components/searchSection/FreelanerDashboard";
import Pagination from "../components/UI/Pagination";

const Dashboard = () => {
  const [job, setJob] = useState(true);
  const auth = useSelector((state) => state.auth);
  return (
    <>
      <PageContex path={["Dashboard"]} />
      {auth.user.role === "company" && <ClientDashboardSection job={job} />}
      {auth.user.role === "freelancer" && (
        <>
          <FreelancerDashboard job={job} />
          {job && (
            <Pagination
              totalItems={139}
              itemsPerPage={3}
              currentPage={10}
              onPageChange="skip"
            />
          )}
        </>
      )}
    </>
  );
};

export default Dashboard;
