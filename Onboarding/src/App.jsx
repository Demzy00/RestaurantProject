import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage.jsx";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";

// import ResRegPage from "./pages/RestaurantRegPage/ResRegPage.jsx";
import Footer from "./components/Footer/Footer.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";

const App = () => {
  const url = "http://localhost:5050";

  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}

      <div>
        <NavBar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<LandingPage />} />

          {/* <Route path="/restaurant-registration" element={<ResRegPage />} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
