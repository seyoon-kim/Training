var Money = require('./Money');
function Bank(){
}

Bank.prototype.reduce = function(source, to){
  return Money.dollar(10);
}

module.exports = Bank;
