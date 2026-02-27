import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = "http://localhost:5050";
  const fronetendUrl = "http://localhost:5174";

  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [list, setList] = useState([]);
  const [info, setInfo] = useState([
    { id: 1, name: "", address: "", phone: "" },
  ]);
  // const [info, setInfo] = useState([]);
  const [category, setCategory] = useState([]);
  const [food_list, setFood_list] = useState([]);

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

  const removeFood = async (foodId) => {
    const response = await axios.delete(`${url}/api/food/${foodId}`);
    await fetchList();
    console.log(response.data);
    if (response.data) {
      toast.success("response.data.message");
    } else {
      toast.error("Error");
    }
  };

  // const fetchFoodList = async () => {
  //   const response = await axios.get(url + "/api/food/list");
  //   setFood_list(response.data.data);
  // };

  const loadCartData = async (token) => {
    console.log(token);
    const response = await axios.post(
      url,
      {},

      { headers: { token } },
    );
    console.log("here to response");
    console.log(response);
    setCartItems(response.data.cartData);
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      if (localStorage.getItem("token")) {
        setToken(localStorage.getItem("token"));
        await loadCartData(localStorage.getItem("token"));
      }
    }

    loadData();
  }, []);

  // ADMIN SECTION

  // This is for ResPage
  const getInfo = async (id) => {
    console.log("gotten here in funct");
    if (!id) return console.log("no token found");
    const response = await axios.get(`${url}/api/restaurant/${id}`);
    console.log(response);
    console.log(response.data.success);
    if (response.data.success === true) {
      setInfo(response.data.data);
    }
  };

  useEffect(() => {
    // const id = localStorage.getItem("restaurantId");

    getInfo();
  }, [info]);

  // For Category page
  const fetchCategory = async (id) => {
    if (!id) return;
    const response = await axios.get(url + `/api/category/${id}`);
    console.log(response);
    if (response.data.success === true) {
      setCategory(response.data.data);
    }
  };

  // For List page
  const fetchList = async (id) => {
    console.log("list lsity");
    if (!id) return;
    const response = await axios.get(`${url}/api/food/${id}`);
    console.log(response.data);

    if (response.data.success === true) {
      setList(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const contextValue = {
    list,
    setList,
    category,
    setCategory,
    info,
    setInfo,
    getInfo,
    fetchCategory,
    fetchList,
    removeFood,
    food_list,
    url,
    token,
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
