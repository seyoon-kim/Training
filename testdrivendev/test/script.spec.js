var Dollar = require("../src/script");

describe("Dollar", function() {
  var result;

  function testMultiplication(){
    var five = new Dollar(5);
    it("Result object of new Dollar(5).times(2) equals new Dollar(10)", function() {
      expect(five.times(2).setAmount()).toEqual(new Dollar(10).setAmount());
    });
    it("Result object of new Dollar(5).times(3) equals new Dollar(15)", function() {
      expect(five.times(3).setAmount()).toEqual(new Dollar(15).setAmount());
    });
  }

  testMultiplication();

});


describe("TestEquality", function() {
  var result;

  function testEquality(){
    it("5 Dollar is 5 Dollar", function(){
      result = new Dollar(5).equals(new Dollar(5));
      expect(result).toBe(true);
    })

    it("5 Dollar is not 6 Dollar", function(){
      result = new Dollar(5).equals(new Dollar(6));
      expect(result).toBe(false);
    })

  }

  testEquality();

});
