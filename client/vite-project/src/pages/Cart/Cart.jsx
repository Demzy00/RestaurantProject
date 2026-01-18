import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import "./Cart.css";

const Order = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);
  const deliver_fee = 5;

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₦{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>₦{item.price * cartItems[item._id]}</p>
                  <p
                    onClick={() => {
                      removeFromCart(item._id);
                    }}
                    className="cross"
                  >
                    x
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
        <form action="">
          <div className="instruction-box">
            <p className="instruction">Your Message:</p>
            <p>
              {" "}
              <textarea
                className="instruction"
                name=""
                id=""
                placeholder="For additional instructions. Please comment here"
              ></textarea>
            </p>
          </div>
        </form>
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₦{getTotalCartAmount()}</p>
            </div>
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₦{deliver_fee}</p>
            </div>
            <div className="cart-total-details">
              <b>Total</b>
              <b>
                ₦
                {getTotalCartAmount() === 0
                  ? 0
                  : getTotalCartAmount() + deliver_fee}
              </b>
            </div>
          </div>
          <button
            onClick={() => {
              navigate("/order");
            }}
          >
            PROCEED TO CHECK OUT
          </button>
        </div>
        <div className="cart-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cart-promocode-input">
            <input type="text" placeholder="promo code" />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
