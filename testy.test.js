const searchCountries = require("./search_cities");

test("if no argument is given, return cities beginning with the letter A", () => {
  expect(searchCountries().length).toBe(5);
});

test("when you enter Poland, it returns cities from Poland", () => {
  expect(searchCountries("Poland").length).toBe(5);
});

test("after entering Sw/Sz it should return 2 results", () => {
  expect(searchCountries("Sw/Sz").length).toBe(2);
});
