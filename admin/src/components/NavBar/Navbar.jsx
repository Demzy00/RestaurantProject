import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const NavBar = () => {
  return (
    <div className="navbar">
      {/* <img className="logo" src={assets.logo} alt="" /> */}
      <p className="logo">Admin Panel</p>
      <img className="profile" src={assets.profile_icon} alt="" />
    </div>
  );
};

export default NavBar;
