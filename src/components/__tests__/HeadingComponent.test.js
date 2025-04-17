import HeadingComponent from "../HeadingComponent";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router";
import { UserProvider } from "../../utils/UserContext";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { expect } from "@jest/globals";
import "@testing-library/jest-dom";
import LoginComponent from "../LoginComponent";

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

it("Should check if the Login page is rendered on click of Login Button", () => {
  render(
    <Provider store={appStore}>
      <UserProvider>
        <BrowserRouter>
          <HeadingComponent />
          <Routes>
            <Route path="/login" element={<LoginComponent />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </Provider>
  );

  // Query

  fireEvent.click(screen.getByRole("button", { name: "Login" }));
  // assertion

  expect(screen.getByText("Login Form")).toBeInTheDocument();
});
