import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import "./RestaurantMenu.css";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo == null) {
    return <Shimmer />;
  }

  const { name, avgRating, cuisines, costForTwoMessage, totalRatingsString } =
    resInfo.cards[2].card.card.info;
  // const { itemCards: itemCards1, title: title1 } =
  //   resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
  // const { itemCards: itemCards2, title: title2 } =
  //   resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[3].card.card;

  // const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  const categories =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (category) => {
        return (
          category.card.card["@type"] ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );
  console.log("Categories", categories);

  return (
    <div className="restaurant-menu">
      <div className="restaurant-header">
        <h1>{name}</h1>
        <h2>
          {avgRating} ({totalRatingsString}) • {costForTwoMessage}
        </h2>
        <h3>{cuisines.join(", ")}</h3>
      </div>

      <div>
        {categories.map((category, index) => {
          // console.log(index);

          return (
            <RestaurantCategory
              key={category.card.card.title}
              data={category.card.card}
              showList={index === showIndex ? true : false}
              setShowIndex={() => {
                setShowIndex(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
