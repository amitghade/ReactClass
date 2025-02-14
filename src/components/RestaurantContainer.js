import RestaurantCard from "./RestaurantCard";
import resArr from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantContainer = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    console.log("useEffect is active");
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.0914726&lng=79.069835&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setRestaurantList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  // if (restaurantList.length === 0) {
  //   return <Shimmer />;
  // }

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <div className="filter">
        <button
          onClick={() => {
            console.log("Button active");
            filteredList = restaurantList.filter((res) => {
              return res.info.avgRating > 4.5;
            });
            setRestaurantList(filteredList);
          }}
          className="filter-button"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant-container">
        {restaurantList.map((restaurant, index) => {
          return <RestaurantCard key={index} resData={restaurant} />;
        })}
      </div>
    </div>
  );
};

export default RestaurantContainer;
