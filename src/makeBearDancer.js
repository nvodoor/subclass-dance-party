//THIS IS THE SUB CLASS
var makeBearDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="beardancer" src="./src/giphy.gif"></img>');
  this.setPosition(top, left);
};

makeBearDancer.prototype = Object.create(makeDancer.prototype);
makeBearDancer.prototype.constructor = makeBearDancer;
makeBearDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this, this.timeBetweenSteps);
};
