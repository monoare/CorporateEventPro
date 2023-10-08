import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/corporateeventpro-low-resolution-color-logo.png";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [userLogin, setUserLogin] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => console.log("user logged out successfully"))
      .catch((error) => console.error(error));
  };

  const cyanButtonStyle = {
    backgroundColor: "#E30E31",
  };
  const navlinks = (
    <>
      <li>
        <NavLink to="/" className="text-lg text-[#E30E31] font-semibold">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-lg text-[#E30E31] font-semibold"
          to="/services"
        >
          Services
        </NavLink>
      </li>
      <li>
        <NavLink className="text-lg text-[#E30E31] font-semibold" to="/reviews">
          Client Success Stories
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-lg text-[#E30E31] font-semibold"
          to="/portfolio"
        >
          Event Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-lg text-[#E30E31] font-semibold"
          to="/location"
        >
          Our location
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={() => {
            if (user) {
              handleLogOut(); // Call handleLogout if the user is logged in
            }
            setUserLogin(!userLogin);
          }}
          className="text-lg text-[#E30E31] font-semibold"
          to="/login"
        >
          {user ? "Logout" : "Login"} {/* Toggle between Login and Logout */}
        </NavLink>
      </li>
      <li>
        <NavLink
          className="text-lg text-[#E30E31] font-semibold"
          to="/register"
        >
          Register
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn bg-[#E30E31] lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            style={cyanButtonStyle}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <img className="w-1/2" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="flex flex-col">
        {user && (
          <>
            <img className="rounded-full w-10" src={user?.photoURL} alt="" />
            <span>{user?.displayName}</span>
            <span>{user?.email}</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
