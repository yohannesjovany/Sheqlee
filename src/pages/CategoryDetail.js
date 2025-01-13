import CallForAction from "../components/callForAction/CallForAction";
import CategorySepecificJobs from "../components/Categories/CategorySepecificJobs";
import PageContex from "../components/UI/PageContext";
import Pagination from "../components/UI/Pagination";

const CategoryDetail = () => {
  return (
    <>
      <PageContex path={["Categories", "UI/UX & Product Design"]} />
      <CategorySepecificJobs />
      <Pagination
        totalItems={139}
        itemsPerPage={3}
        currentPage={10}
        onPageChange="skip"
      />
      <CallForAction />
    </>
  );
};
export default CategoryDetail;
