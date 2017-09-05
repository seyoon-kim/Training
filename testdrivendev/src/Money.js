function Money(){
  this.amount;
}

// 인자로 받은 object의 amount값과 기존의 amount값을 비교하여 boolean값 리턴
Money.prototype.equals = function(object){
  var thisAmount = this.getAmount();
  var objectAmount = object.getAmount();
  return thisAmount === objectAmount;
}

module.exports = Money;
