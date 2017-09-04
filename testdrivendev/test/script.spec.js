var Dollar = require("../src/script");

describe("Dollar", function() {
  var result;

  beforeEach(function(){

    var test = {
      testMultiplication : function(){
        var five = new Dollar(5);
        five.times(2);
        return five.amount;
      }
    }

    result = test.testMultiplication();

  });

  it("", function() {
    expect(result).toEqual(10);
  });

});
