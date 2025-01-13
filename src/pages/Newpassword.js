import NewPasswordSection from "../components/auth/NewPasswordSection";
import CallForAction from "../components/callForAction/CallForAction";
import PageContex from "../components/UI/PageContext";

const Newpassword = () => {
  return (
    <>
      <PageContex path={["Reset Password", "Code", "New Password"]} />
      <NewPasswordSection />
      <CallForAction />
    </>
  );
};
export default Newpassword;
