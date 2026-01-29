import React, { useContext, useState } from "react";
import "./LandingNavBar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import Footer from "../Footer/Footer";

const LandingNavBar = ({ setShowLogin }) => {


  return (
    <div className="navbar">
      <Link to="/">
        <p>OUR LOGO</p>
      </Link>

      <div className="">
        <button onClick={() => setShowLogin(true)}>Get Started</button>
      </div>
    </div>
  );
};

export default LandingNavBar;
