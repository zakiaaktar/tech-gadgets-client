import { Link } from "react-router-dom";
import error from "../../assets/error.jpg";
import { FaArrowLeft } from "react-icons/fa";


const ErrorPage = () => {
  return (
    <div className="h-screen flex justify-center items-center my-16 lg:my-0">
      <div className="lg:flex items-center justify-between gap-20">
        <div className="text-center lg:text-left">
          <h1 className="font-bold text-4xl">Oops...!</h1>
          <h2 className="text-3xl my-4">Page Not Found </h2>

          <Link to="/">
            <button className="btn mt-6 lg:text-lg text-white bg-gradient-to-r from-[#6d0feb] to-[#7071E8]">
              <FaArrowLeft></FaArrowLeft>
              Back To Home
            </button>
          </Link>
        </div>
        <div>
          <img className="w-10/12 lg:w-full mx-auto" src={error} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
