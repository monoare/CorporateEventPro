import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Here, you would typically send a request to your backend for authentication
    // You can use a library like Axios to make API requests.
    // For simplicity, we'll just log the email and password for demonstration.
    console.log("Email:", email);
    console.log("Password:", password);
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
            <button className="flex items-center w-full border bg-[#E30E31] border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400 mb-4">
              <FcGoogle className="text-2xl"></FcGoogle>
              <p className="mx-auto text-white">Continue with Google</p>
            </button>
            <button className="flex items-center w-full border bg-[#E30E31] border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400 mb-4">
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
              id="email"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              id="password"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
      </div>
    </div>
  );
}

export default LoginPage;
