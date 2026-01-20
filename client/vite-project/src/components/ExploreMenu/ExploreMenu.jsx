import React, { useContext, useEffect, useState } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const ExploreMenu = ({ category, setCategory }) => {
  const { food_categories } = useContext(StoreContext);
  console.log(food_categories);

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our Menu</h1>
      <p className="expore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to feed all people in the world
      </p>
      <div className="explore-menu-list">
        {food_categories.map((item, index) => {
          return (
            <div
              onClick={() => {
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.name
                );
              }}
              key={index}
              className="explore-menu-list-item"
            >
              {console.log(category)}
              <img
                className={category === item.name ? "active" : ""}
                src={item.image}
                alt=""
              />
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExploreMenu;
