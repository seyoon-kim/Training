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
// 갯수를 받아서 기존의 amount 값과 곱하여 만들어진 결과값을 amount 값으로 갖는 새로운 Fran 인스턴스 생성
Franc.prototype.times = function(multiplier) {
  var result = this.getAmount() * multiplier;
  this.setAmount(result);
  return new Franc(result);
}
// 인자로 받은 object의 amount값과 기존의 amount값을 비교하여 boolean값 리턴
Franc.prototype.equals = function(object){
  var thisAmount = this.getAmount();
  var objectAmount = object.getAmount();
  return thisAmount === objectAmount;
}

module.exports = Franc;
