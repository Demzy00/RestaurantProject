import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = "http://localhost:5050";
  const fronetendUrl = "http://localhost:5174";

  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");

  const [food_list, setFood_list] = useState([]);

  const [food_categories, setFood_categories] = useState(["yam"]);

  const addToCart = (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        totalAmount += itemInfo.price * cartItems[item];
      }
    }
    return totalAmount;
  };

  // const fetchFoodList = async () => {
  //   const response = await axios.get(url + "/api/food/list");
  //   setFood_list(response.data.data);
  // };

  // const fetchCategories = async () => {
  //   const response = await axios.get(url + "/api/foodCategory/list");
  //   console.log(response);
  //   setFood_categories(response.data.data);
  // };

  // useEffect(() => {
  //   (fetchFoodList(), fetchCategories());
  // }, []);

  const contextValue = {
    food_list,
    food_categories,
    url,
    setToken,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    fronetendUrl,
  };

  console.log(contextValue);
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
