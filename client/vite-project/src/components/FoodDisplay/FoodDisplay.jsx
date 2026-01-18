import React, { useContext } from "react";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";
import { useState } from "react";
import { StoreContext } from "../../context/StoreContext";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  // console.log(food_list);

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes you can order</h2>
      <div className="food-display-list">
        {food_list.map((item, index) => {
          // console.log(item);
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default FoodDisplay;
