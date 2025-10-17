import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";

const Root = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <ToastContainer />
    </div>
  );
};

export default Root;
