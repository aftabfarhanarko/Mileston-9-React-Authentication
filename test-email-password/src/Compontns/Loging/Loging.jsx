import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router";
import { auth } from "../fierbase/fierbase";
import { sendPasswordResetEmail } from "firebase/auth";

const Loging = () => {
  const [tog, setTog] = useState(false);
  const [error, setError] = useState("");
  const [suess, setSuecc] = useState(false);
  const [logingUser, setLogingUser] = useState("");

  const userReferencs = useRef();

  const handelLoging = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    console.log(email, pass);

    setError("");
    setSuecc(false);
    signInWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        console.log(result.user);
        setLogingUser(result.user);
        setSuecc(true);
        e.target.reset();
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };
 
  const handelForgetPassword = () => {
    const restet = userReferencs.current.value;
    console.log(restet)
    sendPasswordResetEmail(auth, restet)
    .then(() => {
      alert("Changes Password");
    }).catch(errs => {
      console.log(errs.message);
    })

  }

  const togles = () => {
    setTog(!tog);
  };
  return (
   <div>
     <div className="card bg-base-100 w-full m-auto mt-15 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handelLoging}>
          <h1 className="text-5xl font-bold">Loging now!</h1>
          <fieldset className="fieldset">
            {/* Email */}
            <label className="label">Email</label>
            <input
            ref={userReferencs}
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <div className="relative ">
              <input
                name="password"
                type={tog ? "text" : "password"}
                className="input"
                placeholder="Password"
              />
              <button onClick={togles} className=" top-3 right-7 absolute">
                {tog ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>
            <div>
              <a onClick={handelForgetPassword} className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Loging</button>
            {error && <p className="text-red-500 text-[16px]">{error} </p>}
            {suess && <p className="text-green-500 text-[16px]">Succesfully Loging </p>}
          </fieldset>
          <p>
            Creat a Account? Please
            <NavLink className="text-blue-500 underline" to="/register">
              Register
            </NavLink>
          </p>
        </form>
      </div>
    </div>

{
  suess &&   <div className="bg-gray-400 border ">
      <h1>{logingUser.displayName}</h1>
      <p>{logingUser.email}</p>
      <img className="w-[140px] rounded-full" src={logingUser.photoURL} ></img>

    </div>
}
   
   </div>
  );
};

export default Loging;
