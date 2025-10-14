import {
  createUserWithEmailAndPassword,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendEmailVerification,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { NavLink } from "react-router";
import { auth } from "../fierbase/fierbase";

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const Regster = () => {
  const [error, setError] = useState("");
  const [suess, setSuecc] = useState(false);
  const [tog, setTog] = useState(false);

  const handelSubmite = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const photes = e.target.photo.value;
    const emails = e.target.email.value;
    const passwords = e.target.password.value;
    const cheacsaked = e.target.checked.checked;
    console.log(cheacsaked);

    const rule =
      /^(?=.{7,}$)(?=.*[^A-Za-z0-9])[A-Z](?:[a-z0-9]|[^A-Za-z0-9])+$/;

    const emailValideations = /^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    setError("");
    setSuecc(false);

    if (!emailValideations.test(emails)) {
      setError("Please Enter a Valid Email Templeat");
      return;
    }
    if (!rule.test(passwords)) {
      setError("Please Enter 7 Degiet Password");
      return;
    }
    if (!cheacsaked) {
      setError("Comfrom Checked Box");
      return;
    }
    createUserWithEmailAndPassword(auth, emails, passwords)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        setSuecc(true);

        const ubdeat = {
          displayName: name,
          photoURL: photes,
        };
        updateProfile(result.user, ubdeat);
        // send email verify
        sendEmailVerification(result.user).then(() => {
          alert("Please Verify  Yoour Email");
        });
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };

  const togles = () => {
    setTog(!tog);
  };
  const handelgoogle = (e) => {
    e.preventDefault();
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((errors) => {
        console.log(errors.message);
      });
  };
  const handelGitHub = (e) => {
    e.preventDefault();
    signInWithPopup(auth, githubProvider)
    .then(result => {
      console.log(result.user)
    }).catch(rr => {
      console.log(rr.message);
    })

  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handelSubmite}>
              <fieldset className="fieldset">
                {/* Name */}
                <label className="label">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input"
                  placeholder="Name"
                />
                {/* Photo */}
                <label className="label">Photo URl</label>
                <input
                  type="text"
                  name="photo"
                  className="input"
                  placeholder="Photo url"
                />

                {/* Email */}
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />

                <label className="label">Password</label>
                <div className="  relative">
                  <input
                    name="password"
                    type={tog ? "text" : "password"}
                    className="input"
                    placeholder="Password"
                  />
                  <button onClick={togles} className=" top-3 right-5 absolute">
                    {tog ? <FaEye /> : <FaEyeSlash />}
                  </button>
                </div>

                <label className="label">
                  <input
                    type="checkbox"
                    name="checked"
                    defaultChecked
                    className="checkbox"
                  />
                  Remember me
                </label>
                <button className="btn btn-neutral mt-4">Register</button>
              </fieldset>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              {suess && (
                <p className="text-green-500 mb-4">
                  Account Create Succesfully 🎉{" "}
                </p>
              )}
              <p>
                You Allready Account? Please{" "}
                <NavLink className="text-blue-500 underline" to="/loging">
                  Loging
                </NavLink>
              </p>
            </form>
          </div>
          <div className="shadow-2xl px-4 py-4 flex gap-5 ">
            <button
              onClick={handelgoogle}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
            <button onClick={handelGitHub} className="btn bg-black text-white border-black">
              <svg
                aria-label="GitHub logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill="white"
                  d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                ></path>
              </svg>
              Login with GitHub
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regster;
