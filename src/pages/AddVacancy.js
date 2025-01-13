import { Outlet } from "react-router-dom";
import AddVacancySection from "../components/jobs/AddVacancySection";
import PageContex from "../components/UI/PageContext";
const AddVacancy = () => {
  return (
    <>
      <PageContex path={["Vacancy"]} />
      <Outlet />
    </>
  );
};

export default AddVacancy;
