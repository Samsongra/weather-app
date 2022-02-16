const validateCity = require("./search");

test("ensure that the city name cannot begin with a space", () => {
  expect(validateCity(" Warsaw")).toBe(false);
});

test("ensure that empty string is not valid", () => {
  expect(validateCity(" Warsaw")).toBe(false);
});

test("make sure that a city consisting only of numbers is not a valid city", () => {
  expect(validateCity("13521537")).toBe(false);
});

test("make sure the city is correct", () => {
  expect(validateCity("Warsaw")).toBe(true);
});

test("make sure the city is written in Latin characters", () => {
  expect(validateCity("日本のアニメや漫画が好き")).toBe(false);
});
