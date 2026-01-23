import { useState } from "react";
import React from "react";
import "./LandingPage.css";

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div>
      <h1>Landing Page</h1>

      <p>Welcome to my web app</p>
    </div>
  );
};

export default LandingPage;
