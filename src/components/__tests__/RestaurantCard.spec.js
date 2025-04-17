import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../Mocks/resCardMockData.json";
import { render, screen } from "@testing-library/react";
import { expect } from "@jest/globals";
import "@testing-library/jest-dom";

it("Should check if restaurant card is rendered with the props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  //Query
  let restaurantName = screen.getByText("KFC");

  //Assertion
  expect(restaurantName).toBeInTheDocument();
});
