import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Fierbase";

const NewLoging = () => {
    const [error , setError] = useState("");
    const [succes , setSucces] = useState(false);

    const handelSubmites = (e) => {
           e.preventDefault();
       console.log('Clicked Buttons');
       const email = e.target.email.value;
       const password = e.target.password.value;
       console.log(email,password);
       setError("")
       setSucces(false)
       createUserWithEmailAndPassword(auth, email, password)
       .then(result => {
        console.log(result.user);
        setSucces(true);
        e.target.reset()
       }).catch(err => {
        console.log(err);
        setError(err.message);
       })
       
    }
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
           <form onSubmit={handelSubmites}>
             <fieldset className="fieldset">
              <label className="label">Email</label>
              <input required name="email" type="email" className="input" placeholder="Email" />
              <label className="label">Password</label>
              <input required minLength="6" name="password" type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
           </form>
           {
            succes && <p className="text-green-500">Account Creat Successfly </p>
           }
           {
            error && <p className="text-red-500">{error}</p>
           }
          </div>
        </div>
      </div>
    </div>
  );
};



export default NewLoging;