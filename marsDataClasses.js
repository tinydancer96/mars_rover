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

class Location {
  constructor(xyc) {
    const parsedInput = xyc.split(" ");
    this.xCoordinate = parsedInput[0];
    this.yCoordinate = parsedInput[1];
    this.compass = parsedInput[2];
  }
}

module.exports = { Plateu, Position, Location };
