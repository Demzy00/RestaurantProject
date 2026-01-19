import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { StoreContext } from "../../context/StoreContext";

const NavBar = () => {
  const [menu, setMenu] = useState("");
  const location = useLocation();
  console.log(location);

  const { getTotalCartAmount } = useContext(StoreContext);

  // get the dot style for classname
  const getC = () => {
    return getTotalCartAmount() === 0 ? "" : "dot";
  };

  // get the active style
  const isAct = (name) => {
    return menu === name ? "active" : "";
  };

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1)); // Remove '#'
      console.log(element);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" }); // Smooth scroll
      }
    }
  }, [location]); // Re-run effect when location changes

  return (
    <div className="navbar">
      <p>LOGO WILL BE HERE</p>{" "}
      <ul className="navbar-menu">
        <Link
          to="/"
          className={menu === "home" ? "active" : ""}
          onClick={() => setMenu("home")}
        >
          Home
        </Link>
        <Link
          to="/#explore-menu"
          className={`${isAct("menu")}`}
          onClick={() => setMenu("menu")}
        >
          Menu
        </Link>

        <Link
          to="/cart"
          className={`${getC("cart")} ${isAct("carts")}`}
          onClick={() => setMenu("carts")}
        >
          Carts
        </Link>
        <a
          href="#contact-us"
          className={`${isAct("contact-us")}`}
          onClick={() => setMenu("contact-us")}
        >
          Contact Us
        </a>
      </ul>
    </div>
  );
};

export default NavBar;
