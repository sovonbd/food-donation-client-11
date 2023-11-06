import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
// import { Blocks } from "react-loader-spinner";
import PropTypes from "prop-types";
import { AuthContext } from "../provider/AuthProvider";
import loadingAnimation from "../assets/loadingAnimation.json";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        {/* Loading..... */}
        <img src={loadingAnimation} className="w-32" alt="" />
      </div>
    );
  }
  if (user) {
    return children;
  }

  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
