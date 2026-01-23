class Plateu {
  constructor(xMaxCoordinate, yMaxCoordinate) {
    this.x = xMaxCoordinate;
    this.y = yMaxCoordinate;
  }
}

class RoverPosition {
  constructor(startingX, startingY, direction, instructions) {
    this.startingX = startingX;
    this.startingY = startingY;
    this.direction = direction;
    this.instructions = instructions;
  }

  findalDestination(startingX, startingY, direction, instructions) {
    //logic
    // return coordinates, direction
  }
}
