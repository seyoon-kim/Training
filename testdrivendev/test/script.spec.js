var Money = require("../src/Money");
var Bank = require("../src/Bank");
var Sum = require("../src/Sum");

// 비교하는 object 들이 동일한 프로퍼값을 가지고 있으면 동일하다고 판단.
var equalObjectMatcher = {
  equalObject: function() {
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
    expect(five.times(2)).equalObject(Money.dollar(10));
  });
  it("Result object of Money.dollar(5).times(3) equals Money.dollar(15)", function() {
    expect(five.times(3)).equalObject(Money.dollar(15));
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
    expect(reduced).equalObject(Money.dollar(10));
  });

});

/*
* 1. 5 dollar 객체, 5 dollar 객체의 합은,  (augend =  5 dollar) + (addend =  5 dollar)
*/

describe("Test Plus Returns Sum", function(){
  beforeEach(function() {
    jasmine.addMatchers(equalObjectMatcher);
  });

  it("Augend is dollar 5, Addend is dollar 5", function(){
    var five = Money.dollar(5);
    var sum = five.plus(five);
    expect(sum.objAugend).equalObject(five);
    expect(sum.objAddend).equalObject(five);
  });

});

/*
* 1. 3 dollar 객체, 4 dollar 객체의 합은,  (augend =  3 dollar) + (addend = 4 dollar)
* 2. (augend, 3 dollar) + (addend, 4 dollar)을 bank.reduce()인자로 넣으면 7 dollar 객체로 변환
*/

describe("Test Reduce Sum", function(){
  beforeEach(function() {
    jasmine.addMatchers(equalObjectMatcher);
  });

  it("dollar 3 sum dollar 4 and exchange USD and is Dollar 7", function(){
    var sum = new Sum(Money.dollar(3), Money.dollar(4));
    var bank = new Bank();
    var result = bank.reduce(sum, "USD");
    expect(result).equalObject(Money.dollar(7));
  })

});

/*
* 1. 1 dollar bank.reduce() 인자로 들어가면 1 dollar가 맞는지 확인
*/

describe("Test Reduce Money", function(){
  beforeEach(function() {
    jasmine.addMatchers(equalObjectMatcher);
  });

  it("dollar 1 exchange USD is dollar 1", function(){
    var bank = new Bank();
    var result = bank.reduce(Money.dollar(1), "USD");
    expect(result).equalObject(Money.dollar(1));
  })

});
/*
* 1. bank.addRate()함수는 인자로 from, to 화폐단위와 환율을 받은 뒤 rate라는 배열에 값을 보관한다.
* 2. bank.reduce() 함수를 통해서 money.reduce()함수를 호출하고 그안에서 bank.rate()를 통해 from, to 값으로 rate 배열을 값을 찾은 뒤 해당 객체의 rate값을 반환한다.
* 3. 반환된 rate값과 amount를 사용하여 새로운 dollar 객체를 생성한다.
*/

describe("Test Reduce Money Different Currency", function(){
  beforeEach(function() {
    jasmine.addMatchers(equalObjectMatcher);
  });

  it("2 franc exchange 1 dollar", function(){
    var bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    var result = bank.reduce(Money.franc(2), "USD");
    expect(result).equalObject(Money.dollar(1));
  })

});

describe("Test Indentity Rate", function(){
  beforeEach(function() {
    jasmine.addMatchers(equalObjectMatcher);
  });

  it("rate value of dollar exchange dollar ", function(){
    expect(new Bank().rate("USD", "USD")).toEqual(1);
  })

})
/*
* 1. 서로 다른 통화를 더한 값이 같은지 확인하는 테스트
* 2. Bank.reduce() -> Sum.reduce() Bank 객체와 환전하고싶은 단위 인자로 받는다. (Bank를 거치는 이유는 Bank의 객체를 받아서 붙어있는 함수를 사용하기 위해서)
* 3. Sum 객체의 augend의 값 5 dollar 객체, addend값 10 franc 객체의 값을 Money.reduce()를 통해 각각 환전할 단위로 바꾼다.
* 4. Money.reduce() 함수안에 Bank.rate()에서 각각의 환율을 반환하고 반환된 환율로 amount값을 계산하고 모든 amount의값을 합산한뒤 Money 객체를 생선한다.
*/

describe("Test Mixed Addition", function(){
  beforeEach(function() {
    jasmine.addMatchers(equalObjectMatcher);
  });

  it("10 franc exchange to dollar and add 5 dollar is 10 dollar", function(){
    var fiveBucks = Money.dollar(5);
    var tenFranc = Money.franc(10);
    var bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    var result = bank.reduce(fiveBucks.plus(tenFranc), "USD");
    expect(result).equalObject(Money.dollar(10));
  });

})
/*
* 1. Sum 객체의 augend 값을 계속 추가하는 plus 함수구현
* 2. this.objAugend의 값이 Sum 객체이면 Sum.reduce() 재귀 호출
* 3. this.objAugend의 값이 Money 객체이면 Money.reduce() 환율 적용하여 amount값 계산하여 Money 객체 생성
*/
describe("Test Sum Plus Money", function(){
  beforeEach(function() {
    jasmine.addMatchers(equalObjectMatcher);
  });

  it("10 franc exchange to dollar and add 5 dollar is 10 dollar", function(){
    var fiveBucks = Money.dollar(5);
    var tenFrancs = Money.franc(10);
    var bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    var sum = new Sum(fiveBucks, tenFrancs).plus(fiveBucks);
    var result = bank.reduce(sum, "USD");
    expect(result).equalObject(Money.dollar(15));
  });
})
/*
* 1. Sum 클래스에서 Sum 객체의 augend, tenFrancs 각각의 해당하는 숫자를 곱해주는 함수 생성
*/
describe("Test Sum Times", function(){
  beforeEach(function() {
    jasmine.addMatchers(equalObjectMatcher);
  });

  it("Each Property of Sum Object mutiply", function(){
    var fiveBucks = Money.dollar(5);
    var tenFrancs = Money.franc(10);
    var bank = new Bank();
    bank.addRate("CHF", "USD", 2);
    var sum = new Sum(fiveBucks, tenFrancs).times(2);
    var result = bank.reduce(sum, "USD");
    expect(result).equalObject(Money.dollar(20));
  });
})
