const { Position, LocationInput, Plateu } = require("../marsClasses");

describe("Location Input", () => {
  test("confirms if coordinates are valid", () => {
    const validInput = new LocationInput("5 5 N");
    const invalidInput = new LocationInput("K L N");
    expect(validInput.isValidCoordinates()).toBe(true);
    expect(invalidInput.isValidCoordinates()).toBe(false);
  });

  test("confirms if compass direction is valid", () => {
    const validInput = new LocationInput("5 5 N");
    const invalidInput = new LocationInput("K L L");
    expect(validInput.isValidCoordinates()).toBe(true);
    expect(invalidInput.isValidCoordinates()).toBe(false);
  });
});
