var Dollar = function(amount){
  this.amount = amount;
}

Dollar.prototype.times = function(multiplier) {
  return new Dollar(this.amount * multiplier);
}

Dollar.prototype.equals = function(object){
  return this.amount === object.amount;
}

module.exports = Dollar;
