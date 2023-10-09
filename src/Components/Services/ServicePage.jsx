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
      <div className="text-center font-bold text-lg md:text-3xl font-raleway pb-4 mb-10 border-b-4 border-b-red-600 mx-20">
        <p className="text-red-500">
          We will provide the following services for you.
        </p>
      </div>
      <div>
        <Services></Services>
      </div>
    </div>
  );
};

export default ServicePage;
