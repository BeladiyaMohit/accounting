import React from "react";
import { Route, Routes } from "react-router-dom";
import DashboardPage from "../pages/dashboardPage";
import ErrorPage from "../pages/errorPage";
import ForgotPasswordPage from "../pages/forgotPasswordPage";
import LogInPage from "../pages/logInPage";
import SignUpPage from "../pages/signUpPage";
import WelComePage from "../pages/welcomePage";
import CommonPage from "./commonPage";
import PrivateRoutes from "./privateRoute";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route element={<CommonPage />}>
          <Route path="/" element={<WelComePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        </Route>
        <Route element={<PrivateRoutes />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </>
  );
};
