import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "../register/AuthPage";
import Home from "../pages/Home";
import ProfileDetails from "../pages/ProfileDetails";

const RouterSwitcher = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile-details" element={<ProfileDetails />} />
    </Routes>
  );
}

export default RouterSwitcher
