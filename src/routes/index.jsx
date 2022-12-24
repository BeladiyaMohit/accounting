import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "../pages/errorPage";
import ForgotPassword from "../pages/forgotPassword";
import LogIn from "../pages/logIn";
import SignUp from "../Pages/SignUp";

export const Routers = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        {/* {/* <Route index element={<Home />} /> */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<LogIn />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        {/* <Route path="contact" element={<Contact />} /> */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};
