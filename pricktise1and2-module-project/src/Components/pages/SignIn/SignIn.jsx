import React, { useState } from "react";
import "../../../index.css";
import { Link } from "react-router";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import {
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../../../firebase/firebase.config";
import { toast } from "react-toastify";

const googleProvider = new GoogleAuthProvider();

const SignIn = () => {
  const [show, setShow] = useState(false);
  const [current, setCurrent] = useState(null);

  const handelSingIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const pass = e.target.password.value;

    signInWithEmailAndPassword(auth, email, pass)
      .then((result) => {
        toast.success("Sign In User Succesfully");
        console.log(result.user);
        setCurrent(result.user);
      })
      .catch((err) => {
        console.log(err.code);
        if (err.code === "auth/invalid-credential") {
          toast.error(
            "This User are Not Sign Up . Please Enter Valid Email And Password"
          );
        }
      });
  };
  const handelGoogleProvider = () => {
    signInWithPopup(auth, googleProvider)
      .then((gogl) => {
        setCurrent(gogl.user);
        toast.success("Google Account Loging Success");
        console.log(gogl.user);
      })
      .catch((error) => {
        toast.error("This Account Allrodey Loging");
        console.log(error.message);
      });
  };
  const signOutsUser = () => {
    signOut(auth);
    setCurrent(null);
  };

  const forgetPass = (e) => {
    e.preventDefault();
    const email = document.querySelector('input[name="email"]').value;

    if (!email) {
      toast.error("Please enter your email first!");
      return;
    }
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Your Password Rest Code Provied Now");
      })
      .catch((er) => {
        console.log(er);
        toast.error("Not Valid Code Provied This ");
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen bg-gradient-to-br from-blue-500 via-blue-600 to-purple-500 ">
      <div className="    md:flex gap-100 max-w-[1400px] px-5 items-center">
        <div className="text-center lg:text-left max-w-[700px] text-white">
          <h1 className="text-5xl font-bold">Sing In now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>

        {current ? (
          <div className="mx-auto rounded-2xl w-full max-w-sm flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500 text-white ">
            <div className="backdrop-blur-2xl  w-full max-w-sm border border-white/30 rounded-2xl shadow-2xl p-8 ">
              <img
                className="mx-auto w-[80px] h-[80px] rounded-full"
                src={current.photoURL}
              ></img>
              <h1 className="text-xl mt-2 font-semibold text-center">
                {current.displayName}
              </h1>
              <p className="text-center mt-2 text-md">{current.email}</p>
              <button
                onClick={signOutsUser}
                type="submit"
                className="my-btn mt-5 w-4/6"
              >
                Sign Out
              </button>
            </div>
          </div>
        ) : (
          <div className="mx-auto rounded-2xl w-full max-w-sm flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-500">
            <div className="backdrop-blur-2xl  w-full max-w-sm border border-white/30 rounded-2xl shadow-2xl p-8">
              <h2 className="text-xl font-semibold text-center text-white mb-6">
                Sign In
              </h2>

              <form onSubmit={handelSingIn} className="space-y-4">
                <div>
                  <label className="block text-white text-[14px] mb-1">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-2 rounded-lg bg-white text-black   outline-none border border-white/30 focus:border-white/80"
                  />
                </div>

                <div className="relative ">
                  <label className="block text-white text-[14px]  mb-2">
                    Password
                  </label>
                  <input
                    name="password"
                    type={show ? "text" : "password"}
                    placeholder="Password"
                    className="w-full px-4 py-2 rounded-lg bg-white text-black  outline-none border border-white/30 focus:border-purple/80"
                  />
                  <div
                    onClick={() => setShow(!show)}
                    className="absolute right-4 top-10 cursor-pointer "
                  >
                    {show ? <FaEyeSlash /> : <FaEye />}
                  </div>
                </div>

                <div
                  onClick={forgetPass}
                  className="flex justify-left text-[12px] -mt-2"
                >
                  <a href="#" className="text-white/70 hover:text-white">
                    Forgot password?
                  </a>
                </div>

                <button type="submit" className="my-btn">
                  Login
                </button>
              </form>

              <div className="flex items-center justify-center mt-6">
                <div className="border-t border-white/30 w-1/3"></div>
                <span className="text-white/70 px-3 text-sm">or</span>
                <div className="border-t border-white/30 w-1/3"></div>
              </div>

              <button
                onClick={handelGoogleProvider}
                className=" cursor-pointer mt-4 w-full bg-white text-gray-800 py-2 rounded-lg flex items-center justify-center gap-2 font-semibold hover:bg-gray-100 transition"
              >
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google"
                  className="w-5 h-5"
                />
                Sing In with Google
              </button>

              <p className="text-center text-white/80 mt-6 text-sm">
                Don’t have an account?{" "}
                <Link
                  to="/signup"
                  className="text-green-500 font-semibold underline"
                >
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignIn;
