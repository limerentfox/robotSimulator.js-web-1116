'use strict';

function Robot() {
}

Robot.prototype.orient = function(direction) {
  var d = ["east", "west", "north", "south"]
  if (d.includes(direction)){
    this.bearing = direction
  } else {
    throw new Error("Invalid Robot Bearing")
  }
}

Robot.prototype.turnRight = function () {
  if (this.bearing === "east") {
    this.bearing = "south"
  } else if (this.bearing === "west") {
    this.bearing = "north"
  } else if (this.bearing === "north") {
    this.bearing = "east"
  } else if (this.bearing === "south") {
    this.bearing = "west"
  }


}

Robot.prototype.turnLeft = function () {
  if (this.bearing === "east") {
    this.bearing = "north"
  } else if (this.bearing === "west") {
    this.bearing = "south"
  } else if (this.bearing === "north") {
    this.bearing = "west"
  } else if (this.bearing === "south") {
    this.bearing = "east"
  }


}
Robot.prototype.at = function(x,y) {
  this.x = x
  this.y = y
  this.coordinates = [this.x,this.y]
}

Robot.prototype.place = function (hash) {
  this.x = hash["x"]
  this.y = hash["y"]
  this.coordinates = [this.x,this.y]
  this.bearing = hash["direction"]

}


Robot.prototype.advance = function () {

  if (this.bearing === "north") {
    this.at(this.x, (this.y + 1))
  } else if (this.bearing === "east") {
    this.at((this.x + 1), this.y)
  } else if (this.bearing === "south") {
    this.at(this.x, (this.y - 1))
  } else if (this.bearing === "west") {
    this.at((this.x - 1), this.y)
  }

}

Robot.prototype.instructions = function (command) {
  var commands = []
  for (let i=0, l = command.length; i < l; i++) {
    if (command[i] === "L") {
      commands.push("turnLeft")
    } else if (command[i] === "R") {
      commands.push("turnRight")
    } else if (command[i] === "A") {
      commands.push("advance")
    }
  }
  return commands
}

Robot.prototype.evaluate = function(command) {
  for (let i=0, l = command.length; i < l; i++) {
    if (command[i] === "L") {
      this.turnLeft()
    } else if (command[i] === "R") {
      this.turnRight()
    } else if (command[i] === "A") {
      this.advance()
    }
  }
}
