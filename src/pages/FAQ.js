import CallForAction from "../components/callForAction/CallForAction";
import FAQSection from "../components/FAQ/FAQSection";
import PageContex from "../components/UI/PageContext";
import Pagination from "../components/UI/Pagination";

const FAQ = () => {
  return (
    <>
      <PageContex path={["FAQ"]} />
      <FAQSection />

      <CallForAction />
    </>
  );
};

export default FAQ;
