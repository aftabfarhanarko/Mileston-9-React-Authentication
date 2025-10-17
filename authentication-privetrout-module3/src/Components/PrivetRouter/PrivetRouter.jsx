import React, { use } from "react";
import { AuthContext } from "../../context/MyContext/MyContext";
import { Navigate, useLocation } from "react-router";

const PrivetRouter = ({ children }) => {
  const { usersa, loding } = use(AuthContext);
    const useLocationssa = useLocation();
    console.log(useLocationssa)

  if (loding) {
    return <span className="loading loading-spinner text-secondary"></span>;
  }

  if (usersa) {
    return children;
  }
  return <Navigate state={useLocationssa?.pathname} to="/loging"></Navigate>;
};

export default PrivetRouter;
