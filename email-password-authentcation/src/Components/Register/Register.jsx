import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Fierbase";
import { GoogleAuthProvider } from "firebase/auth";
import { Link } from "react-router";

const googleProvider = new GoogleAuthProvider();

const Register = () => {
  const [succes, setSucces] = useState(false);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const handelShow = (e) => {
    e.preventDefault();

    setShow(!show);
  };
  const handelSubmite = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const passwoed = e.target.password.value;
    const checked = e.target.checked.checked;
    const names = e.target.name.value;
    const photos = e.target.photo.value;

    console.log(names, photos);

    console.log(checked);

    const valaditionsPassword = /^.{6,}$/;
    const special6Length = /^(?=.*[A-Z](?=.).+$)/;
    const passwordPattern = /^(?=.*[!@#$%^&*()_+ -])/;

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

    if (!checked) {
      setError("Pleade Clicked ChackBox On Permitions");
      return;
    }
    setError("");
    setSucces(false);
    createUserWithEmailAndPassword(auth, email, passwoed)
      .then((result) => {
        console.log(result.user);
        setSucces(true);
        e.target.reset();

        const profiles = {
          displayName: names,
          photoURL: photos,
        };

        updateProfile(result.user, profiles);

        // send email verify
        sendEmailVerification(result.user).then(() => {
          alert("Please Loging to your email and Vrify Your Email Account");
        });
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
      });
  };

  const handelSUbmite = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
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
                {/* User Name */}
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Name"
                />
                {/* User Phot Url */}
                <label className="label">User Photo Url</label>
                <input
                  name="photo"
                  type="text"
                  className="input"
                  placeholder="User Photo"
                />

                {/* User Email */}
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
                    type={show ? "text" : "password"}
                    className="input"
                    placeholder="Password"
                  />
                  <button
                    onClick={handelShow}
                    className=" top-2 right-5 absolute"
                  ></button>
                </div>
                <input
                  type="checkbox"
                  name="checked"
                  defaultChecked
                  className="checkbox checkbox-secondary"
                />

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
            <p>
              Alorady You Have an Account? Please{" "}
              <Link
                className="text-blue-500 font-semibold underline"
                to="/loging"
              >
                Loging
              </Link>
            </p>
          </div>

          <button
            onClick={handelSUbmite}
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
        </div>
      </div>
    </div>
  );
};

export default Register;
