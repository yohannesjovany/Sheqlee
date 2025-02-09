import CallForAction from "../components/callForAction/CallForAction";
import FAQSection from "../components/FAQ/FAQSection";
import PageContex from "../components/UI/PageContext";
import Pagination from "../components/UI/Pagination";

const FAQ = () => {
  const handlePageChange = () => {
    return null;
  };
  return (
    <>
      <PageContex path={["FAQ"]} />
      <FAQSection />
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

export default FAQ;
