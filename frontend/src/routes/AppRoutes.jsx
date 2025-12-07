import { BrowserRouter, Routes, Route } from "react-router-dom";
import SalesDashboard from "../pages/SalesDashboard";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/sales" element={<SalesDashboard />} />
        <Route path="*" element={<SalesDashboard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
