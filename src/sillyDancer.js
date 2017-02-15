//THIS IS THE SUB CLASS
var makeSillyDancer = function(top, left, timeBetweenSteps) {
  // var blinkyDancer = makeDancer(top, left, timeBetweenSteps); 
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<div class="bluedancer"></div>');
  this.setPosition(0, left);
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
  makeDancer.prototype.step.call(this);
  //set action you want it to do
  // this.$node = $('<div class="bluedancer"></div>');
  this.$node.animate({bottom: '+=100'}, 'slow');
  this.$node.animate({bottom: '-=100'}, 'slow'); 
};
makeSillyDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    bottom: top,
    left: left
  };
  this.$node.css(styleSettings);
};