import RestaurantCard from "./RestaurantCard";
import resArr from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantContainer = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResList, setFilteredResList] = useState([]);
  // console.log("RestaurantContainer component rendered");

  useEffect(() => {
    // console.log("useEffect is active");
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
    setFilteredResList(
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
            let filteredList = restaurantList.filter((res) => {
              return res.info.avgRating > 4.5;
            });
            setFilteredResList(filteredList);
          }}
          className="filter-button"
        >
          Top Rated Restaurants
        </button>
        {/* Search Bar */}
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            value={searchText}
            onChange={(e) => {
              console.log(e);
              setSearchText(e.target.value);
            }}
          />
        </div>
        <button
          className="search-button"
          onClick={() => {
            //Filter restaurants based on search text
            console.log(searchText);
            if (searchText.trim() === "") {
              // If search text is empty, show all restaurants
              setFilteredResList(restaurantList);
            } else {
              let filteredRestaurants = restaurantList.filter((res) => {
                console.log(res);
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase().trim());
              });

              setFilteredResList(filteredRestaurants);
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-container">
        {filteredResList.length === 0 ? (
          <h1>No Restaurants Found</h1>
        ) : (
          filteredResList.map((restaurant, index) => {
            return <RestaurantCard key={index} resData={restaurant} />;
          })
        )}
      </div>
    </div>
  );
};

export default RestaurantContainer;
