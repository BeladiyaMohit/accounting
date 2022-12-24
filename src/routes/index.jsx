import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/errorPage";
import ForgotPasswordPage from "../pages/forgotPasswordPage";
import LogInPage from "../pages/logInPage";
import SignUpPage from "../pages/signUpPage";
import WelComePage from "../pages/welcomePage";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WelComePage />} />
        {/* {/* <Route index element={<Home />} /> */}
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/forgotpassword" element={<ForgotPasswordPage />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
