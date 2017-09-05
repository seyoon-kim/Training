var lib = require('../lib/library');
var Money = require('./Money');

var Franc = function(amount){
//private variables
  var amount = amount;
// amount setter
  this.setAmount = function(value){
    amount = value;
  }
// amount getter
  this.getAmount = function(){
    return amount;
  }
}

// Money Class를 상속
Franc.prototype = lib.objectCreate(Money.prototype);
Franc.prototype.constructor = Franc;

// 갯수를 받아서 기존의 amount 값과 곱하여 만들어진 결과값을 amount 값으로 갖는 새로운 Fran 인스턴스 생성
Franc.prototype.times = function(multiplier) {
  var result = this.getAmount() * multiplier;
  this.setAmount(result);
  return new Franc(result);
}

module.exports = Franc;
