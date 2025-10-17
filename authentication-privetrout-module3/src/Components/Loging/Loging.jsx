import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../context/MyContext/MyContext";

const Loging = () => {
  const {userLoging} = use(AuthContext);
  const locations = useLocation();
  console.log(locations);
  const neavegit = useNavigate();

   const handelLoging = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email,password)

    userLoging(email, password)
     .then((result) => {
        console.log(result.user);
        neavegit(locations.state || "/")

      })
      .catch((err) => {
        console.log(err.message);
      });
   }


  return (
    <div className="card bg-base-100 w-full m-auto mt-10 max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold">Please Loging!</h1>

        <form onSubmit={handelLoging}>
          <fieldset className="fieldset">
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
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4">Loging</button>
          </fieldset>
          <p>
            New Visit This Website ? Please{" "}
            <Link to="/register" className="text-blue-700 hover:text-blue-500">
              Register
            </Link>{" "}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Loging;
