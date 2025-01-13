import ClientsStat from "../components/clients/ClientsStat";
import PageContex from "../components/UI/PageContext";
import TrustedBy from "../components/UI/TrustedBy";

const Clients = () => {
  return (
    <>
      <PageContex path={["Clients"]} />
      <ClientsStat />
      <TrustedBy />
    </>
  );
};

export default Clients;
