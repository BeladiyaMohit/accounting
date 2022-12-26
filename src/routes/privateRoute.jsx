import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import CommonPage from "./commonPage";
const PrivateRoutes = () => {
  useEffect(() => {
    const token=true
    setAuth({token})
  }, []);
  const [auth, setAuth] = useState({ token: false });
  return auth.token ? <CommonPage auth={auth} /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
