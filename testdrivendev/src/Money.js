var Sum = require('./Sum');
function Money(amount, currency){
  this.amount = amount;
  this.currency = currency;
}

Money.dollar = function(amount){
  return new Money(amount, "USD");
}

Money.franc = function(amount){
  return new Money(amount, "CHF");
}

/*
* 1. 인자로 받은 object의 amount, currency값과 기존의 값을 비교하여 boolean값 리턴
*/

Money.prototype.equals = function(object){
  var thisAmount = this.amount;
  var objectAmount = object.amount;
  return (thisAmount === objectAmount && this.currency === object.currency);
}

// 갯수를 받아서 기존의 amount 값과 곱하여 만들어진 결과값을 amount 값으로 갖는 새로운 Money 인스턴스 생성
Money.prototype.times = function(multiplier) {
  var result = this.amount * multiplier;
  return new Money(result, this.currency);
}

Money.prototype.plus = function(objAddend){
  return new Sum(this, objAddend);
}

Money.prototype.reduce = function(objBank, to){
  var rate = objBank.rate(this.currency, to);
  return new Money(this.amount / rate, to);
}

Sum.prototype.reduce = function(objBank, to){
  var amount = this.objAugend.reduce(objBank, to).amount + this.objAddend.reduce(objBank, to).amount;
  return new Money(amount, to);
}

module.exports = Money;
