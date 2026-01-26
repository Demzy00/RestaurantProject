import { useNavigate } from "react-router-dom";
import React, { use, useContext } from "react";
import { assets } from "../../assets/assets";

import "./ResPage.css";
import { useState } from "react";

const ResPage = () => {
  const navigate = useNavigate();
  const [image, setImage] = useState(false);

  const onLogin = async (event) => {
    event.preventDefault();

    navigate(fronetendUrl);

    // const name = event.target.name.value;
    // const address = event.target.address.value;
    // const number = event.target.number.value;
    // const imageLogo = event.target.imageLogo.value;
    // const category = event.target.category.value;

    // const response = await axios.post(newUrl, data);
    // console.log(response);
    // // if (response.data.success === false) {
    //   alert(response.data.message);
    // } else {
    //   console.log("in here");
    //   console.log(response.data);
    //   setToken(response.data);
    //   localStorage.setItem("token", response.data);
    //   setShowLogin(false);
    //   navigate("/")
    // }
  };
  return (
    <div className="add">
      <div className="">
        <h2> Restaurant Information</h2>
      </div>
      <div className="add-name-input flex-col">
        <hr />
        <br />
        <p>Name of Restaurant</p>
        <p>THE USER RESTAURANT INPUT</p>
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
      <div className="add-img-upload flex-col">
        <p>The QR CODE</p>
        <label htmlFor="image">
          <img
            src={image ? URL.createObjectURL(image) : assets.upload_area}
            alt=""
          />
        </label>
        {/* <input
            name="imageLogo"
            type="file"
            placeholder="Upload Restaurant Logo"
            required
          /> */}
      </div>
    </div>
  );
};

export default ResPage;
