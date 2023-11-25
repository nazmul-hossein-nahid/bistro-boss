import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivetRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) {
    return;
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivetRoute;
