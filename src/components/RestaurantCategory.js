import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data }) => {
  console.log("Data", data);
  const [showList, setShowList] = useState(false);

  const handleClick = () => {
    setShowList(!showList);
  };
  return (
    <div>
      <div className="flex justify-center mt-4">
        {/* Accordian Header */}
        <div className="bg-amber-200 w-7/12  p-2 cursor-pointer">
          <div onClick={handleClick} className="flex justify-between">
            <div>
              <span className="font-bold">
                {data.title} <span>({data.itemCards.length})</span>
              </span>
            </div>
            <div>⬇️</div>
          </div>
          {/* Accordian body */}

          {showList && <ItemList items={data.itemCards} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
