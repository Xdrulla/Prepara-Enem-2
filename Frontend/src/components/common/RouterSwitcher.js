import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthPage from "../register/AuthPage";
import Home from "../pages/Home";
import ProfileDetails from "../pages/ProfileDetails";
import SubjectList from "../progress/SubjectList";
import ModuleList from "../progress/ModuleList";

const RouterSwitcher = () => {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile-details" element={<ProfileDetails />} />
      <Route path="/subjects" element={<SubjectList />} />
      <Route path="/subject/:subjectId" element={<ModuleList />} />
    </Routes>
  );
}

export default RouterSwitcher
