const chai = require('chai')
const expect = chai.expect

describe('A failing test', function () {
  it('should fail', function () {
    expect(true).to.equal(true);
  })
})

// Turn the rover

describe ('turnRover', function(){
  var turnLeft = require('../marsrover').turnLeft;
  var turnRight = require('../marsrover').turnRight;
  var rover;

    beforeEach(function () {
      rover = {
        x: 0,
        y: 0,
        currentDirection: 'N'
      };
    });

  it('should turn the rover from North to West', function() {
    turnLeft(rover)
    expect(rover.currentDirection).to.deep.equal('W')
  })

  it('should turn the rover from North to East', function() {
    turnRight(rover)
    expect(rover.currentDirection).to.deep.equal('E')
  })
})

// Move the rover

describe ('moveRover', function(){
  var moveForward = require('../marsrover').moveForward;
  var rover;

    beforeEach(function () {
      rover = {
        x: 0,
        y: 0,
        currentDirection: 'N'
      };
    });

  it('should move rover one position forward', function() {
    moveForward(rover)
    expect(rover.y).to.deep.equal(1)
  })
})

// During challenge

var turnLeft = require('../marsrover').turnLeft;
var moveRover = require('../marsrover').moveRover;

describe('Turn Rover', function() {
  var rover = {
    x: 0,
    y: 0,
    currentDirection: 'E'
  }

  it('return N if rover is heades E', function(){
    turnLeft(rover)
    expect(rover.currentDirection).to.equal('N');
  })

  it('should return N if currentDirection is invalid', function(){
    rover.currentDirection = 'X'
    turnLeft(rover)
    expect(rover.currentDirection).to.equal('N');
  })
})

describe('Move Rover', function(){
  var rover = {
    x: 0,
    y: 0,
    currentDirection: 'N'
  }

  it('should move rover one field north', function(){
    moveRover(rover)
    expect(rover.y).to.equal(1);
    expect(rover.x).to.equal(0);
  })

  it('should not move rover forward if rover reached edge', function(){
    rover.x = 5;
    rover.y = 5;
    rover.currentDirection = 'N';

    moveRover(rover)
    expect(rover.y).to.equal(5);
  })
})