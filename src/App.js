import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/Root";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import JobDetails from "./pages/JobDetails";
import Categories from "./pages/Categories";
import CategoryDetail from "./pages/CategoryDetail";
import Tags from "./pages/Tags";
import TagDetails from "./pages/TagDetails";
import Clients from "./pages/Clients";
import Companies from "./pages/Companies";
import CompanyDetail from "./pages/CompanyDetail";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";
import CompanySignUp from "./pages/CompanySignUp";
import ProfessionalSignup from "./pages/ProfessionalSignup";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Newpassword from "./pages/Newpassword";
import ErrorPage from "./pages/Error";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import CookiePolicy from "./pages/CookiePolicy";
import TermsAndConditions from "./pages/TermsandConditions";
import AddVacancy from "./pages/AddVacancy";
import AddVacancySection from "./components/jobs/AddVacancySection";
import ReviewAndPublishSection from "./components/jobs/ReviewAndPublishSection";
import ClientDashboard from "./pages/ClientDashboard";
import CompanyProfle from "./pages/CompanyProfile";
import AccountSetting from "./pages/AccountSetting";
import EditProfile from "./pages/EditProfile";
import { VacancyDataProvider } from "./store/VacancyContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/jobs",
        element: <Jobs />,
      },
      {
        path: "/jobs/:jobId",
        element: <JobDetails />,
      },
      {
        path: "/Categories",
        element: <Categories />,
      },
      {
        path: "/categories/:categoryId",
        element: <CategoryDetail />,
      },
      {
        path: "/tags",
        element: <Tags />,
      },
      { path: "/tags/:tagId", element: <TagDetails /> },
      { path: "/clients", element: <Clients /> },
      { path: "/Companies", element: <Companies /> },
      { path: "/Companies/:companyId", element: <CompanyDetail /> },
      { path: "/contact", element: <Contact /> },
      { path: "/faq", element: <FAQ /> },
      { path: "/companysignup", element: <CompanySignUp /> },
      { path: "/professionalsignup", element: <ProfessionalSignup /> },
      { path: "/login", element: <Login /> },
      { path: "/resetpassword", element: <ResetPassword /> },
      { path: "/resetpassword/code/newpassword", element: <Newpassword /> },
      { path: "/privacypolicy", element: <PrivacyPolicy /> },
      { path: "/cookiepolicy", element: <CookiePolicy /> },
      { path: "/termsandconditions", element: <TermsAndConditions /> },
      { path: "/clientdashboard", element: <ClientDashboard /> },
      { path: "/companyprofile", element: <CompanyProfle /> },
      { path: "/accountsetting", element: <AccountSetting /> },
      { path: "/editprofile", element: <EditProfile /> },

      {
        path: "/addvacancy",
        element: (
          <VacancyDataProvider>
            <AddVacancy />
          </VacancyDataProvider>
        ),
        children: [
          {
            index: true,
            element: (
              <VacancyDataProvider>
                {" "}
                <AddVacancySection />
              </VacancyDataProvider>
            ),
          },
          {
            path: "/addvacancy/reviewandpublish",
            element: (
              <VacancyDataProvider>
                <ReviewAndPublishSection />
              </VacancyDataProvider>
            ),
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
