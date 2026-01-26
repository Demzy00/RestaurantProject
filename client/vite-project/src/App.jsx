import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import MyOrders from "./pages/MyOrders/MyOrders";
import LandingPage from "./pages/LandingPage/LandingPage";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/orders" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/myorders" element={<MyOrders />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
