import React, { useEffect, useState } from "react";
import Service from "./Service";
import Navbar from "../Home/Navbar";

const Services = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("corporateeventpro.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  console.log(events);

  return (
    <div>
      <div className="mb-10">
        <Navbar></Navbar>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mb-10 gap-4 mx-10">
        {events.map((event) => (
          <Service key={event.id} event={event}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
