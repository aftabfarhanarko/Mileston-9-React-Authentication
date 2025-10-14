import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { NavLink } from "react-router";
import { auth } from "./fierbase";

const Register = () => {
  const [err, setErr] = useState("");
  const [suecc, setSuecc] = useState(false);



  const handelSubmite = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;
    const names = e.target.name.value;
    const phots = e.target.photo.value;

    setErr("");
    setSuecc(false)
    createUserWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        console.log(result.user);
        setSuecc(true);
        const profiles = {
          displayName : names,
          photoUrl: phots,
        }
        updateProfile(result.user,profiles)
        sendEmailVerification(result.user)
        .then(() => {
          alert("Please Verify Your Email ");
        })
      })
      .catch((errors) => {
        console.log(errors.message);
        setErr(errors.message);
      });
  };
  return (
    <div className="card m-auto bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <form onSubmit={handelSubmite}>
          <h1 className="text-5xl font-bold">Register now!</h1>

          <fieldset className="fieldset">
            {/* Full Name */}
            <label className="label">Full Name</label>
            <input
              type="emae"
              name="name"
              className="input"
              placeholder="Full Name"
            />

            {/* Photo */}
            <label className="label">Photo</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="Photo Url"
            />

            {/* Enter Email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Enter Email"
            />

            <label className="label">Password</label>
            <div className="relative ">
              <input
                type="password"
                name="password"
                className="input"
                placeholder="Password"
              />
              <FaEye className=" absolute right-8 top-4" />
            </div>

            <button className="btn btn-neutral mt-4">Register</button>
            {err && <p className="text-red-500">{err}</p>}
            {suecc && <p className="text-green-500">Succesfully Account Creat</p>}
          </fieldset>
          <p>
            Allready You Have a Account ?{" "}
            <NavLink to="/loging" className="text-blue-500 underline">
              Loging
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
