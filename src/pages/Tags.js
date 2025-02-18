import { useState, useEffect } from "react";
import CallForAction from "../components/callForAction/CallForAction";
import AllTags from "../components/tags/AllTags";
import PageContex from "../components/UI/PageContext";
import Pagination from "../components/UI/Pagination";

const Tags = () => {
  const [tags, setTags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalItems, setTotalItems] = useState(40);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchTags = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams({
        page: currentPage,
        limit: itemsPerPage,
      });
      const response = await fetch(`/api/tags?${query.toString()}`);
      if (!response.ok) throw new Error(`Error: ${response.status}`);
      const data = await response.json();
      setTags(data.tags || []);
      setTotalItems(data.totalItems || 0);
    } catch (error) {
      console.error("Error fetching tags:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTags();
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <PageContex path={["Tags"]} />
      <AllTags tags={tags} loading={loading} />
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

export default Tags;
