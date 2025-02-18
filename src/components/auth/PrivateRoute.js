import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ children }) => {
  // Check token in Redux state (which would be initialized from localStorage)
  const token = useSelector((state) => state.auth.token);

  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
