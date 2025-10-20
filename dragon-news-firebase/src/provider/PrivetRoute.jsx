import React, { useContext } from "react";
import { AuthContext } from "./AuthContex";
import { Navigate, useLocation } from "react-router";
import Loding from "../Components/Loding";

const PrivetRoute = ({ children }) => {
  const { user, loding } = useContext(AuthContext);
  const locations = useLocation();

  if (loding) {
    return <Loding></Loding>;
  }

  if (user && user?.email) {
    return children;
  } else if (!user) {
    return <Navigate state={locations.pathname} to="/auth/login"></Navigate>;
  }

  return <div></div>;
};

export default PrivetRoute;
