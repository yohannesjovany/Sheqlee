import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CallForAction from "../components/callForAction/CallForAction";
import TagSpecificJobs from "../components/tags/TagSpecificJobs";
import PageContex from "../components/UI/PageContext";
import Pagination from "../components/UI/Pagination";

const TagDetails = () => {
  const { id } = useParams(); // e.g. "javascript"
  const [tagDetails, setTagDetails] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalItems, setTotalItems] = useState(40);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchTagDetails = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams({
        page: currentPage,
        limit: itemsPerPage,
      });
      const response = await fetch(`/api/tags/${id}?${query.toString()}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      // Assume backend returns { tag: {…}, jobs: [ … ], totalItems: number }
      setTagDetails(data.tag);
      setJobs(data.jobs);
      setTotalItems(data.totalItems);
    } catch (error) {
      console.error("Error fetching tag details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTagDetails();
  }, [id, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <PageContex
        path={["Tags", tagDetails ? tagDetails.name : "Loading..."]}
      />
      <TagSpecificJobs tagDetails={tagDetails} jobs={jobs} loading={loading} />
      <Pagination
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
      <CallForAction />
    </>
  );
};

export default TagDetails;
