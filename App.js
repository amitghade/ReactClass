import React from "react";
import ReactDOM from "react-dom/client";

//JSX
//Parcel ------ babel -------- React create element ------ object ------- html element


const titleStyle = { color: "red", backgroundColor: "pink" };
const Title = () => (
  <h1 id="heading" className="title" style={titleStyle}>
    Title from JSX
  </h1>
);

//Components
// Class based components
// Functional Based components

const val = 3434;

const HeadingComponent = () => {
  return (
    <div id="container">
      <Title />
      <Title></Title>
      {Title()}
      <h1 id="headcomp" className="head">
        Heading component
      </h1>

      <h2> {78 * 3 + 5}</h2>
    </div>
  );
};

const Application = () => {
  return (
    <div>
      <h1>Application Component</h1>
      <HeadingComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Application />);
