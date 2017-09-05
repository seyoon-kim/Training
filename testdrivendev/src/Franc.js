var lib = require('../lib/library');
var Money = require('./Money');

var Franc = function(amount, currency){
  Money.call(this, amount, currency);
}

Money.franc = function(amount){
  return new Franc(amount, "CHF");
}

// Money Class를 상속
Franc.prototype = lib.objectCreate(Money.prototype);
Franc.prototype.constructor = Franc;

module.exports = Franc;
