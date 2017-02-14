//THIS IS THE SUB CLASS
var makeBearDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this, top, left, timeBetweenSteps);
};

makeBearDancer.prototype = Object.create(makeDancer.prototype);
makeBearDancer.prototype.constructor = makeBlinkyDancer;
makeBearDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this, this.timeBetweenSteps);
  this.$node.toggle();
};