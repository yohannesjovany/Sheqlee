import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import MainNavigation from "../components/MainNaivagion/MainNavigation";
import ScrollToTop from "../components/UI/ScrollToTop";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
