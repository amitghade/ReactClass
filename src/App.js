import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent from "./components/HeadingComponent.js";
import RestaurantContainer from "./components/RestaurantContainer";
import RestaurantMenu from "./components/RestaurantMenu.js";
// import About from "./components/About.js";
import Error from "./components/Error.js";
import Contact from "./components/Contact.js";
import Shimmer from "./components/Shimmer.js";
// import Grocery from "./components/Grocery.js";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router";
import Shimmer from "./components/Shimmer.js";

const Application = () => {
  return (
    <div>
      <HeadingComponent />
      <Outlet />
    </div>
  );
};

const Grocery = lazy(() => import("./components/Grocery.js"));
const About = lazy(() => import("./components/About.js"));

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
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
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
