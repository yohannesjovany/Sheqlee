import LoginSection from "../components/auth/LoginSection";
import CallForAction from "../components/callForAction/CallForAction";
import PageContex from "../components/UI/PageContext";

const Login = () => {
  return (
    <>
      <PageContex path={["Login"]} />
      <LoginSection />
      <CallForAction />
    </>
  );
};

export default Login;
