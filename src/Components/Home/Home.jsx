import home from "../../assets/Home.jpg";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-3xl">This is home</h2>
      <img className="w-full h-[100vh]" src={home} alt="" />
    </div>
  );
};

export default Home;
