// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SalesDashboard from "../pages/SalesDashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/sales" replace />} />
      <Route path="/sales" element={<SalesDashboard />} />
    </Routes>
  );
};

export default AppRoutes;
