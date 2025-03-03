import RestaurantCard from "./RestaurantCard";
import resArr from "../utils/mockData";
import { useState, useEffect } from "react";
import useRestaurantContainer from "../utils/useRestaurantContainer";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const RestaurantContainer = () => {
  const [searchText, setSearchText] = useState("");

  // console.log("RestaurantContainer component rendered");

  // if (restaurantList.length === 0) {
  //   return <Shimmer />;
  // }

  let data = useRestaurantContainer();
  const { filteredResList, restaurantList } = data;
  console.log(data);

  let onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>You have lost your internet connnection</h1>;

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
            return (
              <Link
                className="restaurant-link"
                to={"/restaurants/" + restaurant.info.id}
                key={restaurant.info.id}
              >
                <RestaurantCard resData={restaurant} />
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default RestaurantContainer;
