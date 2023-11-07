import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
// import { Blocks } from "react-loader-spinner";
import PropTypes from "prop-types";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return <Loading></Loading>;
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
