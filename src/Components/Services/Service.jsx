import { Link } from "react-router-dom";

const Service = ({ event }) => {
  const { id, price } = event;

  return (
    <div>
      <div className="card h-full card-compact bg-base-100 shadow-xl">
        <div className="relative rounded-t-lg">
          <figure>
            <img className="h-[300px] w-full" src={event.image} alt="Shoes" />
          </figure>
          <p className="absolute font-raleway font-medium text-blue-600 bg-cyan-300 max-w-fit rounded p-4 left-5 bottom-5">
            Price: {price}
          </p>
        </div>
        <div className="card-body">
          <h2 className="card-title">{event.name}</h2>
          <p>{event.description}</p>
          <div className="card-actions justify-end">
            <Link className="btn w-full" to={`/details/${id}`}>
              {event.button_text}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
