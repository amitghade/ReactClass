import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.0914726&lng=79.069835&restaurantId=367414&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };

  console.log(resInfo);
  if (resInfo == null) {
    return <Shimmer />;
  }

  const { name, avgRating, cuisines, costForTwoMessage, totalRatingsString } =
    resInfo.cards[2].card.card.info;
  return (
    <div>
      <h1>{name}</h1>
      <h2>
        {avgRating}({totalRatingsString}) {costForTwoMessage}
      </h2>
      <h3>{cuisines}</h3>
      <ul>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
