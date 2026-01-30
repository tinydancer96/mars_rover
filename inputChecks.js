const { Position, Location, Plateu } = require("./marsDataClasses.js");

class LocationCheck {
  isValidCoordinates(location) {
    const x = location.xCoordinate;
    const y = location.yCoordinate;
    console.log(Number.isNaN(x), Number.isNaN(y));
    return !Number.isNaN(x) && !Number.isNaN(y);
  }

  //   isValidCompass() {
  //     return Object.keys(Compass).includes(Location.compass);
  //   }

  //   identifyCompassKey() {
  //     const findCompass = Object.keys(Compass).filter(
  //       (key) => Compass[key] === parsedInput[2],
  //     );
  //     Location.compass = findCompass[0];
  //   }
}

module.exports = { LocationCheck };

const validInput = new Location("k l m");
const check = new LocationCheck();
console.log(check.isValidCoordinates(validInput));
// console.log(validInput.xCoordinate);
