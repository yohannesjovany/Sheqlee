import CallForAction from "../components/callForAction/CallForAction";
import CategoriesList from "../components/Categories/CategoriesList";
import PageContex from "../components/UI/PageContext";

const Categories = () => {
  return (
    <>
      <PageContex path={["Categories"]} />
      <CategoriesList />
      <CallForAction />
    </>
  );
};

export default Categories;
