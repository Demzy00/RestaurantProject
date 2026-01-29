import { useEffect, useState } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";

// import { useEffect } from "react";

const List = ({ url }) => {
const {list, removeFood} = useContext(StoreContext)

  return (
    <div className="flex-col">
      <p>All Foods List</p>
      <div className="list-table">
        <div className="list-table-format title">
          <p>Image</p>
          <p>Name</p>
          <p>Category</p>
          <p>Price</p>
          <p>Action</p>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className="list-table-format">
              <img src={`${url}/images/` + item.image} alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <p
                onClick={() => {
                  removeFood(item._id);
                }}
                className="cursor"
              >
                X
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
