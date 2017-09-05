var Money = require("../src/Money");
var Dollar = require("../src/Dollar");
var Franc = require("../src/Franc");

describe("Dollar testMultiplication", function() {
  var result;

  function testMultiplication(){
    var five = Money.dollar(5);
    it("Result object of Money.dollar(5).times(2) equals Money.dollar(10)", function() {
      expect(five.times(2).getAmount()).toEqual(Money.dollar(10).getAmount());
    });
    it("Result object of Money.dollar(5).times(3) equals Money.dollar(15)", function() {
      expect(five.times(3).getAmount()).toEqual(Money.dollar(15).getAmount());
    });
  }

  testMultiplication();

});

describe("Franc testMultiplication", function() {
  var result;

  function testMultiplication(){
    var five = Money.franc(5);
    it("Result object of Money.dollar(5).times(2) equals Money.dollar(10)", function() {
      expect(five.times(2).getAmount()).toEqual(Money.franc(10).getAmount());
    });
    it("Result object of Money.dollar(5).times(3) equals Money.dollar(15)", function() {
      expect(five.times(3).getAmount()).toEqual(Money.franc(15).getAmount());
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

describe("TestCurrency", function() {
  var result;

  function testCurrency(){
    it("Money.dollar currency", function(){
      expect(Money.dollar(1).getCurrency()).toEqual("USD");
    })

    it("Money.franc currency", function(){
      expect(Money.franc(1).getCurrency()).toEqual("CHF");
    })
  }

  testCurrency();

});

describe("TestDifferentClassEquality", function() {
  var result;

  function testDifferentClassEquality(){
    it("new Money(10, 'CHF') is new Franc(10, 'CHF'))", function(){
      expect(new Money(10, "CHF").equals(new Franc(10, "CHF"))).toBe(true);
    })

    it("new Money(10, 'USD') is new Dollar(10, 'USD'))", function(){
      expect(new Money(10, "USD").equals(new Dollar(10, "USD"))).toBe(true);
    })
  }

  testDifferentClassEquality();
});
