var Dollar = function(amount){
  this.amount = amount;
}

Dollar.prototype.times = function(multiplier) {
  return new Dollar(this.amount * multiplier);
};

module.exports = Dollar;
