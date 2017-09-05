function Money(amount, currency){
  this.amount = amount;
  this.currency = currency;

  this.getAmount = function(){
    return this.amount;
  }
}

/*
* 1. 인자로 받은 object의 amount값과 기존의 amount값을 비교하여 boolean값 리턴
* 2. object.constructor 인스턴스의 생성자확인 인스턴스.constructor로 확인 할 수 있다.
* 3. 인자로 받은 객체와 this(equals를 호출한 객체)객체의 생성자가 같으지 확인
*/

Money.prototype.equals = function(object){
  var thisAmount = this.getAmount();
  var objectAmount = object.getAmount();
  return (thisAmount === objectAmount && this.getCurrency() === object.getCurrency());
}

// 갯수를 받아서 기존의 amount 값과 곱하여 만들어진 결과값을 amount 값으로 갖는 새로운 Money 인스턴스 생성
Money.prototype.times = function(multiplier) {
  var result = this.getAmount() * multiplier;
  return new Money(result, this.getCurrency());
}

Money.prototype.getCurrency = function(){
  return this.currency;
}

module.exports = Money;
