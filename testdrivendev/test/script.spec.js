var Money = require("../src/Money");
var Bank = require("../src/Bank");

// 비교하는 object 들이 동일한 프로퍼값을 가지고 있으면 동일하다고 판단.
var equalObjectMatcher = {
  equalMoneyObject: function() {
    return {
      compare: function(actual, expected){
        return {
          pass: actual.currency === expected.currency && actual.amount === expected.amount
        };
      }
    }
  }
}

describe("Dollar testMultiplication", function() {
  var result;
  var five = Money.dollar(5);

  beforeEach(function() {
    jasmine.addMatchers(equalObjectMatcher);
  });

  it("Result object of Money.dollar(5).times(2) equals Money.dollar(10)", function() {
    expect(five.times(2)).equalMoneyObject(Money.dollar(10));
  });
  it("Result object of Money.dollar(5).times(3) equals Money.dollar(15)", function() {
    expect(five.times(3)).equalMoneyObject(Money.dollar(15));
  });
});

describe("TestEquality", function() {
  var result;
  it("5 Dollar is 5 Dollar", function(){
    result = Money.dollar(5).equals(Money.dollar(5));
    expect(result).toBe(true);
  });

  it("5 Dollar is not 6 Dollar", function(){
    result = Money.dollar(5).equals(Money.dollar(6));
    expect(result).toBe(false);
  });

  it("5 Dollar is not 5 Franc", function(){
    result = Money.dollar(5).equals(Money.franc(5));
    expect(result).toBe(false);
  });

});

describe("TestCurrency", function() {
  var result;
  it("Money.dollar currency", function(){
    expect(Money.dollar(1).currency).toEqual("USD");
  });

  it("Money.franc currency", function(){
    expect(Money.franc(1).currency).toEqual("CHF");
  });

});

describe("Test Simple Addition", function(){

  beforeEach(function() {
    jasmine.addMatchers(equalObjectMatcher);
  });

  it("Money.dollar(5) add Money.dollar(5) is Money.dollar(10)", function(){
    var five = Money.dollar(5);
    var sum = five.plus(five);
    var bank = new Bank();
    var reduced = bank.reduce(sum, "USD");
    expect(reduced).equalMoneyObject(Money.dollar(10));
  });

});
