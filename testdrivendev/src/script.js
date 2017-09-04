var Dollar = function(amount){
  this.amount = amount;
}

Dollar.prototype.times = function(multiplier) {
  this.amount *= multiplier;
};

module.exports = Dollar;
