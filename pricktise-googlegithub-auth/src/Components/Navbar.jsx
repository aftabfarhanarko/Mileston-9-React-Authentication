import React from "react";
import "../index.css";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "./authorigetions";


const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Navbar = () => {
  
  const handelGoogles = () => {
    console.log("Button CLicked");
    signInWithPopup(auth, googleProvider)
    .then(result => {
      console.log(result.user);
    }).catch(error => console.log(error));
  }

  const handelGitHub = () => {
    console.log('Provied Buttons');
    signInWithPopup(auth, githubProvider)
    .then(results => {
      console.log(results.user)
    }).catch(error => console.log(error));
  }

  return (
    <div className="">
      <div className="navbar bg-white shadow-sm text-black w-full">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
          <button onClick={handelGoogles} className="btn bg-amber-400">
             Loging Google
          </button>
          <button onClick={handelGitHub} className="btn btn-active btn-secondary">Loging GitHub</button>

            {/* <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content  rounded-box z-1 mt-3 w-52 p-2 shadow bg-white"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
