import React, { useContext, useState } from "react";
import "./LandingNavBar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import Footer from "../Footer/Footer";

const LandingNavBar = ({ setShowLogin }) => {
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  return (
    <div className="navbar">
      <Link to="/">
        <p>OUR LOGO</p>
      </Link>

      <div className="">
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Get Started</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="" />
            <ul className="nav-profile-dropdown">
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="" /> <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    {/* <Footer/> */}
    </div>
  );
};

export default LandingNavBar;
