import { fireEvent, render, screen } from "@testing-library/react";
import RestaurantContainer from "../RestaurantContainer";
import { BrowserRouter } from "react-router";
import MOCK_DATA from "../Mocks/resContainerMockData.json";
import { act } from "@testing-library/react";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA); // get from network tab
    },
  });
});

it("Should check if the Restaurant Container is having Search button", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <RestaurantContainer />
      </BrowserRouter>
    );
  });

  //Query

  let cardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(cardsBeforeSearch.length).toBe(21);

  // let searchButton = screen.getByRole("button", { name: "Search" });

  // expect(searchButton).toBeInTheDocument();

  // let searchInput = screen.getByTestId("searchInput");

  // fireEvent.change(searchInput, { target: { value: "pizza" } });

  // fireEvent.click(searchButton);

  // let cards = screen.getAllByTestId("resCard");

  // expect(cards.length).toBe(4);
});
