import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../pages/auth/login/authToken";
import Sidebar from "../components/sidebar/Sidebar";

export const ProtectedRoute = () => {
  const { token } = useAuth();

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <Sidebar userName={localStorage.getItem("userName")} />
      <Outlet />
    </div>
  );
};

