import { useEffect, useState } from "react";

const useRestaurantContainer = () => {
  const [filteredResList, setFilteredResList] = useState([]);
  const [restaurantList, setRestaurantList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.0914726&lng=79.069835&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setRestaurantList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredResList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };
  return { filteredResList, restaurantList };
};

export default useRestaurantContainer;
