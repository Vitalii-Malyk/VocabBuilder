import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children, restricted = false }) => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const shouldRedirect = isLoggedIn && restricted;
  return <div>{shouldRedirect ? <Navigate to="/dictionary" /> : children}</div>;
};

export default PublicRoute;
