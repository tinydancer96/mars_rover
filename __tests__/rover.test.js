const { Position, Location, Plateu } = require("../marsDataClasses");
const { LocationCheck } = require("../inputChecks");
describe("Location Input", () => {
  test("confirms if coordinates are valid", () => {
    const validInput = new Location("5 5 N");
    const invalidInput = new Location("K L N");
    const inputChecker = new LocationCheck();

    expect(inputChecker.isValidCoordinates(validInput)).toBe(true);
    expect(inputChecker.isValidCoordinates(invalidInput)).toBe(false);
  });

  //   test("confirms if compass direction is valid", () => {
  //     const validInput = new Location("5 5 N");
  //     const invalidInput = new Location("K L L");
  //     expect(validInput.isValidCompass()).toBe(true);
  //     expect(invalidInput.isValidCompass()).toBe(false);
  //   });
});
