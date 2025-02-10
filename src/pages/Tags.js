import CallForAction from "../components/callForAction/CallForAction";
import AllTags from "../components/tags/AllTags";
import PageContex from "../components/UI/PageContext";
import Pagination from "../components/UI/Pagination";

const Tags = () => {
  const handlePageChange = () => {
    return null;
  };
  return (
    <>
      <PageContex path={["Tags"]} />
      <AllTags />
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

export default Tags;
