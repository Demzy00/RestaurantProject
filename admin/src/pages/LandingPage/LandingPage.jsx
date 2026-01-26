import { useState } from "react";
import React from "react";
import "./LandingPage.css";
import Footer from "../../../../admin/src/components/Footer/Footer";
import LandingNavBar from "../../components/LandingNavBar/LandingNavBar";
import LoginPopUp from "../../components/LoginPopUp/LoginPopUp";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="landingpage">
      {showLogin ? <LoginPopUp setShowLogin={setShowLogin} /> : <></>}
      <LandingNavBar setShowLogin={setShowLogin} />

      <h1>Landing Page</h1>

      <p>Welcome to my web app</p>
    </div>
  );
};

export default LandingPage;
