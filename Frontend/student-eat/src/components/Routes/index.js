import React from "react";
import { Routes, Route } from "react-router-dom";
import Connexion from "../../pages/Connexion";
import Home from "../../pages/Home";
import Profile from "../../pages/Profile";

const index = () => {
  return (
    <div>
      <Routes>
        <Route default path="/auth" element={<Connexion />} />
        <Route path="/" element={<Home />} />
        <Route path="/profil" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default index;
