var Dollar = require("../src/Dollar");
var Franc = require("../src/Franc");

describe("Dollar testMultiplication", function() {
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

describe("Franc testMultiplication", function() {
  var result;

  function testMultiplication(){
    var five = new Franc(5);
    it("Result object of new Dollar(5).times(2) equals new Dollar(10)", function() {
      expect(five.times(2).setAmount()).toEqual(new Franc(10).setAmount());
    });
    it("Result object of new Dollar(5).times(3) equals new Dollar(15)", function() {
      expect(five.times(3).setAmount()).toEqual(new Franc(15).setAmount());
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

    it("5 Franc is 5 Franc", function(){
      result = new Franc(5).equals(new Franc(5));
      expect(result).toBe(true);
    })

    it("5 Franc is not 6 Franc", function(){
      result = new Franc(5).equals(new Franc(6));
      expect(result).toBe(false);
    })
  }

  testEquality();

});
