import Footer from "../Footer/Footer";
import Navbar from "../Home/Navbar";
import Location from "./Location";

const LocationPage = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="mt-4 md:mt-10">
        <Location></Location>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default LocationPage;
