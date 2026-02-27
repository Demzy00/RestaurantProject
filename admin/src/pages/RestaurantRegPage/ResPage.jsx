import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./ResPage.css";
import { StoreContext } from "../../context/StoreContext";

const ResPage = (req, res) => {
  // const { id } = useParams();
  const { info, getInfo } = useContext(StoreContext);
  console.log(info)

  // useEffect(() => {
  //   {
  //     getInfo();
  //   }
  // });
  // console.log(info);
  // console.log(req.userId);

  return (
    <div className="add">
      <div className="">
        <h2> Restaurant Information</h2>
      </div>

      {info.map((info, index) => {
        return (
          <div key={index}>
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
