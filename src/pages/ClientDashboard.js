import ClientDashboardSection from "../components/clients/ClientDashboardSection";
import PageContex from "../components/UI/PageContext";

const ClientDashboard = () => {
  return (
    <>
      <PageContex path={["Dashboard"]} />
      <ClientDashboardSection />
    </>
  );
};

export default ClientDashboard;
