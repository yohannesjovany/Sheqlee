import CallForAction from "../components/callForAction/CallForAction";
import CategoriesList from "../components/Categories/CategoriesList";
import PageContex from "../components/UI/PageContext";
import Pagination from "../components/UI/Pagination";

const Categories = () => {
  const handlePageCange = () => {
    return null;
  };
  return (
    <>
      <PageContex path={["Categories"]} />
      <CategoriesList />
      <Pagination
        totalItems={139}
        itemsPerPage={3}
        currentPage={10}
        onPageChange={handlePageCange}
      />
      <CallForAction />
    </>
  );
};

export default Categories;
