import home from "../../assets/Home.jpg";
import Navbar from "./Navbar";

const Home = () => {
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
          <div
            data-aos="fade-zoom-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            className="max-w-lgs"
          >
            <p className="mt-10 text-5xl">
              Crafting Unforgettable Moments: Your Premier Corporate Event
              Partner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
