describe('sillyDancer', function() {

  var sillyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    sillyDancer = new makeSillyDancer(20, 10, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(sillyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node move up & down', function() {

    sinon.spy(sillyDancer.$node, 'animate' );
    // sillyDancer.setPosition( 100, 100 );
    // expect(sillyDancer.$node);
    // clock.tick(timeBetweenSteps);
    // sinon.spy(sillyDancer.$node, 'step');
    sillyDancer.step();
    expect(sillyDancer.$node.animate()).to.be.object;
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
