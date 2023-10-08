import { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";

const Portfolio = () => {
  const [eventPortfolio, setEventPortfolio] = useState([]);

  useEffect(() => {
    fetch("/portfolio.json")
      .then((res) => res.json())
      .then((data) => setEventPortfolio(data));
  }, []);

  console.log(eventPortfolio);

  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      {eventPortfolio.map((event) => (
        <div key={event.id}>
          <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col items-start lg:flex-row">
              <div>
                {event.photos.map((photo, index) => (
                  <img
                    key={index}
                    src={photo}
                    alt={`Photo ${index + 1}`}
                    className="max-w-sm rounded-lg mb-2 shadow-2xl"
                  />
                ))}
              </div>

              <div>
                <h1 className="text-5xl font-bold">Name: {event.name}</h1>
                <p>Date: {event.date}</p>
                <p>Location: {event.location}</p>
                <p>Type: {event.type}</p>
                <div>
                  <p>Client Goals: {event.objectives.clientGoals}</p>
                  <p>Challenges: {event.objectives.challenges}</p>
                </div>
                <div>
                  <h2>Highlights:</h2>
                  <ul>
                    {event.highlights.map((highlight, index) => (
                      <li key={index}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2>servicesProvided:</h2>
                  <ul>
                    {event.servicesProvided.map((servicesProvided, index) => (
                      <li key={index}>{servicesProvided}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p>Testimonials:</p>
                  <p>Client Goals: {event.testimonial.text}</p>
                  <p>client: {event.testimonial.client}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
