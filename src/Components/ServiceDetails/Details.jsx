import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Home/Navbar";

const Details = () => {
  const [details, setDetails] = useState([]);
  const [eventDetails, setEventDetails] = useState({});
  const { id } = useParams();
  const idInt = parseInt(id);
  console.log(idInt);

  useEffect(() => {
    fetch("/corporateeventpro.json")
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, []);

  useEffect(() => {
    const findDetails = details.find((detail) => detail.id === idInt);
    setEventDetails(findDetails || {});
  }, [details, idInt]);
  console.log(eventDetails);

  return (
    <div>
      <div className="mb-10">
        <Navbar></Navbar>
      </div>

      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={eventDetails.image}
            className=" w-1/2 rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{eventDetails.name}</h1>
            <p className="py-6">{eventDetails.description}</p>
            <p>Our Services includes: {eventDetails.included_services}</p>
            <p>Price: {eventDetails.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
