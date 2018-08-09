const expect = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for our `adder` function
describe('fizzBuzzer', function() {

  it('should throw an error when input is not a number', function() {
    // range of bad inputs that are not a number
    const badInputs = [
      'a',
      '?',
      true
    ];
    // prove that an error is raised for bad inputs
    badInputs.forEach(function(input) {
      expect(function() {
        fizzBuzzer(input);
      }).to.throw(Error);
    });
  });

  // test the normal case
  it('should return fizz-buzz when input is divisible by 15', function() {

    const normalCases = [
      30,
      15,
      45
    ];

    const expected = 'fizz-buzz';
    // for each set of inputs (a, b), `adder` should
    // produce the expected value
    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal(expected);
    });
  });

  it('should return buzz when input is divisible by 5', function() {

    const normalCases = [
      5,
      10,
      20
    ];

    const expected = 'buzz';

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal(expected);
    });
  });
  
  it('should return fizz when input is divisible by 3', function() {
   
    const normalCases = [
      3,
      6,
      9
    ];

    const expected = 'fizz';

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      expect(answer).to.equal(expected);
    });
  });

  it('should return the number inputted if not divisible by 15, 5, or 3', function() {
   
    const normalCases = [
      1,
      2,
      4
    ];

    normalCases.forEach(function(input) {
      const answer = fizzBuzzer(input);
      const expected = input;
      expect(answer).to.equal(expected);
    });
  });
});