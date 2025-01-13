import ProfessionalSignupSection from "../components/auth/ProfessionalSignupSection";
import CallForAction from "../components/callForAction/CallForAction";
import PageContex from "../components/UI/PageContext";

const ProfessionalSignup = () => {
  return (
    <>
      <PageContex path={["Professional Signup"]} />
      <ProfessionalSignupSection />

      <CallForAction />
    </>
  );
};

export default ProfessionalSignup;
