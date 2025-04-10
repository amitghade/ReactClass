import HeadingComponent from "../HeadingComponent";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router";
import { UserProvider } from "../../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { expect } from "@jest/globals";
import "@testing-library/jest-dom";

it("Should check if the Login button is rendered", () => {
  render(
    <Provider store={appStore}>
      <UserProvider>
        <BrowserRouter>
          <HeadingComponent />
        </BrowserRouter>
      </UserProvider>
    </Provider>
  );

  const button = screen.getByRole("button");

  expect(button).toBeInTheDocument();
});

it("Should check if the cart with 0 items is rendered", () => {
  render(
    <Provider store={appStore}>
      <UserProvider>
        <BrowserRouter>
          <HeadingComponent />
        </BrowserRouter>
      </UserProvider>
    </Provider>
  );

  let cart = screen.getByText(/Cart\s*\(0 items\)/); //  "Cart(0 items)"

  expect(cart).toBeInTheDocument();
});
