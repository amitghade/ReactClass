import { sum } from "../sum";

//Query
test("Testing Sum of two numbers", () => {
  let result = sum(5, 3);
  //Assertion
  expect(result).toBe(8);
});
