import React from "react";

const ItemList = ({ items }) => {
  console.log("Items", items);
  return (
    <div>
      {items.map((item) => {
        return (
          <div>
            <h3>{item.card.info.name}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
