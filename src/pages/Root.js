import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import MainNavigation from "../components/MainNaivagion/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
