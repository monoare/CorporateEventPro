import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Components/Home/Home";
import Login from "../Components/Home/Login";
import Register from "../Components/Home/Register";
import Details from "../Components/ServiceDetails/Details";
import LocationPage from "../Components/Location/LocationPage";
import ServicePage from "../Components/Services/ServicePage";
import ReviewPage from "../Components/Reviews/ReviewPage";
import Portfolio from "../Components/Portfolio/Portfolio";
import Page404 from "../Components/ErrorPage/Page404";
import PrivateRoute from "./PrivateRoute";
import BlogsPage from "../Components/Blogs/BlogsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Page404></Page404>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/services",
        element: <ServicePage></ServicePage>,
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
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
      },
      {
        path: "/location",
        element: <LocationPage></LocationPage>,
      },
      {
        path: "/reviews",
        element: <ReviewPage></ReviewPage>,
      },
      {
        path: "/portfolio",
        element: <Portfolio></Portfolio>,
      },
      {
        path: "/blogs",
        element: <BlogsPage></BlogsPage>,
      },
    ],
  },
]);

export default router;
