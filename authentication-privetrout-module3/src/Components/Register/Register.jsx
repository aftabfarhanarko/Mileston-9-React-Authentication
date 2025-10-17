import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/MyContext/MyContext";
import { toast } from "react-toastify";

const Register = () => {
  const { contextuse } = use(AuthContext);

  const handelSubmite = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    contextuse(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("Succesfylly User Register");
      })
      .catch((err) => {
        console.log(err.message);
        toast.error("User Are Not Register Please Register");
      });
  };

  return (
    <div className="card bg-base-100 w-full m-auto mt-10 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Please Register</h1>

        <form onSubmit={handelSubmite}>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input"
              placeholder="Your Name"
            />
            {/* Email */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            <label className="label">
              <input type="checkbox" defaultChecked className="checkbox" />
              Remember me
            </label>
            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p>
            You Have Allready Account ? Please{" "}
            <Link to="/loging" className="text-blue-700 hover:text-blue-500">
              Loging
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
