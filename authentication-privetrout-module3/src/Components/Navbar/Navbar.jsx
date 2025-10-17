import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../../context/MyContext/MyContext";

const Navbar = () => {
  const { usersa, signOutUser } = use(AuthContext);
  const handelSignOut = () => {
    signOutUser();
  };
  const link = (
    <>
      <li>
        <NavLink to="/" className="mr-4">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/loging" className="mr-4">
          Loging
        </NavLink>
      </li>
      <li>
        <NavLink to="/register" className="mr-4">
          Register
        </NavLink>
      </li>
      <li>
        <NavLink to="/store" className="mr-4">
          Store
        </NavLink>
      </li>
      <li>
        <NavLink to="/sql" className="mr-4">
          SQl
        </NavLink>
      </li>
      {usersa && (
        <>
          <li>
            <NavLink to="/producat" className="mr-4">
              Producat
            </NavLink>
          </li>
          <li>
            <NavLink to="/oders" className="mr-4">
              Orders
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{link}</ul>
      </div>
      <div className="navbar-end">
        {usersa ? (
          <button onClick={handelSignOut} className="btn">
            Sign Out
          </button>
        ) : (
          <Link className="btn" to="/loging">
            Loging
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
