import React from "react";
import { Routes, Route } from "react-router-dom";
import Connexion from "../../pages/Connexion";
const index = () => {
  return (
    <div>
      <Routes>
        <Route default path="/auth" element={<Connexion />} />
      </Routes>
    </div>
  );
};

export default index;
