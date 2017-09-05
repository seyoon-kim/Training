var Money = require("../src/Money");
var Dollar = require("../src/Dollar");
var Franc = require("../src/Franc");

describe("Dollar testMultiplication", function() {
  var result;

  function testMultiplication(){
    var five = Money.dollar(5);
    it("Result object of Money.dollar(5).times(2) equals Money.dollar(10)", function() {
      expect(five.times(2).setAmount()).toEqual(Money.dollar(10).setAmount());
    });
    it("Result object of Money.dollar(5).times(3) equals Money.dollar(15)", function() {
      expect(five.times(3).setAmount()).toEqual(Money.dollar(15).setAmount());
    });
  }

  testMultiplication();

});

describe("Franc testMultiplication", function() {
  var result;

  function testMultiplication(){
    var five = Money.franc(5);
    it("Result object of Money.dollar(5).times(2) equals Money.dollar(10)", function() {
      expect(five.times(2).setAmount()).toEqual(Money.franc(10).setAmount());
    });
    it("Result object of Money.dollar(5).times(3) equals Money.dollar(15)", function() {
      expect(five.times(3).setAmount()).toEqual(Money.franc(15).setAmount());
    });
  }

  testMultiplication();

});


describe("TestEquality", function() {
  var result;

  function testEquality(){
    it("5 Dollar is 5 Dollar", function(){
      result = Money.dollar(5).equals(Money.dollar(5));
      expect(result).toBe(true);
    })

    it("5 Dollar is not 6 Dollar", function(){
      result = Money.dollar(5).equals(Money.dollar(6));
      expect(result).toBe(false);
    })

    it("5 Franc is 5 Franc", function(){
      result = Money.franc(5).equals(Money.franc(5));
      expect(result).toBe(true);
    })

    it("5 Franc is not 6 Franc", function(){
      result = Money.franc(5).equals(Money.franc(6));
      expect(result).toBe(false);
    })

    it("5 Dollar is not 5 Franc", function(){
      result = Money.dollar(5).equals(Money.franc(5));
      expect(result).toBe(false);
    })
  }

  testEquality();

});
