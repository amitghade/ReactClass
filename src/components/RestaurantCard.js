import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  // console.log("Props received = ", props);
  const { resData } = props;

  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="restaurant-card">
      <img
        src={CDN_URL + cloudinaryImageId}
        alt="Dominos"
        className="restaurant-image"
      />
      <div className="restaurant-info">
        <h3>{name}</h3>
        <p>{cuisines.join(", ")}</p>
        <p>{avgRating}</p>
        <p>{costForTwo}</p>
      </div>
    </div>
  );
};

// Higher Order Component ...
// Input will be RestaurantCard => Output will be RestaurantCardVeg

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    console.log("HOC prop", props);
    return (
      <div className="group">
        <label className="bg-black text-white p-2 absolute w-12 z-10 group-hover:translate-y-[-4px] rounded transition-all">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
