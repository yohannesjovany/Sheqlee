import { useState, useEffect } from "react";
import ListOfCompanies from "../components/companies/ListOfCompanies";
import PageContex from "../components/UI/PageContext";
import Pagination from "../components/UI/Pagination";

const Companies = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 896);
  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalItems, setTotalItems] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 896);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const fetchCompanies = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams({
        page: currentPage,
        limit: itemsPerPage,
      });
      const response = await fetch(`/api/companies?${query.toString()}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setCompanies(data.companies || []);
      setTotalItems(data.totalItems || 0);
    } catch (error) {
      console.error("Error fetching companies:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCompanies();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <PageContex path={["Companies"]} />
      <ListOfCompanies companies={companies} loading={loading} />
      {isMobile && (
        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default Companies;
