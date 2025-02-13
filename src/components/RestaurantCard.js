import CDN_URL from "../utils/constants";

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

export default RestaurantCard;
