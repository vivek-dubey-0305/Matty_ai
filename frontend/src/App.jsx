import React, { Suspense, lazy, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { useTheme } from "./context/ThemeContext";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

// ⏳ Lazy loaded imports
const Home = lazy(() => import("./pages/PublicPages/Home"));
const Layout = lazy(() => import("./components/Layout/Layout"));
const Register = lazy(() => import("./pages/AuthPages/Register"));
const ForgotPassword = lazy(() => import("./pages/AuthPages/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/AuthPages/ResetPassword"));
const Verification = lazy(() => import("./pages/AuthPages/Verification"));
const Dashboard = lazy(() => import("./pages/AuthPages/Dashboard"));
const About = lazy(() => import("./pages/PublicPages/About"));
const Contact = lazy(() => import("./pages/PublicPages/Contact"));
const AuthPageLayout = lazy(() => import("./components/Layout/authPageLayout"));

import { useDispatch, useSelector } from "react-redux";

import Loader from "./components/Loader/Loader";
import Login from "./pages/AuthPages/Login";
import TermsAndConditions from "./pages/PublicPages/TermsAndConditions";
import Sitemap from "./pages/PublicPages/SiteMap";
import FAQ from "./pages/PublicPages/FAQ";
import CookieConsent from "./pages/PublicPages/CookieConsent";
import PrivacyPolicy from "./pages/PublicPages/PrivacyPolicy";
// ❌ REMOVED DUPLICATE IMPORTS - About, Contact, Home are already lazy loaded above

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUser = async () => {
      console.log("User will be fetched here -> Globally user");
    };

    fetchUser();
  }, [dispatch]);

  const { theme, setTheme } = useTheme();

  const isAuthenticated = false;
  
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen">
          <div className="animate-spin w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full"></div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<AuthPageLayout />}>
          <Route path="/signup" element={<Register />} />
          {isAuthenticated ? (
            <>
              <Route
                path="/dashboard/*"
                element={
                  <ProtectedRoute isAuthenticated={isAuthenticated}>
                    <Dashboard />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
            </>
          ) : (
            <Route path="/login" element={<Login />} />
          )}
        </Route>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home isAuthenticated={isAuthenticated} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/password/reset/:token" element={<ResetPassword />} />
          <Route path="/verify-otp" element={<Verification />} />
          <Route path="/terms" element={<TermsAndConditions />} />
          <Route path="/map" element={<Sitemap />} />
          <Route path="/policy" element={<PrivacyPolicy />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/cookie" element={<CookieConsent />} />
        </Route>

        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </Suspense>
  );
};

export default App;