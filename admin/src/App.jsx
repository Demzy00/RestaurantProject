import React from "react";
import Navbar from "./components/NavBar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import { Route, Routes, useLocation } from "react-router-dom";
import Add from "./pages/Add/Add";
import List from "./pages/List/List";
import Order from "./pages/Orders/Order";
import { ToastContainer } from "react-toastify";
import AddCategory from "./pages/AddCategory/AddCategory";
import ResRegister from "./pages/ResRegister/RegRegister";
import ResPage from "./pages/RestaurantRegPage/ResPage";
import LandingNavBar from "./components/LandingNavBar/LandingNavBar";
import Footer from "./components/Footer/Footer";
import LandingPage from "./pages/LandingPage/LandingPage";

const App = () => {
  const url = "http://localhost:5050";
  const location = useLocation();

  return (
    <div>
      <ToastContainer />

      {location.pathname !== "/" && <Navbar />}

      <div className="app-content">
        {location.pathname !== "/" && <Sidebar />}

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/res" element={<ResPage />} />
          <Route
            path="/register-restaurant"
            element={<ResRegister url={url} />}
          />
          <Route path="/addcategory" element={<AddCategory url={url} />} />

          <Route path="/add" element={<Add url={url} />} />
          <Route path="/list" element={<List url={url} />} />
          <Route path="/orders" element={<Order url={url} />} />
        </Routes>
      </div>
      <Footer />
      {/* {location.pathname !== "/" && <Footer />} */}
    </div>
  );
};

export default App;
