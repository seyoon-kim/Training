var Money = require('./Money');
function Bank(){
}

Bank.prototype.reduce = function(objSum, to){
  // var amount = objSum.augend.amount + objSum.addend.amount;
  // return Money.dollar(amount, to);

  // if(objSum instanceof Money){
  //   // return objSum;
  //   return objSum.reduce(to);
  // }
  //
  // var sum = objSum;
  // return sum.reduce(to);
  return objSum.reduce(to);
}

module.exports = Bank;
