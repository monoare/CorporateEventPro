import { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Navbar from "../Home/Navbar";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  console.log(reviews);

  return (
    <div className="w-[80vw] h-screen mx-auto">
      <AwesomeSlider>
        {reviews.map((review) => (
          <div key={review.id}>
            <div className="hero min-h-screen w-full bg-base-200">
              <div className="hero-content flex-col lg:flex-row">
                <img
                  src={review.image}
                  className="max-w-sm h-full rounded-lg shadow-2xl"
                />
                <div>
                  <h1 className="text-5xl font-bold">
                    Service: {review.service}
                  </h1>
                  <p>Client: {review.client}</p>
                  <p className="py-6">Review: {review.review}</p>
                  <div className="flex items-center">
                    <p>Rating</p>
                    <Rating
                      style={{ maxWidth: 250 }}
                      value={review.rating}
                      readOnly={true}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default Reviews;
