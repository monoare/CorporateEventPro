import { useEffect, useState } from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Footer/Footer";

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
      <div className="mx-4 md:mx-20 my-10 text-center md:text-2xl font-raleway font-medium">
        <p>
          Explore our portfolio to witness the artistry, attention to detail,
          and passion that goes into crafting every event. Whether you&apos;re
          seeking inspiration for your next occasion or simply appreciate the
          beauty of exceptional event design, we invite you to immerse yourself
          in our world of extraordinary celebrations.
        </p>
      </div>
      <div>
        {eventPortfolio.map((event) => (
          <div key={event.id} className="w-full bg-base-200 ">
            <div className="hero border rounded pt-10 mb-10 min-h-screen  relative">
              <h1 className="text-xl text-center md:text-3xl font-bold absolute -top-6 pb-4">
                Name: {event.name}
              </h1>
              <div className="hero-content flex-col items-start  lg:flex-row">
                <div className="flex flex-col md:flex-row lg:flex-col gap-10 lg:gap-0">
                  {event.photos.map((photo, index) => (
                    <img
                      key={index}
                      src={photo}
                      alt={`Photo ${index + 1}`}
                      className="md:max-w-xs lg:max-w-sm rounded-lg lg:mb-32 shadow-2xl mt-10"
                    />
                  ))}
                </div>

                <div className="lg:ml-10 mt-10 font-raleway font-medium mx-4">
                  <p className="mb-2">
                    <span className="text-blue-600">Date:</span> {event.date}
                  </p>
                  <p className="mb-2">
                    <span className="text-blue-600">Location: </span>
                    {event.location}
                  </p>
                  <p className="mb-2">
                    <span className="text-blue-600">Type: </span> {event.type}
                  </p>
                  <div>
                    <p className="mb-2">
                      <span className="text-blue-600">Client Goals: </span>
                      {event.objectives.clientGoals}
                    </p>
                    <p className="mb-2">
                      <span className="text-blue-600">Challenges: </span>
                      {event.objectives.challenges}
                    </p>
                  </div>
                  <div>
                    <h2 className="mb-2 font-semibold text-2xl text-yellow-500">
                      Highlights:
                    </h2>
                    <ul className="ml-8 mb-2">
                      {event.highlights.map((highlight, index) => (
                        <li className="list-disc" key={index}>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className="mb-2 font-semibold md:text-2xl text-yellow-500">
                      Services Provided:
                    </h2>
                    <ul className="ml-8 mb-2">
                      {event.servicesProvided.map((servicesProvided, index) => (
                        <li className="list-disc" key={index}>
                          {servicesProvided}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="mb-2 font-semibold md:text-2xl text-yellow-500">
                      Testimonials:
                    </p>
                    <p className="mb-2">
                      <span className="text-blue-600">Client Goals: </span>
                      {event.testimonial.text}
                    </p>
                    <p className="mb-2">
                      <span className="text-blue-600">client: </span>
                      <span className="text-green-600 font-semibold">
                        {event.testimonial.client}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
