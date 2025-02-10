import { useEffect, useState } from "react";
import ListOfCompanies from "../components/companies/ListOfCompanies";
import PageContex from "../components/UI/PageContext";
import Pagination from "../components/UI/Pagination";

const Companies = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 896);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 896);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePageChange = () => {
    return null;
  };
  return (
    <>
      <PageContex path={["Companies"]} />
      <ListOfCompanies />
      {isMobile && (
        <Pagination
          totalItems={139}
          itemsPerPage={3}
          currentPage={10}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default Companies;
