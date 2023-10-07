import React from "react";
import { Link } from "react-router-dom";

const Service = ({ event }) => {
  const { id } = event;
  const handleClick = () => {
    console.log("clicked");
  };

  return (
    <div>
      <div className="card h-full card-compact bg-base-100 shadow-xl">
        <figure>
          <img className="h-[300px] w-full" src={event.image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{event.name}</h2>
          <p>{event.description}</p>
          <div className="card-actions justify-end">
            <Link to={`/details/${id}`}>
              <button onClick={handleClick} className="btn btn-primary w-full">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
