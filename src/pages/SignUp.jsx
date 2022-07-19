import React, { useState } from "react";
import bgNet from "../assets/bg-netflix.png";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { user, signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e, token) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password, token);

      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className="w-full h-screen ">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src={bgNet}
          alt=""
        />
        <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
        <div className="fixed w-full px-4 py-24 z-50">
          <div className="max-w-[450px] h-[600px] mx-auto bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16">
              <h1 className="text-3xl font-bold">Sign Up</h1>
              {error && <p className="p-3 bg-red-400 my-2">{error}</p>}
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="p-3 my-2 bg-gray-700 rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  data-sitekey="6Lc5rf8gAAAAAGVC7JIIXGNqtsJ2qIN2KiilOxwS"
                  data-callback="handleSubmit"
                  data-action="submit"
                  type="submit"
                  className="bg-red-600 py-3 my-6 rounded font-semibold g-recaptcha"
                >
                  Sign Up
                </button>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <p>
                    <input className="mr-2" type="checkbox" />
                    Remember me
                  </p>
                  <p>Need help?</p>
                </div>
                <p className="py-8">
                  <span className="text-gray-500">
                    Already subscribed to Netflix?
                  </span>
                  <Link to="/login"> Sign In</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
