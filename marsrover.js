var rover = {
  x: 0,
  y: 0,
  currentDirection: 'N'
};

function turnLeft(rover){
  //key 'L'
  switch (rover.currentDirection) {
    case "N":
      rover.currentDirection = "W"
      break;
    case "E":
      rover.currentDirection = "N"
    break;
    case "S":
      rover.currentDirection = "E";
    break;
    case "W":
      rover.currentDirection = "S";
    break;
    default: 
    rover.currentDirection = "N";
    break;
  }
  console.log("turnLeft was called", rover.currentDirection);
}

function turnRight(rover){
  //key 'R'
  switch (rover.currentDirection) {
    case "N":
      rover.currentDirection = "E"
      break;
    case "E":
      rover.currentDirection = "S"
    break;
    case "S":
      rover.currentDirection = "W";
    break;
    case "W":
      rover.currentDirection = "N";
    break;
    default: 
    rover.currentDirection = "N";
    break;
  }
  console.log("turnRight was called", rover.currentDirection);
}

function moveForward(rover){
  //key 'M'
  var plateauMax = [5, 5];

  switch (rover.currentDirection) {
    case "N":
      if(rover.y >= plateauMax[1]){
        console.log('Reached end of plateau!')
        break;
      }
      rover.y += 1
      break;
    case "E":
      if(rover.x >= plateauMax[0]){
        console.log('Reached end of plateau!')
        break;
      }
      rover.x += 1
      break;
    case "S":
      if(rover.y < 1){
        console.log('Reached end of plateau!')
        break;
      }
      rover.y -= 1
      break;
    case "W":
      if(rover.x < 1){
        console.log('Reached end of plateau!')
        break;
      }
      rover.x -= 1
      break;
    default: 
      console.log('Ready  to move!')
    break;
  }
  console.log("moveForward was called", rover)
}

var input = 'LMLMLMLMM';
rover.x = 1;
rover.y = 2;

function roverCommands(input){
  var commands = input.split('')
  for (var i = 0; i < commands.length; i++){
    switch(commands[i]){
      case 'L':
        turnLeft(rover)
        break;
      case 'R':
        turnRight(rover)
        break;
      case 'M':
        moveForward(rover)
        break;
      default: 
        console.log('Unknown command!' + commands[i])
      break;
    } 
  }
  return 'Done! Current position: ' + rover.x + ' ' + rover.y + ' ' + rover.currentDirection;
}

module.exports.turnLeft = turnLeft;
module.exports.turnRight = turnRight;
module.exports.moveForward = moveForward;
module.exports.roverCommands = roverCommands;
