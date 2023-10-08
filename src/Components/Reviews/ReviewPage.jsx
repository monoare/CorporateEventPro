import React from "react";
import Reviews from "./Reviews";
import Navbar from "../Home/Navbar";

const ReviewPage = () => {
  return (
    <div>
      <div className="mb-10">
        <Navbar></Navbar>
      </div>
      <div>
        <Reviews></Reviews>
      </div>
    </div>
  );
};

export default ReviewPage;
