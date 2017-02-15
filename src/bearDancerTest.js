describe('bearDancer', function() {

  var bearDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bearDancer = new makeBearDancer(20, 10, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(bearDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node move left to right', function() {
    //we need to change the bottom to reflect test case
      //sinon.spy(sillyDnacer.$node, "i don't know")
      //sillyDancer.setPosition( 20, 11 );
      //sillyDancer.setPosition( 20, 10 );
      //expect(sillDancer.$node)
    
    //sinon.spy(sillyDancer.$node, 'toggle');
    //sillyDancer.step();
    //expect(sillyDancer.$node.toggle.called).to.be.true;
  });

  // describe('dance', function() {
  //   it('should call step at least once per second', function() {
  //     debugger;
  //     sinon.spy(sillyDancer, 'step');
  //     expect(sillyDancer.step.callCount).to.be.equal(0);
  //     clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
  //     clock.tick(timeBetweenSteps);

  //     expect(sillyDancer.step.callCount).to.be.equal(1);

  //     clock.tick(timeBetweenSteps);
  //     expect(sillyDancer.step.callCount).to.be.equal(2);
  //   });
  // });
});