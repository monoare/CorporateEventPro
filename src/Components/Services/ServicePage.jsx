import Services from "./Services";
import Navbar from "../Home/Navbar";

const ServicePage = () => {
  return (
    <div>
      <div>
        <div className="mb-10">
          <Navbar></Navbar>
        </div>
      </div>
      <div>
        <Services></Services>
      </div>
    </div>
  );
};

export default ServicePage;
