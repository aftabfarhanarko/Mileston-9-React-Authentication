import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Link } from "react-router";
import Navbar from "./Navbar";
import { AuthContext } from "../provider/AuthContex";
import { updatePassword } from "firebase/auth";
import { auth } from "../firebase/fierbase";

const PasswordReset = () => {
  const [show, setShow] = useState(false);

  const handelsetnewpass = (e) => {
    e.preventDefault();
    const newpassword = e.target.password.value;
    const myuser = auth.currentUser;

    updatePassword(myuser, newpassword);
  };
  return (
    <div>
      <nav className="my-6 w-10/12 mx-auto">
        <Navbar></Navbar>
      </nav>
      <main className="flex justify-center items-center min-h-screen">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <h1 className="text-lg font-semibold mb-5 text-center">
              Set New Password
            </h1>
            <form onSubmit={handelsetnewpass}>
              <fieldset className="fieldset">
                <div className="relative ">
                  <label className="label font-semibold">New Password</label>
                  <input
                    type={show ? "password" : "text"}
                    className="input focus:outline-none"
                    placeholder="New password"
                    name="password"
                  />
                  <div
                    className="absolute right-7 top-8 z-10  cursor-pointer text-md"
                    onClick={() => setShow(!show)}
                  >
                    {show ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  New Password
                </button>
                <p className="font-semibold text-center mt-2">
                  Reset Youer Password Please?{" "}
                  <Link
                    className="text-red-500 hover:underline"
                    to="/auth/login"
                  >
                    Login
                  </Link>
                </p>
              </fieldset>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PasswordReset;
