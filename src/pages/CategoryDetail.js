import CallForAction from "../components/callForAction/CallForAction";
import CategorySepecificJobs from "../components/Categories/CategorySepecificJobs";
import PageContex from "../components/UI/PageContext";
import Pagination from "../components/UI/Pagination";

const CategoryDetail = () => {
  const handlePageChange = () => {
    return null;
  };
  return (
    <>
      <PageContex path={["Categories", "UI/UX & Product Design"]} />
      <CategorySepecificJobs />
      <Pagination
        totalItems={139}
        itemsPerPage={3}
        currentPage={10}
        onPageChange={handlePageChange}
      />
      <CallForAction />
    </>
  );
};
export default CategoryDetail;
