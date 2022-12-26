import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import CommonPage from "./commonPage";
const PrivateRoutes = () => {
  const [auth, setAuth] = useState({ token: false });
  useEffect(() => {
    const tokenData=JSON.parse(localStorage.getItem("Token:"))

    setAuth({token:!!tokenData?true:false})
  }, []);
  return auth.token ? <CommonPage auth={auth} /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
