import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import "./RestaurantMenu.css";

const RestaurantMenu = () => {
  const { resId } = useParams();

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

  const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  console.log(cards);

  return (
    <div className="restaurant-menu">
      <div className="restaurant-header">
        <h1>{name}</h1>
        <h2>
          {avgRating} ({totalRatingsString}) • {costForTwoMessage}
        </h2>
        <h3>{cuisines.join(", ")}</h3>
      </div>
      {cards.map((card, index) => {
        if (card.card.card.itemCards) {
          const { itemCards, title } = card.card.card;
          return (
            <div key={index} className="menu-section">
              <h3>{title}</h3>
              <div className="menu-items">
                {itemCards.map((item) => (
                  <div key={item.card.info.id} className="menu-item">
                    <h4>{item.card.info.name}</h4>
                    <p>{item.card.info.description}</p>
                    <p className="price">
                      ₹
                      {item.card.info.price / 100 ||
                        item.card.info.defaultPrice / 100}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        }
        return null;
      })}
    </div>
  );
};

export default RestaurantMenu;
