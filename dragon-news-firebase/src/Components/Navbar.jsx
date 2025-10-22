import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import usert from "../assets/user.png";
import { AuthContext } from "../provider/AuthContex";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

const Navbar = () => {
  const { user, usersignOuts, loding } = useContext(AuthContext);

  const signOutUser = () => {
    usersignOuts();
    toast.success("LogOut Success");
  };
  return (
    <div className="flex  items-center justify-between">
      <div className="">
        {/* {user.email} */}
       <p className="text-xs text-red-500"> {user && user.email}</p>
      </div>
      <div className="font-medium text-accent">
        <NavLink className="mr-3" to="/">
          Home
        </NavLink>
        <NavLink className="mr-3" to="/about">
          About
        </NavLink>
        <NavLink className="mr-3" to="/career">
          Career
        </NavLink>
      </div>
      <div className="flex gap-3 items-center">
        {loding ? (
          <ClipLoader
            color="#6bb750"
            cssOverride={{}}
            loading
            size={23}
            speedMultiplier={0}
          />
        ) : user ? (
          <img
            className="w-[45px] h-[45px] rounded-full"
            src={user.photoURL}
          ></img>
        ) : (
          <img src={usert}></img>
        )}

        {user ? (
          <div className="flex flex-col">
            <button onClick={signOutUser} className="btn btn-primary px-10 ">
              LogOut
            </button>
          </div>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10 ">
            {" "}
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
