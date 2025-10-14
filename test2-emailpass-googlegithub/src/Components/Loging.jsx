import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useRef } from "react";
import { NavLink } from "react-router";
import { auth } from "./fierbase";
import { sendPasswordResetEmail } from "firebase/auth";

const Loging = () => {
  const useReferencs = useRef();


  const handelLoging = (e) => {
    e.preventDefault();
      const emailds = e.target.email.value;
    const pass = e.target.password.value;
    console.log(emailds, pass);
    
    signInWithEmailAndPassword(auth, emailds, pass)
    .then(result => {
      console.log(result.user);
    
    }).catch(er => {
      console.log(er.message);
    })
    
  }
  const handelForget = () => {
    const emails = useReferencs.current.value;
  sendPasswordResetEmail(auth, emails)
      .then(() => {
        alert("Password Reset Now");
      })
  }
  return (
    <div className="flex max-w-[900px] mx-auto">
      <form onSubmit={handelLoging} className="">
        <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
          <legend className="fieldset-legend">Login</legend>

          <label  className="label">Email</label>
          <input ref={useReferencs} name="email" type="email" className="input" placeholder="Email" />

          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />
          <div>
            <a onClick={handelForget} className="link link-hover">Forgot password?</a>
          </div>

          <button className="btn btn-neutral mt-4">Login</button>
            <p>
            Account Creat Now ?
            <NavLink to="/register" className="text-blue-500 underline">
                Register
            </NavLink>
            </p>
        </fieldset>
      </form>
    </div>
  );
};

export default Loging;
