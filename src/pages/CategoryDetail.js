import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CallForAction from "../components/callForAction/CallForAction";
import CategorySepecificJobs from "../components/Categories/CategorySepecificJobs";
import PageContex from "../components/UI/PageContext";
import Pagination from "../components/UI/Pagination";

const CategoryDetail = () => {
  const { id } = useParams(); // e.g. "uiux-product-design"
  const [categoryDetails, setCategoryDetails] = useState(null);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalItems, setTotalItems] = useState(40);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchCategoryDetails = async () => {
    setLoading(true);
    try {
      const query = new URLSearchParams({
        page: currentPage,
        limit: itemsPerPage,
      });
      const response = await fetch(`/api/categories/${id}?${query.toString()}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      setCategoryDetails(data.category);
      setJobs(data.jobs);
      setTotalItems(data.totalItems);
    } catch (error) {
      console.error("Error fetching category details:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCategoryDetails();
  }, [id, currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <PageContex
        path={[
          "Categories",
          categoryDetails ? categoryDetails.name : "Loading...",
        ]}
      />
      <CategorySepecificJobs
        category={categoryDetails}
        jobs={jobs}
        loading={loading}
      />
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

export default CategoryDetail;
