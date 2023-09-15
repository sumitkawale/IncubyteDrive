class LunarCraftControl {
  constructor() {
    this.position = { x: 0, y: 0, z: 0 };
    this.directions = ["N", "E", "S", "W", "Up", "Down"];
    this.currentDirection = "N"; // Initial direction is North
  }

  // Function to move the spacecraft forward
  moveForward() {
    switch (this.currentDirection) {
      case "N":
        this.position.y++;
        break;
      case "E":
        this.position.x++;
        break;
      case "S":
        this.position.y--;
        break;
      case "W":
        this.position.x--;
        break;
      case "Up":
        this.position.z++;
        break;
      case "Down":
        this.position.z--;
        break;
    }
  }

  // Function to move the spacecraft backward
  moveBackward() {
    switch (this.currentDirection) {
      case "N":
        this.position.y--;
        break;
      case "E":
        this.position.x--;
        break;
      case "S":
        this.position.y++;
        break;
      case "W":
        this.position.x++;
        break;
      case "Up":
        this.position.z--;
        break;
      case "Down":
        this.position.z++;
        break;
    }
  }

  // Function to turn the spacecraft left
  turnLeft() {
    switch (this.currentDirection) {
      case "N":
        this.currentDirection = "W";
        break;
      case "E":
        this.currentDirection = "N";
        break;
      case "S":
        this.currentDirection = "E";
        break;
      case "W":
        this.currentDirection = "S";
        break;
      case "Up":
        this.currentDirection = "N"; // When facing Up, left turn results in North
        break;
      case "Down":
        this.currentDirection = "N"; // When facing Down, left turn results in North
        break;
    }
  }

  // Function to turn the spacecraft right
  turnRight() {
    switch (this.currentDirection) {
      case "N":
        this.currentDirection = "E";
        break;
      case "E":
        this.currentDirection = "S";
        break;
      case "S":
        this.currentDirection = "W";
        break;
      case "W":
        this.currentDirection = "N";
        break;
      case "Up":
        this.currentDirection = "N"; // When facing Up, right turn results in North
        break;
      case "Down":
        this.currentDirection = "N"; // When facing Down, right turn results in North
        break;
    }
  }

  // Function to turn the spacecraft up
  turnUp() {
    if (this.currentDirection !== "Up" && this.currentDirection !== "Down") {
      this.currentDirection = "Up";
    }
  }

  // Function to turn the spacecraft down
  turnDown() {
    if (this.currentDirection !== "Up" && this.currentDirection !== "Down") {
      this.currentDirection = "Down";
    }
  }

  // Function to execute a sequence of commands
  executeCommands(commands) {
    for (const command of commands) {
      switch (command) {
        case "f":
          this.moveForward();
          break;
        case "b":
          this.moveBackward();
          break;
        case "l":
          this.turnLeft();
          break;
        case "r":
          this.turnRight();
          break;
        case "u":
          this.turnUp();
          break;
        case "d":
          this.turnDown();
          break;
        default:
          // Invalid command, ignore it
          break;
      }
      console.log(`"${command}" - (${this.position.x}, ${this.position.y}, ${this.position.z}) - ${this.currentDirection}`);
    }
  }

  // Function to get the final position and direction
  getFinalState() {
    return {
      finalPosition: this.position,
      finalDirection: this.currentDirection,
    };
  }
}

// Usage example:
const craftControl = new LunarCraftControl();
const commands = ["f", "r", "u", "b", "l"];
console.log("Initial Direction:", craftControl.currentDirection);
craftControl.executeCommands(commands);
const finalState = craftControl.getFinalState();
console.log("Final Position: (", finalState.finalPosition.x, ",", finalState.finalPosition.y, ",", finalState.finalPosition.z, ")");
console.log("Final Direction:", finalState.finalDirection);
