import { useState, useEffect } from "react";
import CallForAction from "../components/callForAction/CallForAction";
import CategoriesList from "../components/Categories/CategoriesList";
import PageContex from "../components/UI/PageContext";
import Pagination from "../components/UI/Pagination";

const Categories = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 896);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [totalItems, setTotalItems] = useState(11); //change initail state to 0

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 896);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const query = new URLSearchParams({
          page: currentPage,
          limit: itemsPerPage,
        });
        // api to be changed
        const response = await fetch(`/api/categories?${query.toString()}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data.categories || []);
        setTotalItems(data.totalItems || 0);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [currentPage]);

  const handlePageCange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <PageContex path={["Categories"]} />
      <CategoriesList categories={categories} loading={loading} />
      {isMobile && (
        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageCange}
        />
      )}
      <CallForAction />
    </>
  );
};

export default Categories;
