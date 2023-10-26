import React, { useContext, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../Firebase/AuthProvider";
const Login = () => {
  const { signIn, user, googleMethod, githubMethod, facebookMethod } =
    useContext(AuthContext);
  const [error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    signIn(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  // Check if the user is already logged in and navigate to the home page if they are
  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6 flex">
            <button onClick={googleMethod} className="r-icon-google">
              <img
                src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
                alt=""
              />
            </button>
            <button onClick={githubMethod} className="r-icon-gihub">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt=""
              />
            </button>
            <button onClick={facebookMethod} className="ms-2 r-icon-gihub">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/2023_Facebook_icon.svg/1200px-2023_Facebook_icon.svg.png"
                alt=""
              />
            </button>
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
              <p className="text-red-500">
                <small>{error}</small>
              </p>
            </div>
            <Link to="/signup">
              <button className="btn btn-link">New to Burj-Al-Arab?</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
