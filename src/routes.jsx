import React from "react";
import { Routes, Route } from "react-router-dom";

//Pages Import
import Login from "./pages/auth/login";
import Landing from "./pages/Landing";

function RoutesComponents() {
    return(
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/competences" element={<Landing />} />
        </Routes>
    )
}

export default RoutesComponents;