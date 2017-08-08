const assert = require('chai').assert;
const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you, 
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work. 
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {

  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('multiplyByTen(5) to equal 50', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(5), 50);
    });
    it('multiplyByTen(-5) to equal -50', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(-5), -50);
    });

  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should subtractFive(10) to equal 5', () => {
      const subtractFive = funcs.subtractFive;
      assert.equal(subtractFive(10), 5);
    });
    it('should subtractFive(-5) to equal -10', () => {
      const subtractFive = funcs.subtractFive;
      assert.equal(subtractFive(-5), -10);
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it("should areSameLength(hello, heart) equals true", () =>{
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('hello','heart'), true);
    });
    it("should areSameLength(hi, heart) equals true", () =>{
      const areSameLength = funcs.areSameLength;
      assert.equal(areSameLength('hi','heart'), false);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should areEqual(1,2) equals false', ()=>{
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(1,2), false);
    });
    it('should areEqual(1,1) equals true', ()=>{
      const areEqual = funcs.areEqual;
      assert.equal(areEqual(1,1), true);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should be lessThanNinety(10) equals true', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(10), true);
    });
    it('should be lessThanNinety(1) equals true', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(1), true);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should be greaterThanFifty(500) equals true', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(500), true);
    });
    it('should be greaterThanFifty(10) equals false', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(10), false);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should add(1,2) equals 3', () => {
      const add = funcs.add;
      assert.equal(add(1,2), 3);
    });
    it('should add(2,2) equals 3', () => {
      const add = funcs.add;
      assert.equal(add(2,2), 4);
    }); 
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should subtract(3, 1) equals 2', () => {
      const subtract = funcs.subtract;
      assert.equal(subtract(3, 1), 2);
    });
    it('should subtract(110, 70) equals 40', () => {
      const subtract = funcs.subtract;
      assert.equal(subtract(110, 70),  40);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should divide(12,4) equals 3', () => {
      const divide = funcs.divide;
      assert.equal(divide(12,4), 3);
    });
    it('should divide(15,3) equals 5', () => {
      const divide = funcs.divide;
      assert.equal(divide(15,3), 5);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function')
    });
    it('should multiply(2,3) equals 6', () => {
      const multiply = funcs.multiply;
      assert.equal(multiply(2,3), 6);
    });
    it('should multiply(3,3) equals 9', () => {
      const multiply = funcs.multiply; 
      assert.equal(multiply(3,3), 9);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should getRemainder(15,2) equals 1', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(15,2), 1); 
    });
    it('should getRemainder(13,2) equals 1', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(13,2), 1); 
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should be isEven(4)', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(4), true);
    });
    it('should be isEven(3)', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(3), false);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should isOdd(3) equals true', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(3), true);
    });
    it('should isOdd(4) equals false', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(4), false);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should square(3) equals 9', () => {
      const square = funcs.square;
      assert.equal(square(3), 9);
    });
    it('should square(4) equals 16', () => {
      const square = funcs.square;
      assert.equal(square(4), 16);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should cube(3) equals 27', () => {
      const cube = funcs.cube;
      assert.equal(cube(3), 27);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should raiseToPower(2,2) equals 4', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(raiseToPower(2,2), 4);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should roundNumber(3.3) equals 3', () => {
      const roundNumber = funcs.roundNumber;
      assert.equal(roundNumber(3.3), 3);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should roundUp(3.8) equals 4', () => {
      const roundUp = funcs.roundUp;
      assert.equal(roundUp(3.8),4);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function')
    });
    it('should addExclamationPoint(hey)', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.equal(addExclamationPoint('hey'), 'hey!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function')
    });
    it('should combineNames(stevie, magic) equals stevie magic', () => {
      const combineNames = funcs.combineNames;
      assert.equal(combineNames('stevie', 'magic'), 'stevie magic')
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function')
    });
    it('should getGreeting(stevie) and return Hello stevie!', () => {
      const getGreeting = funcs.getGreeting;
      assert.equal(getGreeting('stevie'), 'Hello stevie!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function')
    });
    it('should getRectangleArea(3,4) returns 12', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.equal(getRectangleArea(3,4), 12);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function')
    });
    it('should getTriangleArea(2,4) equals 4', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.equal(getTriangleArea(2,4), 4);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function')
    });
    it('should getCircleArea(1) equals 3.14', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.equal(getCircleArea(1), 3.141592653589793);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function')
    });
    it('should getRectangularPrismVolume(1,1,1) equals 1', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.equal(getRectangularPrismVolume(1,1,1), 1)
    });
  });
});