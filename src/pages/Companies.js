import ListOfCompanies from "../components/companies/ListOfCompanies";
import PageContex from "../components/UI/PageContext";

const Companies = () => {
  return (
    <>
      <PageContex path={["Companies"]} />
      <ListOfCompanies />
    </>
  );
};

export default Companies;
