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

      <div className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Elevate Your Restaurant Business</h1>
          <p className="hero-subtitle">
            Streamline operations, manage orders, and grow your culinary empire
            with our comprehensive restaurant management platform
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={() => setShowLogin(true)}>
              Get Started
            </button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </div>

      <div className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Platform?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📊</div>
              <h3>Analytics Dashboard</h3>
              <p>
                Track sales, monitor performance, and make data-driven decisions
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🍽️</div>
              <h3>Menu Management</h3>
              <p>
                Easily update your menu, prices, and availability in real-time
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Order Processing</h3>
              <p>
                Streamline order management from kitchen to customer delivery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
