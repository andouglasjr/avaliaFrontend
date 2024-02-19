import React, { useState, useEffect } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../pages/auth/login/authToken";
import Sidebar from "../components/sidebar/Sidebar";

export const ProtectedRoute = () => {
  const { token } = useAuth();
  const location = useLocation();

  if (!token) {
    return <Navigate to="/login" />;
  }

  const [routeKey, setRouteKey] = useState(0);

  useEffect(() => {
    setRouteKey((prevKey) => prevKey + 1);
  }, [location.pathname]);

  return (
    <div>
      {location.pathname !== "/loading" && <Sidebar userName={localStorage.getItem("userName")} />}
      <Outlet key={routeKey} />
    </div>
  );
};
