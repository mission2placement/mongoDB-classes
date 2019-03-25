const mocha = require('mocha');
const assert = require('assert');
// The way mocha works, we have to describe our mocha how are test are.

describe('some demo test', function(){
  // Create test inside the function.
  // it block will create a single test.
  // Ex. test addition of 2 numbers
  it('add two numbers', function(){
    // we need to predict/assert
    assert( 2 + 3 === 5) // to use assert we need to require it from node. it's not a part of mocha.
  })
});
// To run our test we need to run-- npm run test
// Initially our package.json have something like this in test script:
    /*
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
        },
      We need to change this test inside package.json to mocha like below:
            "scripts": {
              "test": "mocha"
              },
      Then we run npm run test -- mocha will look inside the test and run our tests.
    */
