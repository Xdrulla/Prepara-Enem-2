import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "../register/AuthPage";
import Home from "../pages/Home";

const RouterSwitcher = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default RouterSwitcher
