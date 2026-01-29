import { useNavigate } from "react-router-dom";
import React, { use, useContext } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";

import "./ResPage.css";
import { useState } from "react";
import { useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";

const ResPage = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(false);
  const url = "http://localhost:5050/api/restaurant/get";

  const { info } = useContext(StoreContext);

  console.log(info);

  return (
    <div className="add">
      <div className="">
        <h2> Restaurant Information</h2>
      </div>
      <div className="add-name-input flex-col">
        <hr />
        <br />
        <p>Name of Restaurant</p>
        <p>`${url}`</p>
        <br />
      </div>
      <div className="add-name-input flex-col">
        <p>Address</p>
        <p>THE USER RESTAURANT ADDRESS</p>
        <br />
      </div>
      <div className="add-name-input flex-col">
        <p>Phone Number</p>
        <p>THE RESTAURANT PHONE NUMBER</p>
        <br />
      </div>
      {/* <div className="add-img-upload flex-col"> */}
        {/* <p>The QR CODE</p> */}
        {/* <label htmlFor="image"> */}
          {/* <img
            src={image ? URL.createObjectURL(image) : assets.upload_area}
            alt=""
          /> */}
        {/* </label> */}
        {/* <input
            name="imageLogo"
            type="file"
            placeholder="Upload Restaurant Logo"
            required
          /> */}
      {/* </div> */}
    </div>
  );
};

export default ResPage;
