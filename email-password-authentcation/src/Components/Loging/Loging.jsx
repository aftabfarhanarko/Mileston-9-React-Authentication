import { signInWithEmailAndPassword } from "firebase/auth/web-extension";
import React, { useRef, useState } from "react";
import { Link } from "react-router";
import { auth } from "../Fierbase";
import { sendPasswordResetEmail } from "firebase/auth";

const Loging = () => {
  const [error , setError] = useState("");
  const [succes , setSucces] = useState(false);
  const useRefeasar = useRef();

  const haldelLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value
    const passwoed = e.target.password.value
    console.log(email, passwoed);

    setError("");
    setSucces(false);
    signInWithEmailAndPassword(auth, email,passwoed)
     .then(result => {
      console.log(result.user)
      setSucces(true);
      if(!result.user.emailVerified){
        alert("Please Verify Your Email")

      }
     }).catch(err => {
      console.log(err.message);
      setError(err.message);
     })
    
  }
  const handelForget = () => { 
    const email =  useRefeasar.current.value;
    sendPasswordResetEmail(auth, email)
     .then(() => {
      alert("Plese SetNew Password");
     }).catch(eee => {
      
       console.log("Forget Password",eee);
      })
  }
  return (
    <div className="card bg-base-100 w-full m-auto max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
     <form onSubmit={haldelLogin}>
         <fieldset className="fieldset">
          <h1 className="text-2xl font-bold">Login now!</h1>

          <label className="label">Email</label>
          <input ref={useRefeasar} name="email" type="email" className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input name="password" type="password" className="input" placeholder="Password" />
          <div >
            <a onClick={handelForget} className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
          {
            succes ? <p className="text-green-500">Your Account Loging Successfully</p> : ""
          }
          {
            error && <p className="text-red-500">{error}</p> 
          }
        </fieldset>
        <p>
           New to Our Website ? 
          <Link className="text-blue-500 font-semibold underline" to="/registion">
             Register Now
          </Link>
        </p>
     </form>
      </div>
    </div>
  );
};

export default Loging;
