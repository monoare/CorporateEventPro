import Footer from "../Footer/Footer";
import Location from "../Location/Location";
import Portfolio from "../Portfolio/Portfolio";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./Navbar";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);
  return (
    <div>
      <div
        className="hero min-h-screen relative"
        style={{
          backgroundImage: "url(https://i.ibb.co/XtCFQxT/Home.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60 "></div>
        <div className="hero-content text-center text-neutral-content flex flex-col absolute top-0">
          <Navbar></Navbar>

          <p
            data-aos="flip-left"
            className="mt-10 md:mt-40 text-2xl font-raleway font-semibold text-[#E30E31] md:text-5xl"
          >
            Crafting Unforgettable Moments: Your Premier Corporate Event Partner
          </p>
        </div>
      </div>
      <div className="mt-10">
        <Services></Services>
      </div>

      <div className="md:mb-44 md:pb-20">
        <Reviews></Reviews>
      </div>
      <div className="md:mt-20">
        <p className="text-center text-4xl font-bold">Event Portfolio</p>
        <Portfolio></Portfolio>
      </div>
      <div>
        <p>Our Location</p>
        <Location></Location>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Home;
