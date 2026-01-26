import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import DropDown from "../DropDownProfile/DropDown";

const NavBar = () => {
  return (
    <div className="navbar">
      {/* <img className="logo" src={assets.logo} alt="" /> */}
      <p className="logo">Admin Panel</p>
      <img
        className="profile"
        src={assets.profile_icon}
        onClick={() => console.log("clicked")}
        alt=""
      />
      {/* <DropDown className="profile" /> */}
    </div>
  );
};

export default NavBar;
