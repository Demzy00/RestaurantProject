import { useNavigate } from "react-router-dom";
import React, { use, useContext } from "react";
import { assets } from "../../assets/assets";

import "./RegRegister.css";
import { useState } from "react";
import axios from "axios";

const ResRegister = ({ url }) => {
  const navigate = useNavigate();
  const [image, setImage] = useState(false);
  const adminUrl = "http://localhost:5174";
  const [data, setData] = useState({
    name: "",
    address: "",
    number: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("address", data.address);
    formData.append("number", data.number);
    // formData.append("restaurantLogo", image);

    console.log(formData);
    const response = await axios.post(`${url}/api/restaurant/add`, formData);
    console.log(response.data);
    console.log(response.data.success);
    if (response.data.success === true) {
      navigate(adminUrl);
      toast.success(response.data.message);
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="add">
      <form onSubmit={onLogin} className="flex-col">
        <div className="">
          <h2> Restaurant Registration</h2>
        </div>
        <div className="add-name-input flex-col">
          <p>Name of Restaurant</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            name="name"
            type="name"
            placeholder="Your restaurant name"
            required
          />
        </div>
        <div className="add-name-input flex-col">
          <p>Address</p>
          <input
            onChange={onChangeHandler}
            value={data.address}
            name="address"
            type="text"
            placeholder="Restaurant address"
            required
          />
        </div>
        <div className="add-name-input flex-col">
          <p>Phone Number</p>
          <input
            onChange={onChangeHandler}
            value={data.number}
            name="number"
            type="number"
            placeholder="Phone Number"
            required
          />
        </div>
        {/* <div className="add-name-input flex-col">
          <p>Category</p>
          <input
            name="category"
            type="text"
            placeholder="Category (Rice, Noodles, Fast Food etc.)"
            required
          />
        </div> */}
        {/* <div className="add-img-upload flex-col"> */}
        {/* <p>Upload Restaurant Logo</p> */}
        {/* <label htmlFor="image"> */}
        {/* <img */}
        // src={image ? URL.createObjectURL(image) : assets.upload_area}
        // alt="" // /{/* </label> */}
        {/* <input
            name="imageLogo"
            type="file"
            placeholder="Upload Restaurant Logo"
            required
          /> */}
        {/* </div> */}
        <button type="submit" className="add-btn">
          Proceed
        </button>
      </form>
    </div>
  );
};

export default ResRegister;
