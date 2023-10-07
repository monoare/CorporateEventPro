import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Home/Login";
import Register from "../Components/Home/Register";
import Services from "../Components/Services/Services";
import Details from "../Components/ServiceDetails/Details";
import LocationPage from "../Components/Location/LocationPage";
import Reviews from "../Components/Reviews/Reviews";

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
        path: "/details/:id",
        element: <Details></Details>,
      },
      {
        path: "/location",
        element: <LocationPage></LocationPage>,
      },
      {
        path: "/reviews",
        element: <Reviews></Reviews>,
      },
    ],
  },
]);

export default router;
