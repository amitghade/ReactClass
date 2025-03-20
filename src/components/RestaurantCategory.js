import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showList, setShowIndex, dummy }) => {
  console.log("Data", data);
  console.log(dummy);

  const handleClick = () => {
    setShowIndex();
  };
  return (
    <div>
      <div className="flex justify-center mt-4">
        {/* Accordian Header */}
        <div className="bg-gray-200 w-7/12  p-2 cursor-pointer shadow-lg">
          <div onClick={handleClick} className="flex justify-between">
            <div>
              <span className="font-bold">
                {data.title} <span>({data.itemCards.length})</span>
              </span>
            </div>
            {showList ? <div>⬆️</div> : <div>⬇️</div>}
          </div>
          {/* Accordian body */}

          {showList && <ItemList items={data.itemCards} dummy={dummy} />}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCategory;
