var lib = require('../lib/library');
var Money = require('./Money');

var Franc = function(amount, currency){
//private variables
  var amount = amount;
  var currency = currency;

// currency getter
  this.getCurrency = function(){
    return currency;
  }

// amount getter
  this.getAmount = function(){
    return amount;
  }
}

Money.franc = function(amount){
  return new Franc(amount, "CHF");
}

// Money Class를 상속
Franc.prototype = lib.objectCreate(Money.prototype);
Franc.prototype.constructor = Franc;

// 갯수를 받아서 기존의 amount 값과 곱하여 만들어진 결과값을 amount 값으로 갖는 새로운 Fran 인스턴스 생성
Franc.prototype.times = function(multiplier) {
  var result = this.getAmount() * multiplier;
  return Money.franc(result);
}

Franc.prototype.currency = function(){
  return this.getCurrency();
}

module.exports = Franc;
