import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Fierbase";


const Register = () => {
  const [succes, setSucces] = useState(false);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const handelShow =(e) => {
        e.preventDefault();

    setShow(!show)
  }
  const handelSubmite = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const passwoed = e.target.password.value;

    const valaditionsPassword = /^.{6,}$/;
    const special6Length = /^(?=.*[A-Z](?=.).+$)/;
    const passwordPattern =
      /^(?=.*[!@#$%^&*()_+ -])/;


    if (!valaditionsPassword.test(passwoed)) {
      setError("Password Not 6 Chareter");
      return;
    } else if (!special6Length.test(passwoed)) {
      setError("First Cherater Uper Case ");
      return;
    } else if (passwordPattern.test(passwoed)) {
      setError(
        "Password must be at least 6 characters long and include uppercase, lowercase, and a special character"
      );
      return;
    }

    setError("");
    setSucces(false);
    createUserWithEmailAndPassword(auth, email, passwoed)
      .then((result) => {
        console.log(result.user);
        setSucces(true);
        e.target.reset();
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col gap-5">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handelSubmite}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
               <div className="  relative">
                 <input
                  name="password"

                  type={show ? 'text'  : 'password'}
                  className="input"
                  placeholder="Password"
                />
                <button onClick={handelShow} className=" top-2 right-5 absolute">
</button>
               </div>

                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
            </form>
            {succes && (
              <p className="text-green-500">Account Creat Succesfully 🎉</p>
            )}
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
