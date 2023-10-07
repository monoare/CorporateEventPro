import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Home/Login";
import Register from "../Components/Home/Register";
import Services from "../Components/Services/Services";
import Details from "../Components/ServiceDetails/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <Services></Services>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/services/:id",
        element: <Details></Details>,
      },
    ],
  },
]);

export default router;
