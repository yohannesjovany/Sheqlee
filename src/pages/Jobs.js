import { useState } from "react";

import CallForAction from "../components/callForAction/CallForAction";
import SearchSection from "../components/searchSection/SearchSecton";
import PageContex from "../components/UI/PageContext";
import Pagination from "../components/UI/Pagination";

const Jobs = () => {
  const [job, setJob] = useState(true);
  return (
    <>
      <PageContex path={["All Jobs"]} />
      <SearchSection job={job} />
      {job && (
        <Pagination
          totalItems={139}
          itemsPerPage={3}
          currentPage={10}
          onPageChange="skip"
        />
      )}
      <CallForAction />
    </>
  );
};
export default Jobs;
