const { Compass } = require("./compass");

class Plateu {
  constructor(xMaxCoordinate, yMaxCoordinate) {
    this.x = xMaxCoordinate;
    this.y = yMaxCoordinate;
  }
}

class Position {
  constructor(startingX, startingY, direction) {
    this.startingX = startingX;
    this.startingY = startingY;
    this.direction = Compass[direction];
  }
}

class LocationInput {
  constructor(xyc) {
    const parsedInput = xyc.split(" ");
    this.xCoordinate = parsedInput[0];
    this.yCoordinate = parsedInput[1];

    const findCompass = Object.keys(Compass).filter(
      (key) => Compass[key] === parsedInput[2],
    );
    this.compass = findCompass[0];
  }

  isValidCoordinates() {
    if (
      Number.isNaN(Number(this.xCoordinate)) ||
      Number.isNaN(Number(this.yCoordinate))
    ) {
      return false;
    } else {
      return true;
    }
  }

  isValidCompass() {
    return Object.keys(Compass).includes(this.compass);
  }
}

module.exports = { Plateu, Position, LocationInput };
