import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Order from "./pages/Orders/Order";
import { ToastContainer } from "react-toastify";
import LandingPage from "./pages/LandingPage/LandingPage";
import ResRegPage from "./pages/RestaurantRegPage/ResRegPage";

const App = () => {
  const url = "http://localhost:5050";
  const location = useLocation();

  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />

      <div className="app-content">
        {location.pathname !== "/register-restaurant" && <Sidebar />}
        <Routes>
          <Route path="/" element={<ResRegPage />} />
          <Route path="/register-restaurant" element={<ResRegPage />} />
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Order url={url} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
