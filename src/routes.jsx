import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

//Pages Import
import Login from "./pages/auth/login";
import EvaluationScreen from "./pages/EvaluationScreen";
import UserMain from "./pages/UserMain";
import Landing from "./pages/Landing";
import Loading from "./pages/Loading";
import GenerationScreen from "./pages/GenerationScreen";
import ReviewerDashboard from "./pages/ReviewerDashboard";
import Sidebar from "./components/sidebar/Sidebar";

function RoutesComponentsWithSidebar() {
  const [pathFinal, setPathFinal] = useState("-");
  const [value, setValue] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setPathFinal(location.pathname);
  }, [location]);

  const mock = [
    {
      path: "/evaluationScreen",
    },
    {
      path: "/generationScreen",
    }
  ];

  const pathVerification = mock.some((m) => m.path === pathFinal);

  return (
    <div>
      {pathVerification ? <Sidebar userName={localStorage.getItem("userName")}/> : null}
      <Routes>
        <Route path="/evaluationScreen" element={<EvaluationScreen />} />
        <Route path="/generationScreen" element={<GenerationScreen />} />
        <Route path="/reviewerDashboard" element={<ReviewerDashboard />} />
       
      </Routes>
    </div>
  );
}

function RoutesComponents() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/userMain" element={<UserMain />} />
        <Route path="/loading" element={<Loading />} />
      </Routes>
      <RoutesComponentsWithSidebar />
    </div>
  );
}

export default RoutesComponents;
