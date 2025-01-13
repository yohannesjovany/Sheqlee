import CallForAction from "../components/callForAction/CallForAction";
import SearchSection from "../components/searchSection/SearchSecton";
import PageContex from "../components/UI/PageContext";
import Pagination from "../components/UI/Pagination";
import NoResultsFound from "../components/searchSection/NoResultsFound"

const Jobs = () => {
  return (
    <>
      <PageContex path={["All Jobs"]} />
      <SearchSection />
      <Pagination
        totalItems={139}
        itemsPerPage={3}
        currentPage={10}
        onPageChange="skip"
      />
      <NoResultsFound/>
      <CallForAction />
    </>
  );
};
export default Jobs;
