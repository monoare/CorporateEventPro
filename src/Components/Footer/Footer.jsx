import {
  FaFacebook,
  FaInstagram,
  FaXTwitter,
  FaPinterest,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-fit bg-black">
      <div className="text-center text-white">
        <h1 className="text-2xl md:text-5xl font-bold mt-10">Follow us</h1>
        <hr className="border-[#E30E31] border-2 w-2/3 mx-auto my-4" />
        <h2 className="md:text-xl">
          Don&rsquo;t be uninformed. Get the latest update
        </h2>
      </div>

      <div className="flex mt-10 mb-4">
        <div className="mr-4">
          <a href="">
            <FaFacebook className="bg-[#E30E31] rounded-full text-white text-4xl"></FaFacebook>
          </a>
        </div>
        <div className="mr-4">
          <a href="">
            <FaInstagram className="bg-[#E30E31] rounded-lg text-white text-4xl"></FaInstagram>
          </a>
        </div>
        <div className="mr-4">
          <a href="">
            <FaXTwitter className="bg-[#E30E31] rounded-full text-white text-4xl"></FaXTwitter>
          </a>
        </div>
        <div className="mr-4">
          <a href="">
            <FaPinterest className="bg-[#E30E31] rounded-full text-white text-4xl"></FaPinterest>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
