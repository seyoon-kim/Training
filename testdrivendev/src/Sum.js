function Sum(objAugend, objAddend){
  this.objAugend = objAugend;
  this.objAddend = objAddend;
}

Sum.prototype.plus = function(objAddend){
  return new Sum(this, objAddend);
}

Sum.prototype.times = function(multiplier){
  return new Sum(this.objAugend.times(multiplier), this.objAddend.times(multiplier));
}

module.exports = Sum;
