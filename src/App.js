import React from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent from "./components/HeadingComponent.js";
import RestaurantContainer from "./components/RestaurantContainer";

const Application = () => {
  console.log(<HeadingComponent />);
  return (
    <div>
      {/* <h1>Application Component</h1> */}
      <HeadingComponent />
      <RestaurantContainer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Application />);
