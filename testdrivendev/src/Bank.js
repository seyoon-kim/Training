var Money = require('./Money');
var Pair = require('./Pair');

var rates = [];

function Bank(){
}

Bank.prototype.reduce = function(objSum, to){
  return objSum.reduce(this, to);
}

Bank.prototype.rate = function(from, to){
  if(from === to){
    return 1;
  }
  var rate;
  var i = 0;
  var ratesLength = rates.length;
  for(i; i < ratesLength; i++){
    if(rates[i].pair.from === from && rates[i].pair.to === to){
      rate = rates[i].rate;
    }
  }
  return rate;
}

Bank.prototype.addRate = function(from, to, rate){
  rates.push({
    pair : new Pair(from, to),
    rate : rate
  });
}

module.exports = Bank;
