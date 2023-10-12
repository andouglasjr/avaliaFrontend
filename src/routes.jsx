import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages Import
import Login from "./pages/auth/login";
import EvaluationScreen from "./pages/EvaluationScreen";
import UserMain from "./pages/UserMain"
import Landing from "./pages/Landing";

function RoutesComponents() {
    return(
        <Routes>
            <Route path="/" element={<Landing/>}/>
            <Route path="/login" element={<Login />} />
            <Route path="/evaluationScreen" element={<EvaluationScreen />} />
            <Route path="/userMain" element={<UserMain />} />
        </Routes>
    )
}

export default RoutesComponents;