import CallForAction from "../components/callForAction/CallForAction";
import PageContex from "../components/UI/PageContext";
import ResetPasswordSection from "../components/auth/ResetPasswordSection";

const ResetPassword = () => {
  return (
    <>
      <PageContex path={["Reset Password"]} />
      <ResetPasswordSection />
      <CallForAction />
    </>
  );
};

export default ResetPassword;
