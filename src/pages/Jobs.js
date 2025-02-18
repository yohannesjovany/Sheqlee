import { useEffect, useState } from "react";

import CallForAction from "../components/callForAction/CallForAction";
import SearchSection from "../components/searchSection/SearchSecton";
import PageContex from "../components/UI/PageContext";
import Pagination from "../components/UI/Pagination";

const Jobs = () => {
  const [filters, setFilters] = useState({
    searchTerm: "",
    category: "",
    type: "",
    level: "",
  });
  const [jobs, setJobs] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3;

  const fetchJobs = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams({
        searchTerm: filters.searchTerm,
        category: filters.category,
        type: filters.type,
        level: filters.level,
        page: currentPage,
        limit: itemsPerPage,
      });
      const response = await fetch(`/api/jobs?${query.toString()}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      setJobs(data.jobs);
      setTotalItems(data.totalItems);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, [filters, currentPage]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);

    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <PageContex path={["All Jobs"]} />
      <SearchSection
        job={jobs}
        loading={loading}
        filters={filters}
        onFilterChange={handleFilterChange}
      />
      {jobs && (
        <Pagination
          // totalItems={totalItems}
          //   itemsPerPage={itemsPerPage}
          //   currentPage={currentPage}
          totalItems={139}
          itemsPerPage={3}
          currentPage={10}
          onPageChange={handlePageChange}
        />
      )}
      <CallForAction />
    </>
  );
};
export default Jobs;
