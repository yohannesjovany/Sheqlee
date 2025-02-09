import CallForAction from "../components/callForAction/CallForAction";
import TagSpecificJos from "../components/tags/TagSpecificJobs";
import PageContex from "../components/UI/PageContext";
import Pagination from "../components/UI/Pagination";

const TagDetails = () => {
  const handlePageChange = () => {
    return null;
  };

  return (
    <>
      <PageContex path={["Tags", "JavaScript"]} />
      <TagSpecificJos />
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

export default TagDetails;
