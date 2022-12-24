import { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
const CommonPage = ({auth}) => {
  return auth.token ? <Navigate to="/dashboard" /> : <Outlet />;
};

export default CommonPage;
