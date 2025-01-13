import CompanySignUpSection from "../components/auth/CompanySignUpSection";
import CallForAction from "../components/callForAction/CallForAction";
import PageContex from "../components/UI/PageContext";

const CompanySignUp = () => {
  return (
    <>
      <PageContex path={["Company Signup"]} />
      <CompanySignUpSection />
      <CallForAction />
    </>
  );
};
export default CompanySignUp;
