import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import resArr from "../utils/mockData";
import { useState, useEffect, useContext } from "react";
import useRestaurantContainer from "../utils/useRestaurantContainer";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { Link, useLocation } from "react-router";

const RestaurantContainer = () => {
  const [searchText, setSearchText] = useState("");
  const location = useLocation();
  console.log("Location hook", location);
  console.log("RestaurantContainer component rendered");

  // if (restaurantList.length === 0) {
  //   return <Shimmer />;
  // }

  const RestaurantCardVeg = withVegLabel(RestaurantCard);

  let data = useRestaurantContainer();

  console.log("Data = ", data);
  const { restaurantList, filteredResList, setFilteredResList } = data;
  console.log(restaurantList);

  useEffect(() => {
    if (location.pathname === "/") {
      setFilteredResList(restaurantList);
    }
  }, [location.pathname, restaurantList, location.key, setFilteredResList]);

  useEffect(() => {
    console.log(filteredResList);
  }, [filteredResList]);

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
            data-testid="searchInput"
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
                {restaurant.info.veg ? (
                  <RestaurantCardVeg resData={restaurant} />
                ) : (
                  <RestaurantCard resData={restaurant} />
                )}
                {/* <RestaurantCard resData={restaurant} /> */}
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default RestaurantContainer;
