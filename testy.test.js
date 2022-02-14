const searchCountries = require("./search_countries");

test("if no argument is given, return countries beginning with the letter A", () => {
  expect(searchCountries().length).toBe(15);
});

test("when you enter Poland, it should return 1 result", () => {
  expect(searchCountries("Poland").length).toBe(1);
});

test("after entering Sw it should return 3 results", () => {
  expect(searchCountries("Sw").length).toBe(3);
  //Switzerland, Sweden, Swaziland
});
