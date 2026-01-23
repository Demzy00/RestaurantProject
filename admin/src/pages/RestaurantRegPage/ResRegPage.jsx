import { useNavigate } from "react-router-dom";
import React, { use, useContext } from "react";
import { assets } from "../../assets/assets";

import "./ResRegPage.css";
import { useState } from "react";

const ResRegPage = () => {
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
      <form onSubmit={onLogin} className="flex-col">
        <div className="">
          <h2> Restaurant Registration</h2>
        </div>
        <div className="add-name-input flex-col">
          <p>Name of Restaurant</p>
          <input
            name="name"
            type="name"
            placeholder="Your restaurant name"
            required
          />
        </div>
        <div className="add-name-input flex-col">
          <p>Address</p>
          <input
            name="address"
            type="text"
            placeholder="Restaurant address"
            required
          />
        </div>
        <div className="add-name-input flex-col">
          <p>Phone Number</p>
          <input
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
        <div className="add-img-upload flex-col">
          <p>Upload Restaurant Logo</p>
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
        <button type="submit" className="add-btn">
          Proceed
        </button>
      </form>
    </div>
  );
};

export default ResRegPage;
