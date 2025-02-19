import React from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent from "./components/HeadingComponent.js";
import RestaurantContainer from "./components/RestaurantContainer";
import RestaurantMenu from "./components/RestaurantMenu.js";
import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";

const Application = () => {
  return (
    <div>
      <HeadingComponent />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Application />,
    children: [
      {
        path: "/",
        element: <RestaurantContainer />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
