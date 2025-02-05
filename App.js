import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  { id: "title", className: "heading", key: "e1" },
  "Heading-1"
);
const heading2 = React.createElement(
  "h1",
  { id: "title", className: "heading", key: "e2" },
  "Heading-2"
);

const container = React.createElement(
  "div",
  {
    className: "container",
    style: { fontSize: "30px", padding: "20px" },
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
