import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "./Components/fierbase";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const [error, setError] = useState("");
  const [succes, setSucces] = useState(false);
  const [show, setShow] = useState(false);

  const handelShow = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  const handelOnsubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log("Submite", email, password);

    setError("");
    setSucces(false);

    const valaditionsPassword = /^.{6,}$/;
    if (!valaditionsPassword.test(password)) {
      setError("Tiping 6 Chreater");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        setSucces(true);
        e.target.reset();
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handelOnsubmit}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <div className="relative ">
                  <input
                    name="password"
                    type={show ? "text" : "password"}
                    className="input"
                    placeholder="Password"
                  />
                  <button onClick={handelShow}>
                    {" "}
                    {show ? (
                      <FaEye className=" left-60 top-4 absolute" />
                    ) : (
                      <FaEyeSlash className=" left-60 top-4 absolute" />
                    )}
                  </button>
                </div>

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
            {succes && (
              <p className="text-green-500">Account Creat SuccesFully</p>
            )}
            {error && <p className="text-red-600 ">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
