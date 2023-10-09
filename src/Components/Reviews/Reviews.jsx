import { useEffect, useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

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
                  <h1 className="text-3xl font-bold">
                    Service:
                    <span className="text-blue-700">{review.service}</span>
                  </h1>
                  <p className="mt-4 text-blue-700 font-semibold text-xl">
                    <span className="font-medium text-black">Client: </span>
                    {review.client}
                  </p>
                  <div className="w-4/5 text-justify">
                    <p className="py-6">
                      <span className="font-semibold">Review: </span>
                      <span className="text-blue-700">{review.review}</span>
                    </p>
                  </div>
                  <div className="flex items-center mt-10">
                    <div>
                      <p className="text-orange-400 text-2xl mr-2">Rating: </p>
                    </div>
                    <div>
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
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};

export default Reviews;
