import RestaurantCard from "./RestaurantCard";
import resArr from "../utils/mockData";

const RestaurantContainer = () => {
  return (
    <div className="restaurant-container">
      {resArr.map((restaurant) => {
        return <RestaurantCard key={restaurant.info.id} resData={restaurant} />;
      })}
    </div>
  );
};

export default RestaurantContainer;
