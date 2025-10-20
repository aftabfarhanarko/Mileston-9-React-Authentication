import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../provider/AuthContex";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

const Rigester = () => {
  const [show, setShow] = useState(false);
  const navegit = useNavigate();
  const { creatUser, ubdeatUserProfile, setUser } = useContext(AuthContext);
  const [erra, setErra] = useState("");
  const [era, setEra] = useState("");

  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    if (name.length < 6) {
      setErra("Name Should be 6 Charater");
      return;
    } else {
      setErra("");
    }
    const photo = e.target.photo.value;
    const profile = {
      displayName: name,
      photoURL: photo,
    };

    const email = e.target.email.value;

    if (email.length < 7) {
      setEra("Please Entet a Valid Email");
      return;
    } else {
      setEra("");
    }
    const password = e.target.password.value;
    creatUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Register Success");
        ubdeatUserProfile(profile)
          .then(() => {
            setUser({ ...user, profile });
            navegit("/");
          })
          .catch(() => {
            setUser(user);
          });
      })
      .catch((err) => {
        MySwal.fire({
          title: "Error!",
          text: err.message,
          icon: "error",
        });
      });
  };
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-lg font-semibold mb-5 text-center">
            Register your account
          </h1>
          <form onSubmit={handelRegister}>
            <fieldset className="fieldset">
              {/* Name */}
              <label className="label font-semibold">Full Name</label>
              <input
                type="text"
                name="name"
                className="input  focus:outline-none "
                placeholder="enter your name"
                required
              />
              {erra && <p className="text-xs text-red-500">{erra}</p>}

              {/* Photo Url */}
              <label className="label font-semibold">Photo URL</label>
              <input
                type="text"
                name="photo"
                className="input focus:outline-none"
                placeholder="photo url"
                required
              />

              {/* Email */}
              <label className="label font-semibold">Email address</label>
              <input
                type="email"
                name="email"
                className="input focus:outline-none"
                placeholder="email"
                required
              />
              {era && <p className="text-xs text-red-500">{era}</p>}

              <div className="relative ">
                <label className="label font-semibold">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input focus:outline-none"
                  placeholder="password"
                  required
                />
                <div
                  className="absolute right-7 top-8 z-10  cursor-pointer text-md"
                  onClick={() => setShow(!show)}
                >
                  {show ? <FaEye /> : <FaEyeSlash />}
                </div>
              </div>
              {/* Remember me */}
              <label className="label cursor-pointer mt-2">
                <input type="checkbox" name="rememberMe" className="checkbox" />
                <span className="label-text">Remember me</span>
              </label>

              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
              <p className="font-semibold text-center mt-2">
                Dont’t Have An Account ?{" "}
                <Link className="text-red-500 hover:underline" to="/auth/login">
                  Login
                </Link>
              </p>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Rigester;
