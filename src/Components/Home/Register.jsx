import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { AuthContext } from "../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "firebase/auth";

const Register = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get("email");
    const password = form.get("password");
    const name = form.get("name");
    const photo = form.get("image");
    const accepted = e.target.terms.checked;
    console.log(email, name, photo);

    // reset error and success

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
        updateProfile(result.user, { displayName: name, photoURL: photo });
        console.log(result.user);
        toast.success("User created successfully.");
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative"
      style={{
        backgroundImage: "url(https://i.ibb.co/XtCFQxT/Home.jpg)",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute top-4">
        <Navbar></Navbar>
      </div>
      <div className="p-8 border-2 rounded shadow-md">
        <h2 className="text-xl text-center font-semibold mb-6 text-[#E30E31]">
          Register to CorporateEventPro
        </h2>
        <form onSubmit={handleRegister}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              id="name"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              name="image"
              id="image"
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-400"
              placeholder="Enter Your Image URL"
            />
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
            <label className="ml-2 text-white" htmlFor="terms">
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
          <p className="flex justify-center items-center text-white" href="">
            Already have an account? Please
            <NavLink to="/login" className="underline text-xl text-white pl-1">
              Login
            </NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
