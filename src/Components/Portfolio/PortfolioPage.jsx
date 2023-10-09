import Footer from "../Footer/Footer";
import Navbar from "../Home/Navbar";
import Portfolio from "./Portfolio";

const PortfolioPage = () => {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div>
        <Portfolio></Portfolio>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default PortfolioPage;
