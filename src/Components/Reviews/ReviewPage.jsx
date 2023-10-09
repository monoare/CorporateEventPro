import React from "react";
import Reviews from "./Reviews";
import Navbar from "../Home/Navbar";
import Footer from "../Footer/Footer";

const ReviewPage = () => {
  return (
    <div>
      <div className="mb-10">
        <Navbar></Navbar>
      </div>
      <div>
        <Reviews></Reviews>
      </div>
      <div className="mt-10">
        <Footer></Footer>
      </div>
    </div>
  );
};

export default ReviewPage;
