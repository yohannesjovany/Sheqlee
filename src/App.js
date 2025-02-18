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
import CompanyProfle from "./pages/CompanyProfile";
import AccountSetting from "./pages/AccountSetting";
import EditProfile from "./pages/EditProfile";
import { VacancyDataProvider } from "./store/VacancyContext";
import Dashboard from "./pages/Dashboard";
import ProfilePreview from "./pages/ProfilePreview";
import PrivateRoute from "./components/auth/PrivateRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "./store/auth";

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
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/companyprofile",
        element: (
          <PrivateRoute>
            <CompanyProfle />
          </PrivateRoute>
        ),
      },
      {
        path: "/accountsetting",
        element: (
          <PrivateRoute>
            <AccountSetting />
          </PrivateRoute>
        ),
      },
      {
        path: "/profilepreview",
        element: (
          <PrivateRoute>
            <ProfilePreview />
          </PrivateRoute>
        ),
      },
      {
        path: "/editprofile",
        element: (
          <PrivateRoute>
            <EditProfile />
          </PrivateRoute>
        ),
      },

      {
        path: "/addvacancy",
        element: (
          <PrivateRoute>
            <AddVacancy />
          </PrivateRoute>
        ),
        children: [
          {
            index: true,
            element: <AddVacancySection />,
          },
          {
            path: "/addvacancy/reviewandpublish",
            element: <ReviewAndPublishSection />,
          },
        ],
      },
    ],
  },
]);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        // try {
        //   const res = await fetch("/api/me", {
        //     headers: {
        //       "Content-Type": "application/json",
        //       Authorization: `Bearer ${token}`,
        //     },
        //   });
        //   if (!res.ok) {
        //     throw new Error(`Error: ${res.status}`);
        //   }
        //   const data = await res.json();
        //   if (data.user) {
        //     dispatch(authActions.loginSuccess({ user: data.user, token }));
        //   }
        // } catch (err) {
        //   console.error("Error fetching user data:", err);
        //   localStorage.removeItem("token");
        // }
        dispatch(
          authActions.loginSuccess({
            user: {
              _id: "user1",
              role: "company",
              fullname: "Miruts Yifter", // Full Name
              email: "miruts@gmail.cm", // Must be unique
            },
            token: "akdwoufanosdiufal;kwnmdifuaqwnjefojqowevjq",
          })
        );
      }
    };

    fetchUser();
  }, [dispatch]);

  return (
    <VacancyDataProvider>
      <RouterProvider router={router} />
    </VacancyDataProvider>
  );
}

export default App;
