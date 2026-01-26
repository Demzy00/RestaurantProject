import React from "react";
import "./DropDown.css";

const DropDown = () => {
  return (
    <div className="flex flex-col">
      <ul className="flex flex-col dropdown-profile">
        <li>Setting</li>
        <li>Logout</li>
      </ul>
    </div>
  );
};

export default DropDown;
