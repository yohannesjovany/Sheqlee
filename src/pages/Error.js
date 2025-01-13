import CallForAction from "../components/callForAction/CallForAction";
import PageContex from "../components/UI/PageContext";
import { ReactComponent as Error } from "../assets/icons/error.svg";
import MainNavigation from "../components/MainNaivagion/MainNavigation";
import Footer from "../components/footer/Footer";
import Classes from "./Error.module.css";
const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <PageContex path={["Page Not Found"]} />
      <section className={Classes.errorSection}>
        <Error />
        <p>404 | PAGE NOT FOUND</p>
      </section>
      <CallForAction />
      <Footer />
    </>
  );
};

export default ErrorPage;
