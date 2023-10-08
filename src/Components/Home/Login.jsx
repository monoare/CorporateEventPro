import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LoginPage() {
  const { loginWithEmail, googleUser, gitHubUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");

    // password validation
    if (password.length < 6) {
      toast.error("Password should be at least 6 characters");
      return;
    }

    // Attempt to login with email
    loginWithEmail(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
        // Check if the error message indicates incorrect credentials
        if (error.code === "auth/invalid-login-credentials") {
          toast.error("Incorrect password");
        } else {
          // Show a generic error message using toast
          toast.error("Login failed. Please check your email and password.");
        }
      });
  };
  // Attempt to login with google
  const handleGoogleLogin = () => {
    googleUser()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Attempt to login with Github
  const handleGitHubLogin = () => {
    gitHubUser()
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => console.error(error));
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100"
      style={{
        backgroundImage: "url(https://i.ibb.co/XtCFQxT/Home.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div>
        <Navbar></Navbar>
      </div>

      <div className=" p-8 border-2 rounded shadow-md w-96">
        <h2 className="text-2xl text-center font-semibold mb-6 text-[#E30E31]">
          Login to CorporateEventPro
        </h2>
        <form onSubmit={handleLogin}>
          <div>
            <button
              onClick={handleGoogleLogin}
              className="flex items-center w-full border bg-[#E30E31] border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400 mb-4"
            >
              <FcGoogle className="text-2xl"></FcGoogle>
              <p className="mx-auto text-white">Continue with Google</p>
            </button>
            <button
              onClick={handleGitHubLogin}
              className="flex items-center w-full border bg-[#E30E31] border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400 mb-4"
            >
              <FaGithub className="text-2xl"></FaGithub>
              <p className="mx-auto text-white">Continue with GitHub</p>
            </button>
            <button className="flex items-center w-full border bg-[#E30E31] border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400 mb-4">
              <BsApple className="text-2xl"></BsApple>
              <p className="mx-auto text-white">Continue with Apple</p>
            </button>
          </div>
          <div className="text-center mb-4 flex items-center">
            <p className="border-b-2 border-gray-500 w-full mt-1"></p>
            <p className="px-2 text-white">or</p>
            <p className="border-b-2 border-gray-500 w-full mt-1"></p>
          </div>
          <div className="mb-4">
            <input
              type="email"
              name="email"
              id="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              id="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
              placeholder="Password"
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
            >
              Login
            </button>
          </div>
          <p className="flex justify-center items-center text-white" href="">
            Don&apos;t have an account? Please
            <NavLink
              to="/register"
              className="underline text-xl text-white pl-1"
            >
              Register
            </NavLink>
          </p>
        </form>
        <ToastContainer position="top-center" />
      </div>
    </div>
  );
}

export default LoginPage;
