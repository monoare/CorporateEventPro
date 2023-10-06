import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Location from "../Components/Location/Location";

const Root = () => {
  return (
    <div>
      <Outlet></Outlet>
      <Location></Location>
      <Footer></Footer>
    </div>
  );
};

export default Root;
