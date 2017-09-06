function Pair(from, to){
  this.from = from;
  this.to = to;
}

Pair.prototype.equals = function(object){
  return (this.from === object.from && this.to === object.to);
}

Pair.prototype.hashCode = function(){
  return 0;
}

module.exports = Pair;
