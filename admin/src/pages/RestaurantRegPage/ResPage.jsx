import { useNavigate, useParams } from "react-router-dom";
import React, { use, useContext } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";

import "./ResPage.css";
import { useState } from "react";
import { useEffect } from "react";
import { StoreContext } from "../../context/StoreContext";

const ResPage = () => {
  const url = "http://localhost:5050/api/restaurant";

  const { id } = useParams();

  const navigate = useNavigate();
  const [info, setInfo] = useState([
    {
      name: "",
      address: "",
      phone: "",
    },
  ]);
  const [image, setImage] = useState(false);

  const getInfo = async () => {
    const response = await axios.get(`${url}/${id}`);
    console.log(response);
    console.log(response.data.success);
    if (response.data.success === true) {
      setInfo(response.data.data);
    }
  };

  useEffect(() => {
    getInfo();
  }, [id]);
  console.log(info);

  return (
    <div className="add">
      <div className="">
        <h2> Restaurant Information</h2>
      </div>

      {info.map((info) => {
        return (
          <div key={info._id}>
            <div className="add-name-input flex-col">
              <hr />
              <br />
              <p>Name of Restaurant</p>
              <p>{info.name}</p>
              <br />
            </div>
            <div className="add-name-input flex-col">
              <p>Address</p>
              <p>{info.address}</p>
              <br />
            </div>
            <div className="add-name-input flex-col">
              <p>Phone Number</p>
              <p>{info.number}</p>
              <br />
            </div>
          </div>
        );
      })}

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
