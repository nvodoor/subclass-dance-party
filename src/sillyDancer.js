//THIS IS THE SUB CLASS
var makeSillyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps); 
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  this.timeBetweenSteps = timeBetweenSteps;
  makeDancer.call(this);
  // blinkyDancer.step = function() {
  //   // call the old version of step at the beginning of any call to this new version of step
  //var oldStep = this.step();
  //   // toggle() is a jQuery method to show/hide the <span> tag.
  //   // See http://api.jquery.com/category/effects/ for this and
  //   // other effects you can use on a jQuery-wrapped html tag.
  //   blinkyDancer.$node.toggle();
  // };

  // return blinkyDancer;
};

makeSillyDancer.prototype = Object.create(makeDancer.prototype);
makeSillyDancer.prototype.constructor = makeSillyDancer;
makeSillyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this, this.timeBetweenSteps);
  this.$node.toggle();
};