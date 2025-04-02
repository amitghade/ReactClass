import React from "react";
import { MENU_ITEM_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items, dummy }) => {
  console.log("Items", items);
  console.log(dummy);

  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div key={item.card.info.id}>
            <div className="flex align-center justify-between border-b-1 border-gray-400 mt-4">
              <div className="w-9/12">
                <h3>{item.card.info.name}</h3>
                <h4 className="font-bold">
                  ₹
                  {item.card.info.price / 100 ||
                    item.card.info.defaultPrice / 100}
                </h4>
                {item.card.info.ratings.aggregatedRating.rating && (
                  <h4>
                    <span className="text-green-800">★</span>
                    {item.card.info.ratings.aggregatedRating.rating}(
                    {item.card.info.ratings.aggregatedRating.ratingCount})
                  </h4>
                )}
                <p className="text-sm mb-3.5 h-20 overflow-y-auto">
                  {item?.card?.info?.description?.slice(0, 100)}...
                </p>
              </div>
              <div className="w-3/12 h-32 relative">
                <img
                  className="w-40 h-32 object-cover "
                  src={MENU_ITEM_URL + item.card.info.imageId}
                  alt={item.card.info.name}
                />
                <button
                  onClick={() => {
                    handleAddItem(item);
                  }}
                  className="bg-green-600 text-white p-1 rounded absolute bottom-3 left-10 w-20 font-bold"
                >
                  ADD+
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
