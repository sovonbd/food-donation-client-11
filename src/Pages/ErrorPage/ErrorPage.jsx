import Lottie from "lottie-react";
import errorAnimation from "../../assets/errorAnimation.json";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const ErrorPage = () => {
  return (
    <div>
      <Helmet>
        <title>DNOSH | Error</title>
      </Helmet>
      <div className="h-screen flex flex-col justify-center items-center">
        <Lottie
          animationData={errorAnimation}
          loop={true}
          className="w-1/2 md:w-1/4 mx-auto"
        />
        <div className="text-center">
          <p className="font-semibold text-[#1A2E35] text-2xl md:text-4xl pb-4">
            Page Not Found
          </p>

          <Link to="/">
            <button className="bg-green-600 border-none px-10 md:px-20 rounded-lg text-white font-semibold btn py-2">
              Return to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
