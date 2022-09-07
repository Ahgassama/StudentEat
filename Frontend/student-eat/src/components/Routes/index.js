import React from "react";
import { Routes, Route } from "react-router-dom";
import Connexion from "../../pages/Connexion";
import Home from "../../pages/Home";
const index = () => {
  return (
    <div>
      <Routes>
        <Route default path="/auth" element={<Connexion />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
};

export default index;
