import RestaurantCard from "./RestaurantCard";
import resArr from "../utils/mockData";
import { useState } from "react";

const RestaurantContainer = () => {
  const [restaurantList, setRestaurantList] = useState([
    {
      info: {
        id: "503106",
        name: "La Pino'z Pizza",
        cloudinaryImageId: "5fe4444a065b60c4fe39ef975222c12b",
        costForTwo: "₹300 for two",
        cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
        avgRating: 4.2,
      },
    },
    {
      info: {
        id: "503106",
        name: "Pizza Hut",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/16/3f8f727e-9071-4079-bc10-a79bade1cda8_57495.jpg",
        costForTwo: "₹300 for two",
        cuisines: ["Pizzas"],
        avgRating: 3.5,
      },
    },
    {
      info: {
        id: "503106",
        name: "CakeZone Patisserie",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2025/2/6/a1af65fb-da24-40af-a783-bec78501ec93_926336.jpg",
        costForTwo: "₹300 for two",
        cuisines: [
          "Bakery",
          "Desserts",
          "Beverages",
          "Ice Cream",
          "Sweets",
          "Juices",
          "Bengali",
        ],
        avgRating: 4.6,
      },
    },
  ]);

  // let restaurantList = [];

  return (
    <div>
      <div className="filter">
        <button
          onClick={() => {
            console.log("Button active");
            filteredList = restaurantList.filter((res) => {
              return res.info.avgRating > 4;
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
