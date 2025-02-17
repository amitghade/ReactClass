import React from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent from "./components/HeadingComponent.js";
import RestaurantContainer from "./components/RestaurantContainer";

const Application = () => {
  console.log(<HeadingComponent />);
  return (
    <div>
      <HeadingComponent />
      <RestaurantContainer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Application />);
