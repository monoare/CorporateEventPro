import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <div className="flex flex-col justify-center text-center relative">
      <h1 className="text-5xl font-raleway font-extrabold text-red-600 animate-bounce mt-10">
        404
      </h1>
      <img
        className="w-1/2 mx-auto"
        src={
          "https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
        }
        alt=""
      />
      <div className="relative bottom-32">
        <p className="text-2xl text-green-600 mb-4">Look like you are lost</p>
        <p className="text-red-600 font-semibold mb-4">
          The page you are looking for is not available!
        </p>
        <Link className="btn btn-warning" to="/">
          Go to Home
        </Link>
      </div>
    </div>
  );
};

export default Page404;
