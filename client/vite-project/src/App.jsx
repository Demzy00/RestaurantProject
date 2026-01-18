import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Cart from "./pages/Cart/Cart";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carts" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
