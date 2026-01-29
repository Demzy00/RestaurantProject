import { useNavigate } from "react-router-dom";
import React from "react";
import "./DropDown.css";
import { useEffect } from "react";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

const DropDown = () => {
  const navigate = useNavigate();
  const { setToken } = useContext(StoreContext);

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="flex flex-col">
      <ul className="flex flex-col dropdown-profile">
        <li
          onClick={() => {
            navigate("/profile");
          }}
        >
          Profile
        </li>
        <li onClick={logout}>Logout</li>
      </ul>
    </div>
  );
};

export default DropDown;
