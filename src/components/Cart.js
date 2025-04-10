import React from "react";
import { useSelector } from "react-redux";
import { MENU_ITEM_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { clearItems } from "../utils/cartSlice";
import {
  increaseQuantity,
  decreseQuantity,
  removeItems,
} from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => {
    return store.cart.items;
  });
  console.log(cartItems);

  const dispatch = useDispatch();

  const total = cartItems.reduce((sum, item) => {
    const { price, defaultPrice } = item.card.info;
    return (sum += ((price || defaultPrice) / 100) * item.quantity);
  }, 0);

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreseQuantity(id));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItems(id));
  };

  const handleClearItem = () => {
    dispatch(clearItems());
  };

  if (cartItems.length === 0) {
    return (
      <h1 className="text-2xl text-amber-500 text-center mt-2">
        Your Cart is empty
      </h1>
    );
  }

  return (
    <div>
      <div className="w-6/12 m-auto bg-amber-100 mt-4 p-3">
        <div className="flex justify-between">
          <p className="text-2xl font-bold">Items({cartItems.length})</p>
          <button
            onClick={handleClearItem}
            className="bg-red-500 text-white p-1.5 rounded-lg"
          >
            Clear Cart
          </button>
        </div>
      </div>
      <div>
        {cartItems.map((item) => {
          const { id, name, defaultPrice, imageId, price } = item.card.info;
          return (
            <div
              key={id}
              className="w-6/12 m-auto bg-orange-200 mt-4 p-3 flex justify-between"
            >
              <div>
                <h3 className="font-semibold">
                  {name} x {item.quantity}{" "}
                  <span
                    onClick={() => {
                      handleRemoveItem(id);
                    }}
                    className="cursor-pointer"
                  >
                    🗑️
                  </span>
                </h3>
                <p className="text-sm mb-2.5">
                  ₹{price / 100 || defaultPrice / 100}
                </p>
                <p>
                  <span
                    onClick={() => {
                      handleDecreaseQuantity(id);
                    }}
                    className="pl-1 pr-1 w-1 h-1 border border-solid text-center align-middle mr-2 cursor-pointer
                  "
                  >
                    -
                  </span>
                  <span>{item.quantity}</span>{" "}
                  <span
                    onClick={() => {
                      handleIncreaseQuantity(id);
                    }}
                    className="pl-1 pr-1 w-1 h-1 border border-solid text-center align-middle ml-2 cursor-pointer
                  "
                  >
                    +
                  </span>
                </p>
              </div>

              <div>
                <img
                  className="w-20 h20 object-cover rounded-lg"
                  src={MENU_ITEM_URL + imageId}
                  alt=""
                />
              </div>
            </div>
          );
        })}
        <div>
          <div className="w-6/12 m-auto bg-amber-400 mt-4 p-3">
            <p className="flex justify-between">
              <span>Sub Total:</span> <span>₹{total} </span>
            </p>
            <p className="flex justify-between">
              <span>Delivery Charges</span>
              <span>₹49</span>
            </p>
            <hr></hr>
            <p className="flex justify-between">
              <span>Total</span>
              <span>₹{total + 49}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
