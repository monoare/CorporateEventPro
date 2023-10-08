import { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { BsApple } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { NavLink, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { createUser, googleUser, gitHubUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const accepted = e.target.terms.checked;

    // reset error and success
    setRegisterError("");
    setSuccess("");

    if (password.length < 6) {
      toast.error("Password should be at least 6 characters or longer.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Your password should have at least one upper case letter.");
      return;
    } else if (!/[-!$%^&*()_+|~=`{}\\[\]:";'<>?,.@\\/]/g.test(password)) {
      toast.error("Your password should have at least one special character.");
      return;
    } else if (!accepted) {
      toast.error("Please accept our terms and conditions!");
      return;
    }
    // Create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        toast.success("User created successfully.");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleRegister = () => {
    // create user with google
    googleUser().then((result) => {
      console.log(result.user).catch((error) => {
        console.error(error);
      });
    });
  };

  const handleGitHubRegister = () => {
    gitHubUser()
      .then((result) => {
        console.log(result.user);
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
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-xl text-center font-semibold mb-6 text-[#E30E31]">
          Register to CorporateEventPro
        </h2>
        <form onSubmit={handleRegister}>
          <div>
            {/* Google user */}
            <button
              onClick={handleGoogleRegister}
              className="flex items-center w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400 mb-4"
            >
              <FcGoogle className="text-2xl"></FcGoogle>
              <p className="mx-auto text-gray-400">Register with Google</p>
            </button>

            {/* GitHub user */}
            <button
              onClick={handleGitHubRegister}
              className="flex items-center w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400 mb-4"
            >
              <FaGithub className="text-2xl"></FaGithub>
              <p className="mx-auto text-gray-400">Register with GitHub</p>
            </button>

            {/* Apple user */}
            <button className="flex items-center w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400 mb-4">
              <BsApple className="text-2xl"></BsApple>
              <p className="mx-auto text-gray-400">Register with Apple</p>
            </button>
          </div>
          <div className="text-center mb-4 flex items-center">
            <p className="border-b-2 border-gray-500 w-full mt-1"></p>
            <p className="px-2">or</p>
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
          <div className="mb-2">
            <input type="checkbox" name="terms" id="terms" />
            <label className="ml-2" htmlFor="terms">
              Accept our <a href="">Terms and Conditions</a>
            </label>
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
            >
              Register
            </button>
            <ToastContainer position="top-center" />
          </div>
        </form>
        <div>
          <p className="flex justify-center" href="">
            Already have an account?
            <NavLink to="/login" className="pl-1 underline text-blue-500">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
